const { builder } = require("@netlify/functions");
const fetch = require("node-fetch");

const handler = async (event, context) => {
  const epath = event.path.split("/");
  const pid = epath[epath.length - 1];

  const product = await fetch("http://test.gasport.com.ng/API/OrderList", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data.filter((product) => product.id == pid);
    })
    .catch((error) => String(error));
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
    <!DOCTYPE html>
	    <html>
		    <body>
		      <div
          style="max-width:300px, margin: auto  ">
            <img src=${product[0].image} alt="product image" />
            <h1>${product[0].title}</h1>
            <p style="font-size:22px">$${product[0].price}</p>
            <p style="word-wrap: break-word">${product[0].description}</p>
            <p><button>Add to Cart</button></p>
          </div>
		    </body>
    </html>
    `,
  };
};

exports.handler = builder(handler);

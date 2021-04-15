# ON-DEMAND-MEALS BUILDER DEMO

This tiny restaurant site shows a handful of meals from [this api](http://test.gasport.com.ng/API/OrderList) .

At build time, all the meals are pre generated via Gridsome's GraphQL data layer and served as static assets.

On clicking any of the meals, we trigger the `/functions/product.js` builder function to fetch the details of the meal, hence, generating views on demand for each product.

The retrieved meal is then cached, and served to users on subsequent requests.

### Resource:

I put together [this api](http://test.gasport.com.ng/API/OrderList) just to return the data I needed for the demo.

### Deployed site

https://on-demand-meals.netlify.app/

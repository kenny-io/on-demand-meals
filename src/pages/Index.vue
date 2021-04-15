<template>
  <Layout>
    <template>
      <Products />
    </template>
  </Layout>
</template>

<page-query>
query{
  products: allProduct{
    edges{
      node{
        id,
        title,
        description,
        rating,
        price,
        image
      }
    }
  }
}
</page-query>

<script>
import Products from "@/components/Products.vue";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Products,
  },
};
</script>

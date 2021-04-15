<template>
  <div>
    <h2 class="mt-5" align="center" justify="center">
      All the meals listed below are pregenerated at build time!
    </h2>
    <p class="mt-5" align="center" justify="center">
      However, if you click into any of the products, we'll fetch the page
      on-demand for the first request and subsequently serve it from cache.
      Yaay! On-demand builders
    </p>
    <strong
      ><p class="mt-5 " align="center" justify="center">
        Yaay! On-demand builders
      </p>
    </strong>
    <v-container class="mb-3">
      <v-row :align="align" no-gutters>
        <v-col md="4" v-for="edge in $page.products.edges" :key="edge.node.id">
          <a
            :href="`/product/${edge.node.id}`"
            style="text-decoration: none; color: inherit"
          >
            <v-card :loading="loading" class="ma-3" shaped>
              <v-img height="250" :src="`${edge.node.image}`"></v-img>
              <v-card-title>{{ edge.node.title }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="edge.node.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                </v-row>
              </v-card-text>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

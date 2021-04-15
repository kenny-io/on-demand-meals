<!-- src/layouts/Default.vue -->
<template>
  <v-app>
    <div>
      <v-app-bar
        absolute
        color="#0e0e0e"
        dark
        shrink-on-scroll
        scroll-target="#scrolling-techniques-2"
      >
        <g-link
          class="mt-7 ml-3"
          style="text-decoration: none; color: inherit"
          to="/"
          >{{ $static.metadata.siteName }}
        </g-link>
        <v-spacer></v-spacer>
        <v-btn class="mt-4 mr-4 ml-4 snipcart-checkout" icon>
          <v-icon>mdi-cart</v-icon>
          <span class="snipcart-total-items"></span>
          <span class="snipcart-total-price">{{ this.totalPrice }}</span>
        </v-btn>
      </v-app-bar>

      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 120px"></v-container>
      </v-sheet>
      <slot />
    </div>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

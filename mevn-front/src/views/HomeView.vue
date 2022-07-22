<template lang="pug">
  div
    product-card(
      v-for="(product, key) in products"
      :key="key"
      :title="product.title"
      :price="product.price"
      :image-url="product.imageUrl"
      )
</template>

<script>
import productCard from "@/components/layouts/ProductCard";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {
    productCard,
  },
  async created() {
    await this.fetchProducts();
    console.log(this.$store.state);
  },
  computed: {
    ...mapGetters({
      products: "products",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
  },
};
</script>

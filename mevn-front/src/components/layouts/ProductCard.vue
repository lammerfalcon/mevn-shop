<template lang="pug">
v-card(max-width="300")
  v-img(:src="imageUrl")
  v-card-title {{ title }}
  v-card-subtitle Цена: {{ price }} рубля
  v-card-subtitle {{ description }}
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>

<template lang="pug">
.card {{ title }} - {{ price }}
  img(:src="imageUrl")
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    title: {
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

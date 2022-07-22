<template lang="pug">
  header
    .left logo
    .rigth
      ul.nav
        li.nav-link(v-for="({id, title}, key) in categories" :key="key")
          router-link.nav-link(:to="`category/${id}`") {{ title }}
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #c7ffed;
  padding: 0;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.05);
}
.nav {
  display: flex;
  list-style-type: none;
  .nav-link {
    text-decoration: none;
    margin: 20px;
  }
}
</style>

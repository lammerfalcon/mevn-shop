<template lang="pug">
  div
    nav-header(:categories="categories")
    router-view
</template>
<style lang="scss"></style>
<script>
import NavHeader from "@/components/layouts/NavHeader";
export default {
  components: { NavHeader },
  data() {
    return {
      categories: [
        { title: "PS4", id: 1 },
        { title: "XBOX", id: 2 },
        { title: "PC", id: 3 },
      ],
    };
  },
};
</script>
<style>
html {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  height: 100%;
  background: #008f8c no-repeat;
}
</style>

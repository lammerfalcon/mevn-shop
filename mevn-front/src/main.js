import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuePugPlugin from "vue-pug-plugin";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuePugPlugin,
  render: (h) => h(App),
}).$mount("#app");

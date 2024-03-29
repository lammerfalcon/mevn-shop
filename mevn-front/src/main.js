import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuePugPlugin from "vue-pug-plugin";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuePugPlugin,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

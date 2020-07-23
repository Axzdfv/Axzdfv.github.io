import Vue from "vue";
import signin from "./signin.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(signin)
}).$mount("#app");

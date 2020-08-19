import Vue from "vue";
import payui from "./payUI.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(payui)
}).$mount("#app");

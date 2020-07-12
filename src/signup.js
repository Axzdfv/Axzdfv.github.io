import Vue from "vue";
import signup from "./signup.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(signup)
}).$mount("#app");

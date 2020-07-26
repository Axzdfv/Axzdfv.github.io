import Vue from "vue";
import eventCreator from "./eventCreator.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(eventCreator)
}).$mount("#eventCreator");

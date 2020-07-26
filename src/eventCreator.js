import Vue from "vue";
import eventcreator from "./eventCreator.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(eventcreator)
}).$mount("#eventCreator");

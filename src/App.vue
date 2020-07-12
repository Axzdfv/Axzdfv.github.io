<>
<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue in CodeSandbox! This is a test" />
    <p>{{ de }}</p>
  </div>
</template>
/* eslint-disable */
<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  el: "#app",
  data() {
    return {
      de: "adgjk"
    };
  }
};
</script>
/* eslint-enable */
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
</>

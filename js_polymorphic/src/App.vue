<template>
  <div id="app">
    <ploy></ploy>
    <!-- <ploy></ploy> -->
  </div>
</template>

<script>
import Ploy from "./components/Ploy.vue";

export default {
  name: "app",
  components: {
    Ploy
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

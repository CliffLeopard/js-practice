<template>
  <div id="vm">
    <h1>webpack的使用</h1>
    <h2>{{message}}</h2>
    <h1>I'm using webpack-dev-server</h1>
  </div>
</template>

<script>
export default {
  name: "dm_cpt",
  data() {
    return {
      message: "Hello Webpack Agin"
    };
  }
};
</script>

<style scoped>
</style>
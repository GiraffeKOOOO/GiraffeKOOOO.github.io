<template>
  <div id="app">
    <img src="./assets/logo.png" id="vue-logo">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#vue-logo {
  width: 100px;
  height: 100px;
}
</style>

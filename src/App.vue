<template>
  <div id="app">
    <router-view></router-view>
    <router-link :to="{ name: 'HomePage' }">Home Page</router-link>

    <router-link :to="{ name: 'OtherPage' }">Other Page</router-link>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

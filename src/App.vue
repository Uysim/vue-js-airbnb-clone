<template>
  <div id="app">
    <router-view></router-view>
    <router-link :to="{ name: 'HomePage' }">Home Page</router-link>
    <router-link :to="{ name: 'OtherPage' }">Other Page</router-link>
    <router-link :to="{ name: 'LoginPage' }">Login Page</router-link>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

</style>

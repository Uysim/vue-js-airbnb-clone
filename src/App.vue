<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>

    </component>
  </div>
</template>

<script>

const default_layout = 'default'

export default {
  name: 'app',
  computed: {
    layout(){
      return (this.$route.meta.layout || default_layout) + '_layout'
    }
  }
}
</script>

<style>

</style>

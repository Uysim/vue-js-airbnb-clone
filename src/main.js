import Vue from 'vue'
import VueRouter from 'vue-router'
import ShardsVue from 'shards-vue'

import App from './App.vue'
import routes from './routes'

import NoLinkLayout from './layouts/NoLink'
import WithLinkLayout from './layouts/WithLink'

import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'

Vue.use(VueRouter)
Vue.use(ShardsVue)
Vue.component('no_link_layout', NoLinkLayout)

Vue.component('with_link_layout', WithLinkLayout)

Vue.config.productionTip = false

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

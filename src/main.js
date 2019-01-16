import Vue from 'vue'
import VueRouter from 'vue-router'
import ShardsVue from 'shards-vue'

import { store } from './stores'

import App from './App.vue'
import routes from './routes'

import BlankLayout from './layouts/Blank'
import DefaultLayout from './layouts/Default'

import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'

Vue.use(VueRouter)
Vue.use(ShardsVue)

Vue.component('blank_layout', BlankLayout)
Vue.component('default_layout', DefaultLayout)

Vue.config.productionTip = false

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})

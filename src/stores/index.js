import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import Session from './models/session'



Vue.use(Vuex)

const database = new VuexORM.Database({})
database.register(Session)

VuexORM.use(VuexORMAxios, {
  database,
  http: {
    baseURL: 'http://localhost:3000/api/v1',
    url: '/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
})

export const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
  actions: {
    login ({commit}, {useremail, password}) {
      return Session.$create({data: {
        email: useremail,
        password: password
      }})
    }
  }
})

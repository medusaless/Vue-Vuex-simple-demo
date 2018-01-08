import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

new Vue({
  el: '#app',
  store:new Vuex.Store(store),
  render: h => h(App)
})

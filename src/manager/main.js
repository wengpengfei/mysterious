import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import stores from './stores'
import routes from './routers'

// 使用插件
Vue.use(Vuex)
Vue.use(VueRouter)

// 实例化对象
const router = new VueRouter({ routes })
const store = new Vuex.Store(stores)

new Vue({
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
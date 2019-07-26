import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import stores from './stores'
import routes from './routers'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用插件
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

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
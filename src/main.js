
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import store from './store'
import Sidebar from './components/Sidebar'
import Hello from './components/Hello'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  {
    path: '/hello',
    component: Hello
  }, {
    path: '/sidebar',
    component: Sidebar
  }]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
// 实例化我们的Vue
new Vue({
  el: '#app',
  router,
  store,
  ...App
})

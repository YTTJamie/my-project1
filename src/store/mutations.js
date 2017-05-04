
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Hello from './components/Hello'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{path: '/', component: Hello}, {path: '/hello', component: Hello}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
// 实例化我们的Vue
new Vue({
  el: '#app',
  router,
  ...App
})

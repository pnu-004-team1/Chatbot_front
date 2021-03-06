// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './common/css/base.css'
import './common/css/menu.css'
import './common/css/sign.css'
// import { store } from './store/store'
import store from './store'
import 'expose-loader?$/expose-loader?jQuery/jquery'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

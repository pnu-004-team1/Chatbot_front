import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sign from '@/components/Sign'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

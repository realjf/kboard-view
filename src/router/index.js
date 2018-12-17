import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Log from '@/components/logs/Log'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/log',
      name: 'Log',
      component: Log
      },{
      path: '*',
      redirect: '/login',
    }
  ]
})

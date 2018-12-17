import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Log from '@/components/logs/Log'
import Login from "@/components/Login";

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
       path: '/login',
       name: 'Login',
       component: Login
      },{
      path: '*',
      redirect: '/login',
    }
  ]
})

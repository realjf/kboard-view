import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Log from '../views/watch/Log'
import Login from "../views/Login";
import UserList from "../views/user/UserList";
import TeamList from "../views/team/TeamList";
import StorageMysql from "../views/storage/StorageMysql";
import StorageRedis from "../views/storage/StorageRedis";
import StorageRbd from "../views/storage/StorageRbd";
import StorageObject from "../views/storage/StorageObject";
import StorageFile from "../views/storage/StorageFile";
import NetIngress from "../views/net/NetIngress";
import Setting from "../views/Setting";


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
          path: '/user/index',
          name: 'UserList',
          component: UserList
      },{
          path: '/team/index',
          name: 'TeamList',
          component: TeamList,
      },{
          path: '/storage/mysql',
          name: 'StorageMysql',
          component: StorageMysql
      },{
          path: '/storage/redis',
          name: 'StorageRedis',
          component: StorageRedis,
      },{
          path: '/storage/rbd',
          name: 'StorageRbd',
          component: StorageRbd,
      },{
          path: '/storage/object',
          name: 'StorageObject',
          component: StorageObject,
      },{
          path: '/storage/file',
          name: 'StorageFile',
          component: StorageFile,
      },{
          path: '/net/ingress',
          name: 'NetIngress',
          component: NetIngress,
      },{
          path: '/setting',
          name: 'Setting',
          component: Setting,
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

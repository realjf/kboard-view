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
import MyOrder from "../views/order/MyOrder";
import ServiceList from "../views/service/ServiceList";
import AppList from "../views/app/AppList";
import SecretList from "../views/config/SecretList";
import ConfigmapList from "../views/config/ConfigmapList";
import RoleList from "../views/user/RoleList";
import ImagePublic from "../views/image/ImagePublic";
import ImagePrivate from "../views/image/ImagePrivate";
import ImageTeam from "../views/image/ImageTeam";


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
          path: '/role/index',
          name: 'RoleList',
          component: RoleList,
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
          path: '/configmap/list',
          name: 'ConfigmapList',
          component: ConfigmapList,
      },{
          path: '/secret/list',
          name: 'SecretList',
          component: SecretList,
      },{
          path: '/app/list',
          name: 'AppList',
          component: AppList,
      },{
          path: '/service/list',
          name: 'ServiceList',
          component: ServiceList,
      },{
          path: '/image/public',
          name: 'ImagePublic',
          component: ImagePublic,
      },{
          path: '/image/team',
          name: 'ImageTeam',
          component: ImageTeam,
      },{
          path: '/image/private',
          name: 'ImagePrivate',
          component: ImagePrivate,
      },{
          path: '/order',
          name: 'MyOrder',
          component: MyOrder,
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

import Vue from 'vue' // 引用vue 必须
import VueRouter from 'vue-router' // 引用vue路由 必须
import Films from '@/views/Films.vue'
import Cinemas from '@/views/Cinemas.vue'
import Nowplaying from '@/views/films/Nowplaying.vue'
import Comingsoon from '@/views/films/Comingsoon.vue'
import Search from '@/views/Search.vue'
// import Center from '@/views/Center.vue'
// import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'
import Detail from '@/views/Detail.vue'
Vue.use(VueRouter) // 注册路由插件,两个全局router-view和router-link

// 配置表
const routes = [
  {
    path: '/films',
    component: Films,
    // 嵌套路由
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      // 重定向
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    name: 'wrpDetail', // 命名路由
    path: '/detail/:myid', // 动态二级路由
    component: Detail
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/center',
    component: () => import('@/views/Center'), // 路由懒加载
    meta: { // meta 路由元
      isWrpRequired: true
    }
    // 路由独享拦截
    // beforeEnter:(to, from, next) => {
    //   if(localStorage.getItem('token')){
    //     next()
    //   }else{
    //     next('/login')
    //   }
    // }
  },
  {
    path: '/order',
    component: () => import('@/views/Order'),
    meta: { // meta 路由元
      isWrpRequired: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  // 重定向(优先级最低)
  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

// // 全局拦截 (守卫)  to(要跳转的位置) from(从哪里来) next(下一步处理)
// router.beforeEach((to, from, next) => {
//   if(to.meta.isWrpRequired){
//   // 判断 本地存储中是否token
//     if(localStorage.getItem('token')){
//       next()
//     }else{
//       next({
//         path:'/login',
//         query:{redirect:to.fullPath}
//       })
//     }
//   }else{
//     next()
//   }
// })
export default router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

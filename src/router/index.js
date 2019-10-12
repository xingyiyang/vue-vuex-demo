import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue')
    },
    {
      path: '/userCenter',
      name: "userCenter",
      component: () => import('../pages/userCenter.vue')
    },
    {
      path: "/course/:id",
      name: "course",
      component: () => import('../pages/course.vue')
    }
  ]
})

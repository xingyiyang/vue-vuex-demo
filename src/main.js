// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
//自动引入router文件夹下面的index.js
import router from './router'
//自动引入store文件夹下面的index.js
import store from "./store"

Vue.config.productionTip = false
Vue.use(Vuex)

Vue.prototype.$store  = store

router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === "/login"){
    next()
  } else {
    next({
      path: "/login"
    })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

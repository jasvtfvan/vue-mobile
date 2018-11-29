import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from '@/router/routers'
import store from '@/store/index'
import { sync } from 'vuex-router-sync'
import { VUX_LOADING } from '@/constants/publicTypes'
import { LOGOUT } from '@/constants/apiTypes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routers,
  mode: "history"
})

sync(store, router)

router.beforeEach(function (to, from, next) {

  // if (to.meta.home) {
  //   to.meta.animation = 'animated zoomIn faster';//向右滑入动画
  // } else {
  //   if (to.meta.isback) {//不存在说明是第一次，才要存 ，记录第一次进去的父级路径，用于判断返回
  //     to.meta.animation = 'animated slideInRight faster';//向右滑入动画
  //   } else {
  //     to.meta.animation = 'animated slideInLeft faster';//向左滑入动画
  //   }
  // }

  if (to.meta.isback) {//不存在说明是第一次，才要存 ，记录第一次进去的父级路径，用于判断返回
    to.meta.animation = 'animated slideInRight faster';//向右滑入动画
  } else {
    to.meta.animation = 'animated slideInLeft faster';//向左滑入动画
  }


  store.commit(VUX_LOADING, { isLoading: true })
  if (to.matched.some(r => r.meta && r.meta.white)) { //白名单
    if (to.name.toLowerCase == 'login') {
      store.commit(LOGOUT)
    }
    next()
  } else {
    if (store.getters.token) {
      next()
    } else {
      next({
        path: '/',
        query: { redirect: to.fullPath },
        replace: true
      })
      store.commit(VUX_LOADING, { isLoading: false })
    }
  }
})
router.afterEach(function (to) {
  store.commit(VUX_LOADING, { isLoading: false })
})

export default router

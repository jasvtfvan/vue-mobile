import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from '@/router/routers'
import store from '@/store/index'
import { sync } from 'vuex-router-sync'
import { VUX_LOADING } from '@/constants/publicTypes'
import { LOGOUT } from '@/constants/apiTypes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routers
})

sync(store, router)

router.beforeEach(function (to, from, next) {
  store.commit(VUX_LOADING, {isLoading: true})
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
        query: {redirect: to.fullPath},
        replace: true
      })
      store.commit(VUX_LOADING, {isLoading: false})
    }
  }
})
router.afterEach(function (to) {
  store.commit(VUX_LOADING, {isLoading: false})
})

export default router

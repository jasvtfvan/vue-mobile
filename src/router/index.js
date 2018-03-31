import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from '@/router/routers'
import store from '@/store/index'
import { sync } from 'vuex-router-sync'
import { VUX_LOADING } from '@/constants/publicTypes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routers
})

sync(store, router)

router.beforeEach(function (to, from, next) {
  store.commit(VUX_LOADING, {isLoading: true})
  next()
})
router.afterEach(function (to) {
  store.commit(VUX_LOADING, {isLoading: false})
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from '@/router/routers'
import store from '@/store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routers
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

export default router

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import user from '@/store/modules/user'
import menu from '@/store/modules/menu'
import getters from '@/store/getters'
import { VUX_LOADING } from '@/constants/publicTypes'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    menu
  },
  getters,
  plugins: debug ? [createLogger()] : []
})

//通过vux添加页面loadding
store.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    [VUX_LOADING](state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

export default store

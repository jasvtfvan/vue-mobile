// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store/index'
import FastClick from 'fastclick'
import 'babel-polyfill'
import { ToastPlugin, AlertPlugin } from 'vux'

const mock = process.env.USER_MOCK
if (mock) {
  require('@/mock')
}

import 'vux/src/styles/reset.less'
import '@/styles/index.less'

// FastClick.attach(document.body)

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export const $vux = Vue.$vux;

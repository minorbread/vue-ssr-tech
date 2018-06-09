import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Vuex from 'vuex'
import createRouter from './config/routes'

import './assets/styles/global.styl'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watched', newCount)
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

store.registerModule('c', {
  state: {
    text: 3
  }
})
// store.unregisterModule('c')

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#root')

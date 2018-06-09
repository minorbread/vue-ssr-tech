import Router from 'vue-router'

import routes from './router'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    // fallback: true,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savePosition) {
      // console.log('to', to)
      // console.log('from', from)
      // console.log('savePosition', savePosition)
      if (savePosition) {
        return savePosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
    // parseQuery(query) {

    // },
    // stringifyQuery(obj) {

    // }
  })
}

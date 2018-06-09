import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate() {
    console.log(this.$el, 'beforeCreate')
  },
  created() {
    console.log(this.$el, 'created')
  },
  beforeMount() {
    console.log(this.$el, 'beforeMount')
  },
  mounted() {
    console.log(this.$el, 'mounted')
  },
  updated() {
    console.log(this, 'updated')
  },
  // component
  activated() {
    console.log(this, 'activated')
  },
  // component
  deactivated() {
    console.log(this, 'deactivated')
  },
  beforeDestroy() {
    console.log(this, 'beforeDestroy')
  },
  destroyed() {
    console.log(this, 'destroyed')
  },
  render(h) {
    throw new TypeError('render error')
    // console.log('render function')
    // return h('div', {}, this.text)
  },
  renderError(h, err) {
    return h('div', {}, err.stack)
  },
  errCaptured() {
    // 冒泡
  }

})
app.$mount('#root')

// setInterval(() => {
//   app.text = app.text += 1
// }, 1000)

// setTimeout(() => {
//   app.$destory()
// }, 1000)

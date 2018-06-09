import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div
      :class="[ isActive ? 'active' : 'no active' ]"
      :style="[styles, styles2]"
    >
      {{isActive ? 'active' : 'no active'}}
      {{arr.join(' ')}}
      {{Date.now()}}
      <p v-html="html"></p>
      <p>{{this.getJoinArr(arr)}}</p>
    </div>
  `,
  // template: `
  //   <div :class="[{ active: !isActive }]">
  //     {{isActive ? 'active' : 'no active'}}
  //     {{arr.join(' ')}}
  //     {{Date.now()}}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  // template: `
  //   <div v-bind:id="aaa" @click="handleClick">
  //     {{isActive ? 'active' : 'no active'}}
  //     {{arr.join(' ')}}
  //     {{Date.now()}}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red'
      // appearance: 'none'
    },
    styles2: {
      color: 'yellow'
    }
  },
  computed: {
    classNames () {

    }
  },
  methods: {
    handleClick() {
      alert('test') //eslint-disable-line
    },
    getJoinArr(arr) {
      return arr.join(' ')
    }
  }
})

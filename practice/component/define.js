import Vue from 'vue'

const component = {
  template: '<div><input type="text" v-model.number="text" />This is Component number{{text}}</div>',
  data() {
    return {
      text: 123
    }
  }
}

const data = {
  text: 0
}

const component2 = {
  template: `
    <div>
    <input type="text" v-model.number="text" />
    </div>
  `,
  data() {
    return data
  }
}

const component3 = {
  // 严谨
  props: {
    active: {
      type: Boolean,
      // 对象时候使用return{ data: asdas }
      default: true
    },
    propOne: String
    // validator(value) {
    //   return type value === 'boolean'
    // }
    // onChange: Function
  },
  template: `
    <div>
      <input type="text" v-model.number="text" />
      <span v-show="active">see me if active</span>
      <span @click="handleChange">{{propOne}}</span>
    </div>
  `,
  data() {
    return data
  },
  methods: {
    handleChange() {
      // this.onChange()
      this.$emit('change')
    }
  },
  mounted() {
    // this.propOne = 'inner content'
  }
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component,
    CompTwo: component2,
    CompThree: component3
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange() {
      this.prop1 += 1
    }
  },
  mounted() {
    // 引用子
    console.log(this.$refs.CompThree)
  },
  el: '#root',
  template: `
    <div>
      <Comp-two></Comp-two>
      <Comp-one></Comp-one>
      <Comp-three ref="CompThree" :active="true" @change="handleChange" :prop-one="prop1"></Comp-three>
    </div>
  `
})

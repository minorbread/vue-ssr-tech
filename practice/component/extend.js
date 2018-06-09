import Vue from 'vue'

const data = {
  text: 0
}

const component = {
  // 严谨
  props: {
    active: {
      type: Boolean,
      // 对象时候使用return{ data: asdas }
      default: true
    },
    propOne: {
      type: String
      // required: true
    }
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
    console.log('comp mounted')
    // this.propOne = 'inner content'
  }
}

const parent = new Vue({
  name: 'parent'
})

// 2.extend
const component2 = {
  parent: parent,
  extends: component,
  data() {
    return {
      text: 1
    }
  },
  mounted() {
    this.$parent.text = '123123'
    console.log(this.$parent.$options.name)
    console.log('comp2 mounted')
  }
}

// 1.extend
// const CompVue = Vue.extend(component)
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: '123'
//   },
//   data: {
//     text: '213124'
//   },
//   mounted() {
//     console.log('comp in mounted')
//   }
// })

// new Vue({
//   components: {
//     CompThree: component
//   },
//   data: {
//     prop1: 'text1'
//   },
//   methods: {
//     handleChange() {
//       this.prop1 += 1
//     }
//   },
//   mounted() {
//     // 引用子
//     console.log(this.$refs.CompThree)
//   },
//   el: '#root',
//   template: `
//     <div>
//       <Comp-three ref="CompThree" :active="true" @change="handleChange" :prop-one="prop1"></Comp-three>
//     </div>
//   `
// })

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  mounted() {
    console.log(this.$parent.$options.name)
  },
  data: {
    text: 233333
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})

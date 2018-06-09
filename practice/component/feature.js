import Vue from 'vue'

const ChildComponent = {
  template: `
    <div>child component{{data.value}}</div>
  `,
  inject: ['yeye', 'data'],
  mounted() {
    console.log(this.$parent.$options.name)
    console.log(this.yeye)
    console.log(this.value)
  }
}

var component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  template: `
    <div :style="style">
      <slot :value="value" aaa="111"></slot>
      <div class="header"><slot name="header"></slot></div>
      <div class="body"><slot name="body"></slot></div>
      2134
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide() {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      value: this.value,
      data
    }
  },
  el: '#root',
  data() {
    return {
      value: '123'
    }
  },
  mounted() {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  template: `
    <div>
      <input type="text" v-model="value" />
      <comp-one ref="comp"><span ref="span" slot-scope="props">{{props.value}}{{props.aaa}}</span><span slot="header">This is header{{value}}</span><span slot="body">This is body</span></comp-one>
    </div>
  `
})

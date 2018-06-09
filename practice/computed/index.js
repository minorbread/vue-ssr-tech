import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p>FullName: {{fullName}}</p>
      <p><input type="text" v-model="number" /></p>
      <p>FirstName: <input type="text" v-model="firstName" /></p>
      <p>LastName<input type="text" v-model="lastName" /></p>
      <p>Obj.a<input type="text" v-model="obj.a" /></p>
    </div>
  `,
  data: {
    firstName: 'Jocky',
    lastName: 'Lou',
    number: 0,
    fullName: '',
    obj: {a: '123'}
  },
  // mounted() {
  //   this.obj = {
  //     a: '1233'
  //   }
  // },
  // 性能 依赖值改变
  computed: {
    name2() {
      console.log('new name')
      return `${this.firstName} ${this.lastName}`
    },
    name: {
      get() {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set(name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.LastName = names[1]
      }
    }
  },
  methods: {
    getName() {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    firstName: {
      handler(newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      }
    },
    // obj: {
    //   handler() {
    //     console.log('obj.a changed')
    //   },
    //   immediate: true,
    //   deep: true
    // },
    'obj.a': {
      handler() {
        console.log('obj.a changed')
      },
      // 立即触发
      immediate: true
    }
  }
})

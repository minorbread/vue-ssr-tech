import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-once >Text: {{text}}</div>
      <div v-pre >Text: {{text}}</div>
      <div v-cloak >Text: {{text}}</div>
      <div v-text="'Text' + text" >Text: {{text}}</div>
      <div v-html="html"></div>
      <div v-show="active">213</div>
      <div v-if="text === 0">text === 0</div>
      <div v-if="active">不存在document里</div>
      <div v-else-if="text === 0 ">else if</div>
      <div v-else>else content</div>
      <input type="text" v-model="text" />
      <input type="text" v-model.trim="text" />
      <input type="text" v-model.lazy="text" />
      <input type="text" v-model.number="text" />
      <input type="checkbox" v-model="active" />
      <div>
        <input type="checkbox" :value="1" v-model="arr" />
        <input type="checkbox" :value="2" v-model="arr" />
        <input type="checkbox" :value="3" v-model="arr" />
        <input type="checkbox" :value="4" v-model="arr" />
      </div>
      <div>
        <input type="radio" value="one" v-model="picked" />
        <input type="radio" value="two" v-model="picked" />
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
        <li v-for="(value, key, index) in obj">{{value}}:{{key}}:{{index}}</li>
      </ul>
    </div>
  `,
  watch: {
    text: {
      handler() {
        this.active = !this.active
      }
    }
  },
  data: {
    picked: '',
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '345',
      c: '456'
    },
    text: 0,
    active: false,
    html: '<h1>this is html</h1>'
  }
})

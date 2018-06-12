<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <todo></todo> -->
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
<!--     <tabs>
      <tab label="text">
        <span slot="label"></span>
        <p>This is tab content</p>
      </tab>
      <tab></tab>
      <tab></tab>
    </tabs>
    <ul>
      <li>label1</li>
      <li>label2</li>
    </ul>
    <div class="tab-container">
      This is tab content
    </div> -->

    <router-link to="/app">app2</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <notification content="test notify" /> -->
    <button @click="notify">notify</button>
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  metaInfo: {
    title: 'ZGQ\'s Todo App'
  },
  components: {
    Header,
    Footer
    // Todo
  },
  methods: {
    // ...mapActions([]),
    // ...mapMutations([])
    notify() {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  mounted() {
  },
  computed: {
    // ...mapState({ }),
    // ...mapGetters({ })
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>



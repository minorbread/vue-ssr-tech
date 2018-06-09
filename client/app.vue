<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{counter}}</p>
    <p>{{fullName}}</p>
    <!-- <todo></todo> -->
    <!-- <router-link :to="{name: 'app'}">app</router-link> -->
    <router-link to="/app/123">app2</router-link>
    <router-link to="/app/456">app3</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/login/exact">exact</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  mounted() {
    console.log(this.$route)
    console.log(this.$store)
    // let i = 1
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // setInterval(() => {
    //   this.$store.commit('updateCount', { num: i++, num2: 2 })
    // }, 1000)
  },
  computed: {
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters(['fullName'])
    // count() {
    //   return this.$store.state.count
    // },
    // fullName() {
    //   return this.$store.getters.fullName
    // }
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



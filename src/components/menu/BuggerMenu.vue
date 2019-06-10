<template>
<Slide right>
  <div v-if="this.$store.getters.getSessionState">
    <a><span v-on:click="handleSignIn">로그인</span></a>
    <a><span v-on:click="handleSignUp">회원가입</span></a>
  </div>
  <div v-else>
    <a><span v-on:click="handleLogOut">로그아웃</span></a>
  </div>
</Slide>
</template>

<script>
import Slide from './Slide'
import * as str from '../../common/string'

export default {
  name: 'Menu',
  data () {
    return {sessionStorage}
  },
  components: {
    Slide
  },
  methods: {
    handleSignIn () {
      this.$store.commit('updateChatComponentStatus', str.SIGNIN)
    },
    handleSignUp () {
      this.$store.commit('updateChatComponentStatus', str.SIGNUP)
    },
    handleLogOut () {
      this.$store.commit('setSessionState', null)
      console.log(this.$store.getters.getSessionState)
    }
  }
}
</script>

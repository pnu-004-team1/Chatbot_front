<template>
<Slide right>
  <div v-if="checkState == null">
  <a><span v-on:click="handleSignIn">로그인</span></a>
  <a><span v-on:click="handleSignUp">회원가입</span></a>
  </div>
  <div v-if="checkState == 'login'">
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
  computed: {
    checkState: function () {
      return this.sessionStorage.getItem('state')
    }
  },
  methods: {
    handleSignIn () {
      this.$store.commit('updateChatComponentStatus', str.SIGNIN)
    },
    handleSignUp () {
      this.$store.commit('updateChatComponentStatus', str.SIGNUP)
    },
    handleLogOut () {
      sessionStorage.setItem('token', null)
      sessionStorage.setItem('state', null)
      state = sessionStorage.getItem('state')
      console.log(state)
    },
    handleLogOut = async () => {
      const
    }
  }
}
</script>

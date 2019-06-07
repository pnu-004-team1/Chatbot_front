<template>
<Slide right>
  <a><span v-on:click="handleSignIn">로그인</span></a>
  <a><span v-on:click="handleSignUp">회원가입</span></a>
</Slide>
</template>

<script>
import Slide from './Slide'
import * as str from '../../common/string'

export default {
  name: 'Menu',
  components: {
    Slide
  },
  methods: {
    handleSignIn () {
      this.$store.commit('updateChatComponentStatus', str.SIGNIN)
    },
    handleSignUp () {
      this.$store.commit('updateChatComponentStatus', str.SIGNUP)
    }
  }
}
</script>

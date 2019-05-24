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
    handleSignIn: function () {
      this.$store.commit('updateChatComponentStatus', str.SIGNIN)
    },
    handleSignUp: function () {
      this.$store.commit('updateChatComponentStatus', str.SIGNUP)
    }
  },
  created () {
    console.log('버거 메뉴 생성')
  }
}
</script>

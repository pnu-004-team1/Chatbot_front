<template>
  <div>
    <iframe
      id="site-frame"
      src="http://www.pusan.ac.kr/kor/Main.do"
      frameborder="0"
      width="100%"
      height="1500"
      sandbox="allow-same-origin allow-scripts"
      v-show="mobileFabVisible"
    />
    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @chatbot="chatOpen"
      v-show="mobileFabVisible"
    />
    <component v-bind:is="chatContainerForm" v-show="getContainerVisible"/>
  </div>
</template>

<script>
import Chat from './chat/Chat'
import SignIn from './sign/SignIn'
import SignUp from './sign/SignUp'
import fab from 'vue-fab'
import * as str from '../common/string'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Chat,
    SignIn,
    SignUp,
    fab
  },
  data () {
    return {
      fabVisible: true,
      bgColor: '#778899',
      position: 'bottom-right',
      fabActions: [
        {
          name: 'chatbot',
          icon: 'question_answer'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getChatComponentStatus',
      'getContainerVisible',
      'getEnvironment'
    ]),
    chatContainerForm () {
      switch (this.getChatComponentStatus) {
        case str.CHAT:
          return 'Chat'
        case str.SIGNIN:
          return 'SignIn'
        case str.SIGNUP:
          return 'SignUp'
        case str.CLOSE:
          return ''
      }
    },
    mobileFabVisible () {
      return (!this.getContainerVisible && (this.getEnvironment === str.PHONE)) || this.getEnvironment === str.PC
    }
  },
  methods: {
    chatOpen () {
      this.$store.commit('updateChatComponentStatus', str.CHAT)
      this.$store.commit('toggleContainerVisible')
    }
  },
  created () {
    if (window.innerWidth <= 480) {
      console.log('phone size')
      this.fabVisible = false
      this.chatFlag = true
      this.$store.commit('setEnvironment', str.PHONE)
    } else {
      console.log('pc size')
      this.$store.commit('setEnvironment', str.PC)
    }
  }
}
</script>

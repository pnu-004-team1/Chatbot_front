<template>
  <div>
    <!-- <iframe
      id="site-frame"
      src="http://www.pusan.ac.kr/kor/Main.do"
      frameborder="0"
      width="100%"
      height="1500"
      sandbox="allow-same-origin allow-scripts"
    /> -->
    <fab
      v-show=true
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @chatbot="chatOpen"
    />
    <Chat v-show="getChatComponentStatus === 'chat'" :fabVisible="this.fabVisible" />
    <SignIn v-show="getChatComponentStatus === 'signin'" :fabVisible="this.fabVisible" />
    <SignUp v-show="getChatComponentStatus === 'signup'" :fabVisible="this.fabVisible" />
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
      'getChatComponentStatus'
    ])
  },
  methods: {
    chatOpen () {
      this.$store.commit('updateChatComponentStatus', str.CHAT)
    }
  },
  created () {
    if (window.innerWidth <= 480) {
      console.log('phone size')
      this.fabVisible = false
      this.chatFlag = true
    }
  }
}
</script>

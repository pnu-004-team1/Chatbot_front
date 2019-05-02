<template>
  <div>
    <iframe
      id="site-frame"
      src="http://www.pusan.ac.kr/kor/Main.do"
      frameborder="0"
      width="100%"
      height="1500"
      sandbox="allow-same-origin allow-scripts"
    />
    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @chatbot="chat"
    />
    <Chat v-show="this.chatFlag"/>
  </div>
</template>

<script>
import Chat from './chat/Chat'
import fab from 'vue-fab'

export default {
  name: 'Home',
  components: {
    'Chat': Chat,
    'fab': fab
  },
  data () {
    return {
      bgColor: '#778899',
      position: 'bottom-right',
      chatFlag: false,
      fabActions: [
        {
          name: 'chatbot',
          icon: 'question_answer'
        }
      ]
    }
  },
  methods: {
    chat () {
      this.chatFlag = !this.chatFlag
    }
  }
}
</script>

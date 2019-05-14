<template>
    <div class="container">
        <BuggerMenu/>
        <!-- BEGIN : chatHeader -->
        <div class="chatHeader">
          <a href="#" class="BackBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
        <div class="headerTitle">
            <!-- <div class="NameIcon">SA</div> -->
          <img class="NameIcon" src="../../common/images/logo2.png"/>
            <!-- <div class="Txt">
              <div><strong>PNU Chatbot</strong></div>
              <div>무엇이든 물어보세요!</div>
            </div> -->
        </div>
        </div>
        <!-- END : chatHeader -->
        <!-- BEGIN : chatContent -->
        <div class="chatContent">
          <Message
              v-for="(item) in getMessages"
              v-bind:item="item"
              v-bind:key="item.id"
          />
        </div>
        <!-- END : chatContent -->
        <div class="chatSend">
          <input
              type="text"
              class="sendText"
              placeholder="message.."
              v-model="input"
              v-on:keydown="handelPress"
          />
          <div id="send-message" onClick={handleCreate}>
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from './Message'
import BuggerMenu from '../menu/BuggerMenu'

export default {
  name: 'Chat',
  computed: {
    ...mapGetters([
      'getInput',
      'getMessages'
    ]),
    input: {
      get () {
        return this.$store.state.input
      },
      set (value) {
        this.$store.commit('updateInput', value)
      }
    }
  },
  components: {
    'Message': Message,
    BuggerMenu
  },
  methods: {
    async handelPress (e) {
      if (e.key === 'Enter') {
        const message = this.$store.state.input
        await this.$store.commit('addMessage', message)
        await this.autoScroll()
        // 명령어를 입력할 때 마다 MongoDB에 저장
        this.$http
          .post(`http://35.175.95.233:8080/demo/faqList/`, {
            cmd: message
          })
          .then(result => {
            console.log(result)
          })
        // this.$store.dispatch('sendMessage', message).then(() => {
        //   const divObj = document.getElementsByClassName('chatContent')[0]
        //   divObj.scrollTop = divObj.scrollHeight
        // })
      }
    },
    autoScroll () {
      const divObj = document.getElementsByClassName('chatContent')[0]
      divObj.scrollTop = divObj.scrollHeight
    }
  },
  updated () {
  }
}
</script>

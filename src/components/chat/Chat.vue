<template>
    <div v-bind:class="bindClass_container">
      <div v-on:click="chatClose">x</div>
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
        <div v-bind:class="bindClass_content">
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
          <div id="send-message">
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from './Message'
import BuggerMenu from '../menu/BuggerMenu'
import * as str from '../../common/string'

export default {
  name: 'Chat',
  props: ['fabVisible'],
  computed: {
    ...mapGetters([
      'getInput',
      'getMessages',
      'getEnvironment'
    ]),
    input: {
      get () {
        return this.$store.state.input
      },
      set (value) {
        this.$store.commit('updateInput', value)
      }
    },
    bindClass_container () {
      return {
        container_phone: this.getEnvironment === str.PHONE,
        container_pc: this.getEnvironment === str.PC
      }
    },
    bindClass_content () {
      return {
        chatContent_phone: this.getEnvironment === str.PHONE,
        chatContent_pc: this.getEnvironment === str.PC
      }
    }
  },
  components: {
    Message,
    BuggerMenu
  },
  methods: {
    async handelPress (e) {
      if (e.key === 'Enter') {
        const message = this.$store.state.chat.input
        await this.$store.commit('addMessage', message)
        await this.autoScroll()
        // 명령어를 입력할 때 마다 MongoDB에 저장
        // this.$http
        //   .post(`http://localhost:7000/demo/faqList/`, {
        //     cmd: message
        //   })
        //   .then(result => {
        //     console.log(result)
        //   })
        await this.$store.dispatch('sendMessage', message)
        await this.autoScroll()
      }
    },
    autoScroll () {
      let divObj = null
      if (this.fabVisible) {
        divObj = document.getElementsByClassName('chatContent_pc')[0]
      } else {
        divObj = document.getElementsByClassName('chatContent_phone')[0]
      }
      divObj.scrollTop = divObj.scrollHeight
    },
    chatClose () {
      this.$store.commit('containerHidden')
    }
  },
  created () {
    console.log('chat 생성')
  }
}
</script>

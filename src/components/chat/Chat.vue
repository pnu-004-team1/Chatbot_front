<template>
    <div class="container">
        <!-- BEGIN : chatHeader -->
        <div class="chatHeader">
        <a href="#" class="BackBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
        <div class="headerTitle">
            <!-- <div class="NameIcon">SA</div> -->
            <img class="NameIcon" src="../../common/images/logo.png"/>
            <div class="Txt">
              <div>PNU Chatbot</div>
              <div>무엇이든 물어보세요!</div>
            </div>
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
            v-on:click="handleInputClick"
        />
        <div id="send-message" v-on:click="handleClick">
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from './Message'

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
    'Message': Message
  },
  methods: {
    handelPress (e) {
      $('.errorTxt').remove()
      if (e.key === 'Enter') {
        const message = this.$store.state.input
        this.$store.commit('addMessage', message)
        this.$store.dispatch('sendMessage', message)
        var chat = $('.chatContent')
        var chatItems = $('.chat-column').length
        chat.animate({scrollTop: (chat.prop('scrollHeight') * chatItems)})
      }
    },
    handleClick () {
      $('<div class="errorTxt">에러가 밸생했습니다 !!!</div>').hide().appendTo('.chatSend').fadeIn(500)
    },
    handleInputClick () {
      $('.errorTxt').remove()
    }
  }
}
</script>

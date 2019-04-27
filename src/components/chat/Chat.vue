<template>
    <div class="container">
        <!-- BEGIN : chatHeader -->
        <div class="chatHeader">
        <a href="#" class="BackBtn"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
        <div class="headerTitle">
            <div class="NameIcon">SA</div>
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
      if (e.key === 'Enter') {
        const message = this.$store.state.input
        this.$store.commit('addMessage', message)
        this.$store.dispatch('sendMessage', message)
      }
    }
  }
}
</script>

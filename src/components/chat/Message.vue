<template>
    <div class="chat-column" v-bind:class="this.item.from">
        <div class="item">
            <img class="chat-icon" v-show="icon"  src="../../common/images/logo.png"/>
        </div>
        <div class="item">
            <div class="chat-message">
              <!-- <component v-bind:is="messageForm" v-bind:data="messagePropsData"/> -->
              <!-- <div class="message_container"> -->
                <pre style="white-space: pre-wrap;">{{this.item.text}}</pre>
              <!-- </div> -->
            </div>
            <div class="message-date">{{this.item.date}}</div>
        </div>
    </div>
</template>

<script>
import MessageBookinfo from './Message_bookinfo'
import MessageText from './Message_text'

export default {
  name: 'Message',
  props: ['item'],
  computed: {
    icon () {
      if (this.item.from === 'bot') {
        return true
      } else {
        return false
      }
    },
    messagePropsData () {
      if (this.item.from === 'me') {
        return this.item.text
      } else {
        return this.item.text.data.data
      }
    }
  },
  components: {
    MessageBookinfo,
    MessageText
  }
}
</script>

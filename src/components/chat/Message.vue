<template>
    <div class="chat-column" v-bind:class="this.item.from">
        <div class="item">
            <img class="chat-icon" v-show="icon"  src="../../common/images/logo.png"/>
        </div>
        <div class="item">
            <div class="chat-message">{{this.item.text}}</div>
            <div class="message-date">{{this.item.date}}</div>
        </div>
    </div>
</template>

<script>

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
    }
  }
}
</script>

<template>
    <div class="chat-column" v-bind:class="this.item.from">
        <div class="item">
            <div class="chat-icon" v-show="icon">{{this.item.from}}</div>
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

<template>
    <div class="message_container">
      {{this.data}}
    </div>
</template>

<script>

export default {
  name: 'MessageText',
  props: ['data']
}
</script>

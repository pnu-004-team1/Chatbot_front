<template>
    <div class="bookInfo_container">
      <div
        v-for="(book) in getBooks"
        v-bind:key="book.title"
      >
        <img :src="book.thubmail" style="height: 100px;"/>
        {{book.title}}
        {{book.author}}
        {{book.publication}}
        <div v-for="status in book.status_list" :key="status.location">
          {{status.location}}
          {{status.status}}
        </div>
      <hr/>
      </div>
    </div>
</template>

<script>

export default {
  name: 'MessageBookinfo',
  props: {data: Object},
  computed: {
    getBooks () {
      console.log(this.data)
      return this.data
    }
  }
}
</script>

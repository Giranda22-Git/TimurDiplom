<template>
  <div class="wrapper">
    <div class="front">
      <NewsItem
        v-for="news in newsArray"
        :key="news.title"
        :news="news"
      />
    </div>
  </div>
</template>

<script>
import NewsItem from './NewsItem.vue'
import axios from 'axios'
export default {
  name: 'News',
  data: () => ({
    newsArray: []
  }),
  components: {
    NewsItem
  },
  async mounted () {
    await axios.get('http://localhost:3000/news')
      .then(response => {
        this.newsArray = response.data
      })
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    height: auto
    .front
      max-width: 1080px
      width: 80%
      height: 100%
      margin: 0 auto
</style>

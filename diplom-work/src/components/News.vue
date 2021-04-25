<template>
  <div class="wrapper">
    <div class="front">
      <NewsItem />
    </div>
  </div>
</template>

<script>
import NewsItem from './NewsItem.vue'
export default {
  name: 'News',
  components: {
    NewsItem
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

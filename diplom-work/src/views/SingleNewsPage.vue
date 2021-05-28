<template>
  <div class="wrapper">
    <div class="newsImage" :style="{'background': 'url(' + news.imagePath  + ') center no-repeat', 'background-size': '100%'}">
      <div class="text">
        {{ news.title }}
      </div>
    </div>
    <div class="description">
      <span> Описание: </span> <br><br>
      {{ news.description }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SingleNewsPage',
  data: () => ({
    news: {
      imagePath: 'https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif'
    }
  }),
  async mounted () {
    await axios.get('http://localhost:3000/news/' + this.$route.params.id)
      .then(response => {
        this.news = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    height: 1000px
    .newsImage
      width: 100%
      height: 700px
      display: flex
      justify-content: flex-start
      align-items: flex-end
      padding: 5%
      box-shadow: inset 0 10px 100px
      background-size: cover
      .text
        width: 100%
        font-family: sans-serif
        font-size: 2em
        color: white
    .description
      width: 100%
      font-family: sans-serif
      font-size: 1.3em
      height: 300px
      letter-spacing: 1px
      line-height: 25px
      padding: 2%
      overflow: auto
      span
        font-size: 1.3em
</style>

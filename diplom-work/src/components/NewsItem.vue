<template>
  <div class="wrapper" id="News">
    <div class="newsImage" :style="{'background': 'url(' + news.imagePath  + ') center no-repeat', 'background-size': 'cover'}">>
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
export default {
  name: 'NewsItem',
  props: {
    news: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    height: 1000px
    margin-top: 50px
    .newsImage
      width: 100%
      height: 700px
      background: url(../assets/CarouselItems/item1.png) center no-repeat
      background-size: cover
      display: flex
      justify-content: flex-start
      align-items: flex-end
      padding: 5%
      box-shadow: inset 0 10px 100px
      .text
        width: 100%
        font-family: sans-serif
        font-size: 2em
        color: white
    .description
      height: 50%
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

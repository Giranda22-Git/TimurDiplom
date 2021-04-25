<template>
  <div class="wrapper" id="About">
    <div class="front">
      <div class="left-content-wrapper">
        <span>
          Все начинается <br> с доброго <br> намерения
        </span>
        <span>
          Все начинается с нас!
        </span>
        <div class="carousel-trigger-block">
          <div class="greenLine"></div>
          <div class="text-block">
            <div class="heading">
              Всего пожертвовано
            </div>
            <div class="text">
              получателям помощи из базы фонда <br> <br>
              402 193 904,03 ₸
            </div>
            <div class="left-click" @click="leftClick">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
          </div>
          <div class="right-click" @click="rightClick">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
          </div>
          </div>
        </div>
      </div>
      <theCarousel
        class="right-content-wrapper"
        :carouselData = "sliderItems"
        :interval = "10000"
      />
    </div>
  </div>
</template>

<script>
import theCarousel from '@/components/theCarousel.vue'
export default {
  name: 'About',
  data: () => ({
    sliderItems: [
      'CarouselItems/item1.png',
      'CarouselItems/item2.png',
      'CarouselItems/item3.png'
    ]
  }),
  components: {
    theCarousel
  },
  methods: {
    leftClick () {
      this.$emit('prevSlideTrigger')
    },
    rightClick () {
      this.$emit('nextSlideTrigger')
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    height: calc( 70vh - 85px)
    margin-top: 85px
    display: flex
    justify-content: flex-end
    .front
      width: 90%
      height: 100%
      display: flex
      justify-content: flex-end
      .left-content-wrapper
        width: 35%
        height: 100%
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: flex-start
        padding-top: 7.5%
        padding-left: 7.5%
        position: relative
        span:nth-child(1)
          color: rgb(7, 50, 86)
          font-size: 2.9rem
          font-family: sans-serif
          font-weight: 800
        span:nth-child(2)
          color: rgb(169, 203, 67)
          font-size: 1.6em
          margin-top: 5%
          font-style: italic
        .carousel-trigger-block
          position: absolute
          width: 100%
          height: 35%
          bottom: -5%
          right: -20%
          border-radius: 40px
          box-shadow: 0 0 25px rgba(0, 0, 0, .3)
          z-index: 100
          background-color: #fff
          display: flex
          justify-content: flex-start
          align-items: flex-start
          padding: 7%
          .greenLine
            background-color: rgb(169, 203, 67)
            height: 75%
            width: 4px
          .text-block
            width: 90%
            height: 75%
            display: flex
            justify-content: center
            align-items: flex-start
            flex-direction: column
            padding-left: 4%
            position: relative
            .heading
              font-family: sans-serif
              font-size: 2em
              font-weight: bold
              letter-spacing: 1.5px
              padding-bottom: 15px
            .text
              font-family: sans-serif
              font-size: 1.1em
              font-weight: 600
              letter-spacing: 2px
              line-height: 0.9em
            .left-click, .right-click
              border-radius: 50%
              background-color: rgb(7, 50, 86)
              width: 53px
              height: 53px
              position: absolute
              display: flex
              justify-content: center
              align-items: center
              color: white
              cursor: pointer
              &:hover
                background-color: rgb(169, 203, 67)
            .left-click
              right: 10%
              bottom: -40%
            .right-click
              right: calc(0% - 30px)
              bottom: -40%
      .right-content-wrapper
        width: 65%
        height: 100%
        margin: 0
</style>

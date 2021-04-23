<template>
  <div class="wrapper">
    <div class="front">
      <div class="left-content-wrapper">

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
      .left-cotent-wrapper
        width: 35%
        height: 100%
      .right-content-wrapper
        width: 65%
        height: 100%
        margin: 0
</style>

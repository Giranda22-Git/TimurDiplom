<template>
  <div class="home">
    <theHeader class="header" />
    <About />
    <PayMent />
    <News />
  </div>
</template>

<script>
import theHeader from '../components/TheHeader.vue'
import About from '../components/About.vue'
import PayMent from '../components/PayMent.vue'
import News from '../components/News.vue'

export default {
  name: 'Home',
  components: {
    theHeader,
    About,
    PayMent,
    News
  }
}
</script>

<style lang="sass" >
  *
    box-sizing: border-box
  .header
    position: fixed
    top: 0
    left: 0
</style>

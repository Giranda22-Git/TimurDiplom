<template>
  <div class="home">
    <About />
    <PayMent />
    <News />
  </div>
</template>

<script>
import About from '../components/About.vue'
import PayMent from '../components/PayMent.vue'
import News from '../components/News.vue'

export default {
  name: 'Home',
  components: {
    About,
    PayMent,
    News
  }
}
</script>

<style lang="sass" >
  *
    box-sizing: border-box
</style>

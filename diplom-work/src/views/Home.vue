<template>
  <div class="home">
    <theHeader class="header" />
    <About />
  </div>
</template>

<script>
import theHeader from '../components/TheHeader.vue'
import About from '../components/About.vue'

export default {
  name: 'Home',
  components: {
    theHeader,
    About
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

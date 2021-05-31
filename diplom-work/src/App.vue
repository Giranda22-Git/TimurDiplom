<template>
  <div id="app">
    <theHeader />
    <router-view/>
  </div>
</template>

<script>
import theHeader from './components/TheHeader.vue'
export default {
  name: 'App',
  components: {
    theHeader
  }
}
</script>

<style lang="sass">
  *
    box-sizing: border-box
  body
    margin: 0
    padding: 0
  html
    scroll-behavior: smooth
  .header
    position: fixed
    top: 0
    left: 0
</style>

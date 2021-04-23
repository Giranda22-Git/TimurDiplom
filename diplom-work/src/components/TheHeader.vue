<template>
  <div class="wrapper">
    <div class="front">
      <div class="left-content-wrapper">
      </div>
      <div class="right-content-wrapper">
        <ul>
          <li>
            О фонде
          </li>
          <li>
            Наша работа
          </li>
          <li>
            Как помочь
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheHeader'
}
</script>

<style lang="sass" scoped>
  *
    outline: 1px solid red
  .wrapper
    width: 100%
    height: 85px
    box-shadow: 0 1px 10px black
    .front
      width: 100%
      height: 100%
      max-width: 1280px
      display: flex
      justify-content: space-between
      align-items: center
      margin: 0 auto
    .right-content-wrapper
      width: 40%
      height: 100%
      ul
        width: 100%
        height: 100%
        list-style-type: none
        margin: 0
        display: flex
        justify-content: space-evenly
        align-items: center
        font-family: sans-serif
        font-size: 1.25em
        padding: 0
    .left-content-wrapper
      background: url(../assets/logo.jpeg) center no-repeat
      background-size: contain
      width: 20%
      height: 100%
</style>

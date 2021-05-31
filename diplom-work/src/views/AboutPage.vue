<template>
  <div class="wrapper">
    <div class="front">
      <div class="firstBlock">
        <div class="firstBlockTop">
          <hr>
          <span>О Фонде</span>
        </div>
        <div class="firstBlockBottom"></div>
      </div>
      <div class="secondBlock">
        <div class="secondBlockTitle">
          <span><hr> О Нас </span>
        </div>
        <div class="secondBlockGrid">
          <div class="text">
            Благотворительный фонд «Ниет» – это частная некоммерческая организация, которая была создана в целях реализации благотворительных программ и проектов, направленных на улучшение уровня жизни детей, которые находятся в трудной жизненной ситуации.
          </div>
          <div class="text">
            Благотворительный фонд «Ниет» – это частная некоммерческая организация, которая была создана в целях реализации благотворительных программ и проектов, направленных на улучшение уровня жизни детей, которые находятся в трудной жизненной ситуации.
          </div>
          <div class="text">
            Благотворительный фонд «Ниет» – это частная некоммерческая организация, которая была создана в целях реализации благотворительных программ и проектов, направленных на улучшение уровня жизни детей, которые находятся в трудной жизненной ситуации.
          </div>
          <div class="text">
            Благотворительный фонд «Ниет» – это частная некоммерческая организация, которая была создана в целях реализации благотворительных программ и проектов, направленных на улучшение уровня жизни детей, которые находятся в трудной жизненной ситуации.
          </div>
          <div class="text">
            Благотворительный фонд «Ниет» – это частная некоммерческая организация, которая была создана в целях реализации благотворительных программ и проектов, направленных на улучшение уровня жизни детей, которые находятся в трудной жизненной ситуации.
          </div>
          <div class="text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    .front
      max-width: 1180px
      width: 100%
      .firstBlock
        width: 100%
        height: calc(100vh - 90px)
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        &Top
          width: 80%
          height: 17%
          background-color: rgb(234, 240, 216)
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          hr
            width: 10%
            height: 5px
            border-radius: 2px
            background-color: rgb(7, 50, 86)
            border: none
            margin-bottom: 1.5em
          span
            font-size: 3em
            font-family: sans-serif
            font-weight: 600
            color: rgb(7, 50, 86)
        &Bottom
          width: 94%
          height: 65%
          background: url(../assets/CarouselItems/item1.jpeg) center no-repeat
          background-size: cover
          border-radius: 15px
      .secondBlock
        width: 100%
        height: 700px
        &Title
          width: 100%
          height: 2.5em
          font-family: sans-serif
          font-size: 2em
          color: rgb(7, 50, 86)
          hr
            width: 100px
            height: 3px
            background-color: rgb(7, 50, 86)
            border: none
          span
            width: 250px
            display: flex
            justify-content: flex-start
            font-weight: 700
        &Grid
          display: grid
          grid-template-rows: 1fr 1fr 1fr
          grid-template-columns: 1fr 1fr
          grid-gap: 2em
          color: #17181A
          line-height: 1.28
          font-size: 18px
          letter-spacing: .5px
          font-family: sans-serif
</style>

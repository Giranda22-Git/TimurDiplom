<template>
  <div class="wrapper" id="News">
    <div class="newsImage" style="'background: url(../assets/CarouselItems/item1.png) center no-repeat">
      <div class="text">
        Этого парня сегодня трахнули у подьезда в 21:00
      </div>
    </div>
    <div class="description">
      <span> Описание: </span> <br><br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic, inventore non voluptas sint commodi veniam amet ducimus perferendis sapiente provident nam? Nam repellat nulla velit unde. Explicabo, consequatur in!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus quidem accusamus a quo alias recusandae, possimus corporis itaque harum sequi excepturi, beatae consequatur fugiat voluptatum, nemo optio ab debitis magni.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere illum odio aliquam ut voluptates delectus cumque voluptas commodi. Voluptatibus, aut illum laudantium accusantium illo voluptatem ipsa dolorum vitae non?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, libero alias voluptate impedit voluptatem itaque voluptatibus natus reiciendis perspiciatis? Dolorem necessitatibus officiis odio vitae, totam esse recusandae qui. Voluptatibus, voluptates.
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsItem'
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

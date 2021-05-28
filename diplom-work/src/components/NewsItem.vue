<template>
  <div class="wrapper" id="News">
    <div class="newsImage" :style="{'background': 'url(' + news.imagePath  + ') center no-repeat', 'background-size': 'cover'}">
      <router-link class="link" :to="`NewsPage/${news._id}`" />
      <div class="text">
        {{ news.title }}
      </div>
      <div class="deleteButton"
        v-if="admin"
        @click="deleteNews(news._id)"
      >
        DELETE
      </div>
    </div>
    <div class="description">
      <span> Описание: </span> <br><br>
      {{ news.description }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
export default {
  name: 'NewsItem',
  props: {
    news: {
      type: Object,
      default: () => {}
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  async mounted () {
  },
  methods: {
    async deleteNews (id) {
      await axios.delete('http://localhost:3000/news/' + id)
        .then(response => {
          if (response.data.ok) {
            sweetalert2.fire({
              title: 'OK',
              text: 'Новость успешно удалена, что бы увидеть результат пожалуйста обновите страницу',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }
        })
        .catch(err => {
          if (err) {
            sweetalert2.fire({
              title: 'ERROR',
              text: 'произошла какая то ошибка',
              icon: 'error',
              confirmButtonText: 'OK'
            })
          }
        })
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
      display: flex
      justify-content: flex-start
      align-items: flex-end
      padding: 5%
      box-shadow: inset 0 10px 100px
      position: relative
      .text
        width: 100%
        font-family: sans-serif
        font-size: 2em
        color: white
      .deleteButton
        padding: 3%
        font-family: sans-serif
        font-size: 1.5em
        color: white
        background-color: red
        cursor: pointer
        position: absolute
        right: 2%
        bottom: 2%
        z-index: 100
      .link
        width: 100%
        height: 100%
        position: absolute
        border: 1px solid red
        z-index: 99
        left: 0
        top: 0
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

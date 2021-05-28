<template>
  <div class="wrapper">
    <div class="newNewsBlock">
      <input type="text" placeholder="title" v-model="title">
      <input type="text" placeholder="description" v-model="description">
      <label for="file">{{filename}}</label>
      <input style="display: none" name="file" id="file" type="file" @change="handleFileUpload()" ref="file">
      <progress max="100" :value.prop="uploadPercentage"></progress>
      <div class="button-accept" @click="Send">Создать новость</div>
    </div>
    <NewsItem class="deleteNewsBlock"
      v-for="news in NewsArray"
      :key="news._id"
      :news="news"
      :admin="true"
    />
  </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
import NewsItem from '@/components/NewsItem.vue'
export default {
  name: 'authAdmin',
  data: () => ({
    file: null,
    uploadPercentage: 0,
    filedata: null,
    filename: 'Выберете файл',
    title: null,
    description: null,
    NewsArray: null
  }),
  components: {
    NewsItem
  },
  async mounted () {
    await axios.get('http://localhost:3000/news')
      .then(response => {
        this.NewsArray = response.data
        console.log(this.NewsArray)
      })
      .catch(err => {
        if (err) {
          console.log(err)
        }
      })
  },
  methods: {
    handleFileUpload () {
      if (this.$refs.file.files.length === 0) this.file = null
      else {
        this.file = this.$refs.file.files[0]
        this.filename = this.file.name
      }
    },
    async Send () {
      if (this.file) {
        const formData = new FormData()
        formData.append('file', this.file)
        formData.append('description', this.description)
        formData.append('title', this.title)
        await axios.post('http://localhost:3000/news',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
            }.bind(this)
          }
        )
          .then(response => {
            if (response.data !== null) {
              this.filedata = response.data
              sweetalert2.fire({
                title: 'OK',
                text: 'success',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
          })
          .catch(() => {
            sweetalert2.fire({
              title: 'Ошибка',
              text: 'произошла какая то ошибка либо вы уже загружали видео',
              icon: 'error',
              confirmButtonText: 'OK'
            })
          })
        this.filedata = null
        this.file = null
        this.filename = 'Выберете файл'
        this.uploadPercentage = 0
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100vw
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .newNewsBlock
      width: 30%
      height: 25vh
      box-shadow: 0 1px 100px rgba(0, 0, 0, 0.3)
      display: flex
      flex-direction: column
      justify-content: space-evenly
      align-items: center
      margin-top: 25%
      .button-accept
        cursor: pointer
    .deleteNewsBlock
      width: 80%
      height: 50%
      margin-top: 25%
</style>

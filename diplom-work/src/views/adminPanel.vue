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
  </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
export default {
  name: 'authAdmin',
  data: () => ({
    file: null,
    uploadPercentage: 0,
    filedata: null,
    filename: 'Выберете файл',
    title: null,
    description: null
  }),
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
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    .newNewsBlock
      width: 30%
      height: 25%
      box-shadow: 0 1px 100px rgba(0, 0, 0, 0.3)
      display: flex
      flex-direction: column
      justify-content: space-evenly
      align-items: center
      .button-accept
        cursor: pointer
</style>

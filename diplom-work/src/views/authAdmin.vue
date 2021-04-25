<template>
  <div class="wrapper">
    <div class="authBlock">
      <input type="text" placeholder="Login" v-model="login">
      <input type="text" placeholder="password" v-model="password">
      <div class="button-accept" @click="authorization">Авторизироваться</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
export default {
  name: 'authAdmin',
  data: () => ({
    login: null,
    password: null
  }),
  methods: {
    async authorization () {
      const params = {
        login: this.login,
        password: this.password
      }
      await axios.post('http://localhost:3000/users/autorization', params)
        .then(response => {
          if (response.data === '') {
            console.log(response.data)
            sweetalert2.fire({
              title: 'Ошибка',
              text: 'такого пользователя не существует',
              icon: 'error',
              confirmButtonText: 'OK'
            })
          } else {
            sweetalert2.fire({
              title: 'OK',
              text: 'С возвращением',
              icon: 'success',
              confirmButtonText: 'Перейти на страницу вашего аккаунта'
            }).then(() => {
              window.location.href = 'http://localhost:8080/adminPanel'
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
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
    .authBlock
      width: 30%
      height: 25%
      box-shadow: 0 1px 100px rgba(0, 0, 0, 0.3)
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: center
      & *
        margin-top: 50px
      .button-accept
        cursor: pointer
</style>

<template>
  <div class="wrapper" id="PayMent">
    <div class="infoBlock">
      <div class="heading">
        <span> Мы искренне верим </span> в то, что у каждого ребёнка есть право <br>
        на счастливое детство, свободное от нужды и болезней.
      </div>
      <div class="text">
        Благодаря вам мы можем поддержать детей с особыми потребностями, <br> опекаемых сирот, детей из малоимущих и многодетных семей. <br>
Всё начинается с доброго намерения! Всё начинается с нас!
      </div>
      <div class="reversBlock"></div>
      <div class="paymentBlock">
        <div class="paymentText">
          Хочу помочь
        </div>
        <div class="summBlock">
          <div class="firstLine">
            <div class="summItem" @click="changeSumm(5000)">5 000 ₸</div>
            <div class="summItem" @click="changeSumm(15000)">15 000 ₸</div>
            <div class="summItem" @click="changeSumm(25000)">25 000 ₸</div>
          </div>
          <div class="secondLine">
            <div class="summItem" @click="changeSumm(10000)">10 000 ₸</div>
            <div class="summItem" @click="changeSumm(20000)">20 000 ₸</div>
            <div class="summItem" @click="changeSumm(30000)">30 000 ₸</div>
          </div>
          <div class="thirdLine">
            <div class="summItem" @click="changeSumm(50000)">50 000 ₸</div>
            <div class="summItem" @click="changeSumm(70000)">70 000 ₸</div>
            <div class="summItem" @click="changeSumm(100000)">100 000 ₸</div>
          </div>
          <input class="summInput" v-model="SUMM" placeholder="Ввести другую сумму" />
        </div>
        <div class="paymentButton" @click="Pay">
          Пожертвовать
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import sweetalert2 from 'sweetalert2'
export default {
  name: 'PayMent',
  data: () => ({
    SUMM: null
  }),
  methods: {
    changeSumm (summ) {
      this.SUMM = summ
    },
    async Pay () {
      const params = {
        summ: this.SUMM
      }
      await axios.post('http://localhost:3000/offertory/Pay', params)
        .then(response => {
          if (response.data.ok) {
            sweetalert2.fire({
              title: 'OK',
              text: `спасибо за пожертвование в ${params.summ} ₸`,
              icon: 'success',
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
    height: 80vh
    margin-top: 5%
    .infoBlock
      width: 65%
      height: 80%
      background-color: rgb(252, 241, 233)
      border-top-right-radius: 50px
      border-bottom-right-radius: 50px
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: flex-end
      padding: 4%
      position: relative
      & *
        width: 85%
        color: rgb(7, 50, 86)
        font-family: sans-serif
        font-weight: bold
      .heading
        font-size: 1.7em
        line-height: 40px
        letter-spacing: 1.3px
        min-width: 800px
      .text
        width: 85%
        min-width: 800px
        padding-top: 3%
        line-height: 1.28em
        letter-spacing: .5px
        font-size: 1.1em
        font-weight: 400
        min-width: 800px
      .reversBlock
        width: 85%
        min-width: 800px
        height: 100%
        background: url(../assets/revers.png) 25% 50% no-repeat
        background-size: containt
      .paymentBlock
        position: absolute
        width: 35%
        height: 80%
        background-color: #fff
        bottom: -15%
        right: -15%
        border-radius: 40px
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2)
        padding: 4%
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: center
        .paymentText
          font-family: sans-serif
          font-size: 2em
          font-weight: bold
          text-align: center
          margin-top: 7%
        .paymentButton
          width: 60%
          height: 13%
          margin-top: 10%
          background-color: lighten(rgb(7, 50, 86), 10%)
          color: white
          display: flex
          justify-content: center
          align-items: center
          border-radius: 50px
          cursor: pointer
        .summBlock
          width: 100%
          height: 50%
          margin-top: 10%
          .firstLine, .secondLine, .summInput, .thirdLine
            width: 100%
            height: 25%
            display: flex
            .summItem
              width: 33.33333333%
              height: 100%
              outline: 1px solid silver
              display: flex
              justify-content: center
              align-items: center
              cursor: pointer
              &:hover
                background-color: rgb(252, 241, 233)
          .summInput
            width: 100%
            border: none
            outline: 1px solid silver
            text-align: center
            background-color: rgba(150, 150, 150, 0.15)
      & span
        color: rgb(243, 60, 32)
</style>

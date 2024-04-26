<template>
    <div>
      <div class="wrap">
        <div class="text">
          <p>Мы делаем сказочные фотосессии и фото-экскурсии на острове Маргарита в Венесуэле, чтобы вы привезли самые лучшие фотографии с отдыха и запомнили эту поездку на всю жизнь. </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SloganComponent',
    data () {
      return {}
    }
  }
  </script>
  
  <style lang='sass' scoped>
  .wrap
    width: 100%
    height: 100vh
    background-color: #9dc3cc 
    background:  url('~static/images/logo_big.jpg') center / cover no-repeat rgba(0, 0, 0, .5)
    background-blend-mode: overlay
    // background-color: rgba(255, 255, 255, .9)
    display: flex
    justify-content: center
    align-items: center
    & .text
      width: 80%
      color: #fff
      font-weight: 800
      text-shadow: 1px 1px 1px #1a2036
      text-transform: uppercase
      text-align: center
      font-size: 2.1rem
      font-weight: 700
      @include small
        font-size: 1.5rem

  </style>
  
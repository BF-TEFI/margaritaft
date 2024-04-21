<template>
    <div>
        <div class="section">
          <p>
            Раздел находится в разработке
          </p>
            <Nuxt-link to="/">На главную</Nuxt-link>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GidePage',
    head: {
      title: 'Гайд по острову Маргарита ',
      meta: [
        {
          hide: 'description',
          name: 'description',
          content: 'Мы делаем сказочные фотосессии и фото-экскурсии на острове Маргарита в Венесуэле, чтобы вы привезли самые лучшие фотографии с отдыха и запомнили эту поездку на всю жизнь. Профессионально. Стильно. Экзотично. Прозрачный прайс'
        },
        {
          hide: 'keywords',
          name: 'keywords',
          content: ''
        }
      ]
    },
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {
    }
  }
  </script>
  
  <style lang='sass' scoped>
  .section
    width: 100%
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  </style>
  
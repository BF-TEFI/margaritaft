<template>
  <div>
    <Shortmessage
    msg="Гайд по острову Маргарита."
    > <Nuxt-link to="/gide">Подробнее -></Nuxt-link>
  </Shortmessage>
    <Mainslider/>
    <Introduction/>
    <Cards/>
    <Photogallery/>
    <Author/>
    <Feedback/>
    <Booking/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'Фотосессии и фото-экскурсии на острове Маргарита ',
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
</style>

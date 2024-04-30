<template>
    <div>
        <Back/>
        <div class="wrap">
            <h1 class="blue">Фотосессия "Smart-пакет"</h1>
          <!-- <Nuxt-link to="/">На главную</Nuxt-link> -->
          <div class="info">
            <div class="photo">
          <img src="~static/images/slide_item_004.jpg" alt="">
            </div>
            <div class="more">
                <ul>
                    <li>1.5 часа съемки</li>
                    <li>До 4 локаций </li>
                    <li>До 3 образов: пляжный, городской, платья</li>
                    <li>25 снимков в обработке + 10 роскошных пейзажей острова, снятых нами ранее</li>
                    <li>Локации: тайный пляж, маяк, антипиратская крепость, колониальный город</li>
                    <li>От 1 до 3 участников</li>
                    <li>Любой жанр: лайфстайл, лавстори, медовый месяц, семейная фотосессия, ню</li>
                    <li>25 снимков в обработке + 10 роскошных пейзажей острова, снятых нами ранее</li>
                    <li>Готовые фото через неделю</li>
                    <li></li>
                </ul>
            </div>
          </div>
        </div>
        <Photogallery/>
        <Booking/>
    </div>
</template>

<script>
export default {
    name: 'SmartPackPage'
}
</script>

<style lang="sass" scoped>
.wrap
    width: 100%
    height: 75vh
    display: flex
    flex-direction: column
    align-items: center
h1
    font-size: 3.4em
    line-height: 1
.info
    width: 100%
    display: flex
    margin: 10px
    padding: 5px
    justify-content: center
    align-items: center
    & .photo
        padding: 5px
        & img
            height: 65vh
    & ul
        padding: 5px

        & li
            font-size: 1rem
            font-weight: 600
            line-height: 2
</style>
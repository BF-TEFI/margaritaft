<template>
    <div>
        <Back/>
        <div class="wrap">
            <h1 class="">Фотосессия "3 часа счастья"</h1>
          <div class="info">
            <div class="photo">
                <img src="~static/images/slide_item_001.jpg" alt="">
            </div>
            <div class="more">
                <div class="price orange">$300</div>
                <ul>
                    <li>Идеальный вариант для 2-3 девушек, кто хочет скооперироваться и посниматься по очереди в летящих платьях. Также идеально для свадебных церемоний и особых запросов. </li>
                    <li>3 часа съемки</li>
                    <li>Локации: тайный пляж, маяк, баунти-пляж, антипиратская крепость, колониальный город</li>
                    <li>От 1 до 6 участников (если участников более 4, трансфер оплачивается дополнительно в размере 60$)</li>
                    <li>Любой жанр: лайфстайл, лавстори, медовый месяц, семейная фотосессия, ню</li>
                    <li>До 5 образов</li>
                    <li>60 снимков в обработке + 10 роскошных пейзажей острова, снятых нами ранее</li>
                    <li>Готовые фото через неделю</li>
                </ul>
            </div>
          </div>
          <div class="info">
            <div class="dress">
                <ul>
                    <h3 class="orange">Летящее платье Персик</h3>
                    <li>С этим платьем можно сделать фотографии как из волшебной сказки про принцессу!</li>
                    <li>Размер: 40-50</li>
                    <img src="~static/images/dress_orange.jpg" alt="">
                    <li>Бесплатно в данном пакете</li>
                </ul>
                <ul>
                    <h3 class="orange">Летящее платье Фуксия</h3>
                    <li>С этим платьем ваши фото будут похожи на кадры из «Пиратов Карибского моря»! </li>
                    <li>Размер: 40-54</li>
                    <img src="~static/images/dress_pink.jpg" alt="">
                    <li>Бесплатно в данном пакете</li>
                </ul>
                <ul>
                    <h3 class="orange">Макияж и прическа</h3>
                    <li>Макияж $40</li>
                    <li>Прическа $40</li>
                </ul>
            </div>
          </div>
        </div>
        <Photogallery/>
        <Booking
        pld="3 часа счастья"
        :pack="false"/>
    </div>
</template>

<script>
export default {
    name: 'HappyPackPage'
}
</script>

<style lang="sass" scoped>
.wrap
    width: 100%
    min-height: 75vh
    display: flex
    flex-direction: column
    align-items: center
h1, h2, h3, h4
    color: #5ca9ff
h1
    font-size: 3.4em
    line-height: 1
    text-align: center
h2
    font-size: 2.4em
    line-height: 1
    text-align: center
h3
    font-size: 1.5em
    line-height: 1
    text-align: center
.info
    width: 100%
    display: flex
    margin: 5px
    padding: 5px
    justify-content: center
    align-items: center
    & .photo
        flex: 0 0 50%
        padding: 5px
        display: flex
        max-height: 90vh
        & img
            object-fit: contain
            width: 100%
    & .more
        flex: 0 0 50%
    & ul
        width: 90%
        padding: 5px
        & li
            list-style: circle
            font-size: 1rem
            font-weight: 600
            line-height: 2
.dress img
    width: 60vw
.price
    font-size: 3.4em
    font-weight: 900
    // text-align: center
@include small
    .wrap
        min-height: 100vh
        height: auto
        padding: 10px
    .photo
        width: 95%
        margin: 0 auto
    .info
        flex-direction: column
        & ul
            width: 100%
    h1
        text-align: center
        padding: 5px
        font-size: 2.2em
    li
        margin: 5px
    .price
        text-align: center
    .dress img
        width: 90vw
</style>
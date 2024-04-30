<template>
    <div>
        <Back/>
        <div class="wrap">
            <h1 class="blue">Фотосессия + экскурсия по острову Маргарита</h1>
          <div class="info">
            <div class="photo">
                <img src="~static/images/slide_item_005.jpg" alt="">
            </div>
            <div class="more">
                <div class="price orange">$320</div>
                <ul>
                    <li>Мы свозим вас на экскурсию по самым интересным и впечатляющим местам острова Маргарита, устроим дегустацию редкого рома и будем фотографировать вас всю дорогу!
                    Вы побываете в старинной крепости, интерактивном историческом парке, в столице острова – колониальном городе Ла Асунсьон, на скалистом и песчаном пляжах, в городе миллионеров и в зарослях кактусов, на смотровой площадке и в стильном ресторане. По пути вы составите полное впечатление об острове, узнаете много нового от авторов проекта, а также получите воспоминания и фотокарточки на всю жизнь! По желанию завезем вас в большой супермаркет. Такой насыщенной и душевной экскурсии вы больше нигде не найдете! </li>
                    <li>Продолжительность фото-экскурсии: 6 часов</li>
                    <li>Все трансферы, дегустация рома, входы в музеи и на крепости включены!</li>
                    <li>Группа до 3-х человек</li>
                    <li>60 снимков в обработке + 10 роскошных пейзажей острова, снятых нами ранее</li>
                    <li>Готовые фото через неделю</li>
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
    name: 'TourPackPage'
}
</script>

<style lang="sass" scoped>
.wrap
    width: 100%
    min-height: 75vh
    display: flex
    flex-direction: column
    align-items: center
h1
    font-size: 3.4em
    line-height: 1
    text-align: center
.info
    width: 100%
    display: flex
    margin: 10px
    padding: 5px
    justify-content: center
    align-items: center
    & .photo
        flex: 0 0 60%
        padding: 5px
        display: flex
        max-height: 90vh
        & img
            object-fit: contain
            width: 100%
    & .more
        flex: 0 0 40%
    & ul
        padding: 5px
        & li
            list-style: circle
            font-size: 1rem
            font-weight: 600
            line-height: 2
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
    h1
        text-align: center
        padding: 5px
        font-size: 2.2em
    li
        margin: 5px
    .price
        text-align: center
</style>
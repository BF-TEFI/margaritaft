<template>
    <div>
        <div class="wrap" :class="{ hit: ht}">
            <div class="head">
                <div class="info_wrap">
                    <div class="description">
                        <h2>{{ t }}</h2>
                    </div>
                    <div class="price">
                        <h2>${{ p }}</h2>
                    </div>
                </div>
            </div>
            <div class="body">
                <ul>
                    <li title="Время съемки"><img src="~static/pict/time.png"><p>{{ tm }}</p></li>
                    <li title="Локации"><img src="~static/pict/location.png"><p>{{ loc }}</p></li>
                    <li title="Образы"><img src="~static/pict/image.png"><p>{{ img }}</p></li>
                    <li title="Фотографи"><img src="~static/pict/photo.png"><p>{{ jpg }}</p></li>
                    <li title="Участники"><img src="~static/pict/people.png"><p>{{ ppl }}</p></li>
                </ul>
            </div>
            <div class="bottom">
                <p>{{ b }}</p>
            </div>
            <div class="action">
                <a @click="$goto('#booking')" class="btn">Забронировать</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        t: {
            type: String,
            require: false,
            default: 'Название'
        },
        tm: {
            type: String,
            require: false,
            default: 'Время съемки'
        },
        loc: {
            type: String,
            require: false,
            default: 'Количество локаций'
        },
        img: {
            type: String,
            require: false,
            default: 'Количество образов'
        },
        jpg: {
            type: String,
            require: false,
            default: 'Количество фотографий'
        },
        ppl: {
            type: String,
            require: false,
            default: 'Количество участников'
        },
        p: {
            type: String,
            require: false,
            default: "0"
        },
        b: {
            type: String,
            require: false,
            default: 'Описание продукта'
        },
        ht: {
            type: Boolean,
            require: false,
            default: false
        }
    },
    data() {
        return {}
    },
    methods: {
        goto(url) {
            this.$goto(url)
        }
    }
}
</script>

<style lang='sass' scoped>
.wrap
    width: 95%
    display: flex
    flex-direction: column
    padding: 2px
    margin: 0 auto
    // background-color: rgba(239, 239, 239, .9)
    background-color: #303030
    border: 2px solid #e0e0e0
    box-shadow: 0 2px 3px #1a1a1a
    overflow: hidden
    border-radius: 15px
.head, .body, .Bottom, .action
    width: 100%
    display: flex
    flex-wrap: nowrap
    justify-content: center
    align-items: center
    position: relative
    padding: 5px
.head
    height: 150px
    background: url(static/images/card_head_bg.jpg) center / cover no-repeat
    & .info_wrap
        position: absolute
        right: 0
        top: 0
        width: 65%
        height: 100%
        display: flex
        flex-direction: column
        & .description
            background-color: rgba(30, 30, 30, .9)
            width: 100%
            height: 80%
            padding: 3px
            color: #e0e0e0
            display: flex
            justify-content: center
            align-items: center
            text-align: center
            white-space: pre-wrap
        & .price
            width: 100%
            height: 20%
            background-color: #FF7F50
            display: flex
            justify-content: center
            align-items: center
            color: #fff
.body
    & li
        display: flex
        flex-wrap: nowrap
        align-items: center
        margin: 5px 0
        color: #e0e0e0
        & img
            margin-right: 5px
        & p
            font-weight: 600
            font-size: .9rem
            white-space: pre-wrap
.bottom
    width: 100%
    height: 130px
    padding: 5px
    font-size: .9rem
    white-space: pre
    text-align: justify
    background-color: #2a2a2a
    color: #e0e0e0
.btn
    display: block
    width: 100%
    border-radius: 0.5rem
    border: 0.125em solid #FF7F50
    /* background-color: #3B3B3B */
    padding: 0.50rem 1rem
    text-align: center
    font-size: 0.875rem
    line-height: 1.25rem
    font-weight: 600
    color: #FF7F50
    outline: 2px solid transparent
    outline-offset: 2px
    transition: all .1s cubic-bezier(0.4, 0, 0.2, 1)
    &:hover
        color: #fff
  </style>
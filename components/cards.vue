<template>
    <div>
        <div class="wrap">
            <div class="scroller">
                <div class="item">
                    <Card 
                    t="Smart-пакет"
                    p="170"
                    tm="1.5 часа"
                    loc="До 4"
                    img="пляжный, городской, платья"
                    jpg="25 в обработке + 10 пейзажей острова"
                    ppl="1-3"
                    b="Локации: тайный пляж, маяк, антипиратская крепость, колониальный город"
                    />
                </div>
                <div class="item">
                    <Card 
                    t="Хит-пакет"
                    p="210"
                    tm="2 часа"
                    loc="До 5"
                    img="пляжный, городской, платья"
                    jpg="30 в обработке + 10 пейзажей острова"
                    ppl="1-4"
                    b="Локации: тайный пляж, маяк, антипиратская крепость, колониальный город"
                    />
                </div>
                <div class="item">
                    <Card 
                    t="3 часа счастья"
                    p="300"
                    tm="3 часа"
                    loc="До 5"
                    img="пляжный, городской, платья"
                    jpg="60 в обработке + 10 пейзажей острова"
                    ppl="1-6"
                    b="Летящие платья БЕСПЛАТНО
                    Идеально для свадебных церемоний и особых запросов"
                    />
                </div>
                <div class="item">
                    <Card 
                    t="Фотосессия + экскурсия"
                    p="320"
                    tm="6 часов"
                    loc="До 5"
                    img="-"
                    jpg="60 в обработке + 10 пейзажей острова"
                    ppl="1-3"
                    b="Экскурсия по самым интересным и впечатляющим местам острова, дегустация редкого рома и фотосессия всю дорогу!
                    Все трансферы, дегустация рома, входы в музеи и на крепости включены!"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardsComponent',
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
    data() {
        return {}
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang='sass' scoped>
.wrap
   max-width: 95%
   margin: auto
.scroller
    overflow-x: scroll
    display: flex
    justify-content: center
    scroll-snap-type: x mandatory
    scroll-padding: 10px

.item
    width: clamp(300px, 50%, 96%)
    margin: 10px
    display: flex
    justify-content: center
    scroll-snap-align: center
</style>

<style lang="css" scoped>
.pack_card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    /* border: 1px solid #4a4a4a; */
    padding: 1.5rem 1rem 1rem 1rem;
    /* margin-top: 1rem; */
    margin: 0 auto;
    background-color: rgba(239, 239, 239, .9);
    max-width: 500px;
    /* min-height: 60vh; */
    box-shadow: 0 2px 3px #ccc;
}

.banner {
    position: absolute;
    left: 0px;
    right: 0px;
    top: -2rem;
    display: flex;
    justify-content: center;
}

.banner_tag {
    display: flex;
    height: 1.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background-color: rgb(99 102 241);
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #fff;
}

.pack_name {
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: rgb(31 41 55);
}

.description {
    margin: 0 auto 2rem auto;
    text-align: center;
    color: rgb(107 114 128);
    font-weight: 700;
}

.lists> :not([hidden])~ :not([hidden]) {
    margin-top: 0.5rem;
}

.lists {
    min-height: 200px;
}

.list {
    display: flex;
    gap: 0.5rem;
}

.list svg {
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;
    color: rgb(99 102 241);
}

.list span {
    color: rgb(75 85 99);
    font-weight: 700;
}

.bottom {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.price_container {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.25rem;
}

.devise {
    align-self: flex-start;
    color: rgb(75 85 99);
}

.price {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    color: rgb(31 41 55);
}

.date {
    color: rgb(107 114 128);
}

.btn {
    display: block;
    border-radius: 0.5rem;
    border: 0.125em solid #4a4a4a;
    /* background-color: #3B3B3B; */
    padding: 0.75rem 2rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    color: #3B3B3B;
    outline: 2px solid transparent;
    outline-offset: 2px;
    transition: all .1s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
    color: #fff;
    background-color: #4a4a4a;
}

.btn:active {
    color: #fff;
    background-color: #3B3B3B;
}
</style>

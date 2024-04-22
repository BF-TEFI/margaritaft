<template>
  <div class="section">
      <div v-if="title" class="title orange"><h2>Фотогалерея</h2></div>
      <div class="wrap">
        <div
          v-for="item in this.$store.state.photo.slice(0, 12)"
          :key="item.id"
          class="photo-wrap"
        >
          <div @click="show(item)" class="photo">
            <img :src="item.file" :alt="item.description" />
          </div>
        </div>
      </div>
      <!-- <div v-if="readmore" class="readmore">
        <Nuxt-link to="/photo/">
          <button>Больше фотографий</button>
        </Nuxt-link>
      </div> -->
  </div>
</template>

<script>
export default {
  name: 'PhotogalleryComponent',
  props: {
    title: {
      type: Boolean,
      default: true,
      require: false
    },
    readmore: {
      type: Boolean,
      default: true,
      require: false
    },
    album: {
      type: String,
      default: null,
      require: false
    },
    tag: {
      type: String,
      default: null,
      require: false
    },
    count: {
      type: Number,
      default: 8,
      require: false
    }
  },
  data () {
    return {
      // photo: context.$axios.$get('api/v1/photo/', {
      //   params: {
      //     count: this.count,
      //     tags: this.tag
      //   }
      // }).then((response) => {
      //   this.$store.commit('set_photo', response)
      // })
    }
  },
  methods: {
    show (item) {
      console.log(item)
      this.$modal('photogallery', item)
    }
  }
}
</script>

<style lang='sass' scoped>
.section
  @include small
    padding: 5px
.wrap
  width: 100%
  display: flex
  flex-wrap: wrap
  box-shadow: 0 2px 3px #ccc
  @include small
    gap: 7px
.photo-wrap
  flex: 1 0 25%
  position: relative
  @include small
    flex: 1 0 calc(30% - 10px)
.title
  text-align: center
.photo
  display: flex
  align-items: center
  cursor: pointer
  margin: 2px
  -webkit-filter: grayscale(100%)
  filter: grayscale(100%)
  &:hover
    -webkit-filter: grayscale(1%)
    filter: grayscale(1%)
  & img
    object-fit: cover
.readmore
  text-align: center
</style>

<template>
    <div class="content">
      <div v-if="title" class="title">Фотогалерея</div>
      <div class="wrap">
        <div
          v-for="item in this.$store.state.photo"
          :key="item.id"
          class="photo-wrap"
        >
          <div @click="show(item)" class="photo">
            <img :src="item.file" :alt="item.description" />
          </div>
        </div>
      </div>
      <div v-if="readmore" class="readmore">
        <Nuxt-link to="/photo/">
          <button class="button is-info">Больше фотографий</button>
        </Nuxt-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PhotogalleryAdComponent',
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
      default: 9,
      require: false
    }
  },
  data (context) {
    return {
      photo: context.$axios.$get('api/v1/photo/', {
        params: {
          count: this.count,
          tags: this.tag
        }
      }).then((response) => {
        this.$store.commit('set_photo', response)
      })
    }
  },
  methods: {
    show (item) {
      this.$modal('photogallery', item)
    }
  }
}
</script>

<style lang='sass' scoped>
.wrap
  width: 100%
  display: flex
  flex-wrap: wrap
  box-shadow: 0 2px 3px #ccc
.photo-wrap
  flex: 1 0 30%
  position: relative
  // @include small
  //   flex: 1 0 50%
.photo
  display: flex
  align-items: center
  cursor: pointer
  // margin: 2px
  & img
    object-fit: cover
</style>

<template>
  <div>
    <div class="modal">
      <div class="modal-background"></div>
      <!-- Фото -->
      <div v-if="this.type === 'image'" class="modal-photo">
        <p class="image is-large">
          <img :src="modal.item.img.src" :alt="modal.item.img.name" />
        </p>
      </div>
      <!-- Отзывы -->
      <div v-if="this.type === 'feedback'" class="modal-card modal-feedback">
        <section class="modal-card-body">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <!-- <figure class="image card-icon avatar">
                  <img :src="avatar" alt="Placeholder image" />
                </figure> -->
              </div>
              <div class="media-content">
                <p class="title is-5">{{ modal.item.name }}</p>
                <p class="subtitle is-6">
                  <Starrating :val="modal.item.rating" />
                </p>
              </div>
            </div>
            <div class="content feedback-text">
              <p>{{ modal.item.body }}</p>
              <p
                v-if="modal.item.file"
                class="image is-large feedback-photo"
              >
                <img :src="modal.item.file" alt="skyjumping.ru отзывы" />
              </p>
            </div>
          </div>
        </section>
      </div>
      <!-- Фотогалерея -->
      <div
        v-if="this.type === 'photogallery'"
        class="modal-gallery"
      >
        <Slider
          :showLarge="1"
          :showMid="1"
          :todots="false"
          :toaccessibility="true"
          :tostart="this.$store.state.photo.indexOf(modal.item)"
          :key="modal.item.file"
        >
          <div
            v-for="i in this.$store.state.photo"
            :key="i.file"
            class="image is-large"
          >
            <img :src="i.file" :alt="i.description" />
          </div>
        </Slider>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
  },
  data () {
    return {
    }
  },
  mounted () {
    document.querySelectorAll('.modal-close, .modal-background').forEach((el) => {
      el.addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active')
      })
    })
  },
  computed: {
    modal () {
      return this.$store.state.modal
    },
    type () {
      return this.$store.state.modal.type
    },
    // avatar () {
    //   return (this.modal.item.avatar) ? this.modal.item.avatar : require('@/static/icons/nouser.svg')
    // }
  }
}
</script>

<style lang='sass' scoped>
.modal-content
    @include small-album
      max-height: 100vh
.modal-photo
  max-width: 80%
  padding: 35px
  @include small
    width: 100%
    padding: 0
  @include small-album
    padding: 20px
    width: 80%
  & img
    margin: 0 auto
    max-height: 90vh
    width: auto
.modal-gallery
  width: 80%
  padding: 35px
  @include small
    padding: 2px
    width: 100%
  @include small-album
    padding: 20px
    width: 80%
.modal-card-body
  margin: 5px
  max-height: 90vh
  @include small-album
    height: 70vh
.avatar
  width: 5rem
  height: 5rem
.feedback-text
  padding: 20px
.feedback-photo
  margin-top: 20px
</style>

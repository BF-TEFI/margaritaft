<template>
  <div>
    <div v-if="this.$store.state.feedback.length" class="section more">
      <div class="title"><h2 class="orange">Отзывы</h2></div>
      <div class="wrap">
        <div class="scroller">
          <div v-for="item in this.$store.state.feedback" :key="item.id" @click="modal(item)" class="itm">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5">{{ item.name }}</p>
                  <p class="subtitle is-6">{{ item.date }} </p>
                  <p class="subtitle is-6">
                    <!-- <Starrating :val="item.rating" /> -->
                  </p>
                </div>
              </div>
              <div class="content">
                <p>{{ item.body.length > 150
                      ? item.body.slice(0, 150) + ' ...'
                      : item.body }}</p>
              </div>
            </div>
            <div class="bottom">
              {{ item.file ? 'В отзыве есть фото' : '' }}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackComponent',
  data () {
    return {
      // feedback: context.$axios.$get('api/v1/feedback/', {
      //   params: {
      //     count: 5
      //   }
      // }).then((response) => {
      //   this.$store.commit('set_feedback', response)
      // })
    }
  },
  methods: {
    modal (item) {
      this.$modal('feedback', item)
    }
  }
}
</script>

<style lang='sass' scoped>
.card
  width: 400px
  // background: linear-gradient(rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), url('~static/img/feedbackbg.jpg') center/ cover no-repeat
  height: 270px
  margin: 3px auto
  cursor: pointer
  position: relative
  @include large
    width: 290px
  @include small
    width: 95%
.title
  text-align: center
.card-icon
  width: 50px
  height: 50px
.readmore a
  margin: 0 10px
.bottom
  width: 100%
  height: 10%
  position: absolute
  bottom: 0
  left: 0
  padding: 3px
  text-align: center
  border-top: 1px solid #ccc
  color: #ccc
</style>

<template>
  <div>
      <Back/>
      <div class="wrap">
          <h1 class="blue">Гайл по острову Маргарита</h1>
          
      </div>
      <Photogallery/>
      <Booking/>
  </div>
</template>

<script>
export default {
  name: 'GidePage'
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
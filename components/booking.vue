<template>
  <div id="booking">
    <div class="section is-large booking">
      <div class="booking_form">
        <div class="content">
          <h4>{{ title }}</h4>
        </div>
        <div v-if="error.status" class="label notification is-danger error">
          {{ this.error.message }}
        </div>
        <div
          v-if="success.status"
          class="label notification is-success success"
        >
          {{ this.success.message }}
        </div>
        <div class="field">
          <label class="label">Номер телефона:</label>
          <div class="control">
            <input
              class="input"
              v-model="numberfield"
              type="tel"
              placeholder="79001234444"
            />
          </div>
        </div>
        <div v-if="pack" class="field">
          <div class="label">Фотосессия:</div>
          <div class="select is-link">
            <select v-model="booking.type">
              <option>- Не выбрано -</option>
              <option>Smart-пакет</option>
              <option>Хит-пакет</option>
              <option>3 часа счастья</option>
              <option>Фотосессия + экскурсия</option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="checkbox">
            <input type="checkbox" v-model="PersonalData" />
            Даю свое согласие на обработку персональных данных
          </label>
        </div>
        <div class="field send">
          <p class="control">
            <button @click="validate">Отправить</button>
            <button @click="cleanForm" type="reset">Отменить</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingComponent',
  props: {
    title: {
      type: String,
      require: false,
      default: 'Оставить заявку на фотосессию'
    },
    pack: {
      type: Boolean,
      require: false,
      default: true
    },
    pld: {
      type: String,
      require: false,
      default: '- Не выбрано -'
    }
  },
  data () {
    return {
      calendar: false,
      PersonalData: false,
      success: {
        status: false,
        message: ''
      },
      error: {
        status: false,
        message: ''
      },
      booking: {
        type: this.pld,
        phone: ''
      }
    }
  },
  computed: {
    numberfield: {
      get () {
        return this.booking.phone.match(/^\d+$/)
      },
      set (value) {
        this.error.status = false
        const cleanvalue = String(value)
        if (cleanvalue.match(/[^0-9]+/)) {
          this.error.status = true
          this.error.message = 'Укажите корректный номер'
        }
        this.booking.phone = cleanvalue
      }
    }
  },
  methods: {
    validate () {
      if (this.PersonalData) {
        if (this.booking.type !== '- Не выбрано -' && this.booking.phone) {
          this.send()
        } else {
          this.error = {
            status: true, message: 'Все поля должны быть заполнены!'
          }
        }
      } else {
        this.error.status = true
        this.error.message = 'Для отправки заявки необходимо дать согласие на обработку персональных данных'
      }
    },
    send () {
      var dat = { phone: this.booking.phone, type: this.booking.type }
      this.$axios.post('api/v1/margaritaft/booking/', {
        data: dat
      })
        .then((response) => {
          this.success.status = true
          this.error.status = false
          this.success.message = response.data.msg
          this.booking = {
            type: this.pld , phone: ''
          }
        })
        .catch((err) => {
          this.success.status = false
          this.error.status = true
          this.error.message = err
        })
    },
    cleanForm () {
      this.error = { status: false, message: '' }
      this.success = { status: false, message: '' }
      this.booking = {
        type: this.pld , phone: ''
      }
    }
  }

}
</script>

<style lang='sass' scoped>
.booking
  display: flex
  min-height: 70vh
  padding: 10px
  justify-content: center
  align-items: center
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.95)), url(~static/images/index-background.jpg)
  background-position: bottom
  background-size: cover
  background-repeat: no-repeat
  & .content
    text-align: center
    font-weight: bold
  &_form
    width: clamp(400px, 40%, 600px)
    border: 1px solid #1a1a1a
    border-radius: 5px
    box-shadow: 0, 2px, 10px #000
    // background: rgba(255, 255, 255, 0.7)
    background-color: #2a2a2a
    padding: 10px
    & .select, select
      width: 100%
    & .send
      text-align: center
.label
    color: #e0e0e0
h4
  color: #FF7F50
.error, .success
  text-align: center
  text-transform: uppercase
.checkbox:hover
  color: #5ca9ff
</style>

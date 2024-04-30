<template>
  <div>
    <div class="section is-large booking">
      <div class="booking_form">
        <div class="content">
          <h4>Оставить заявку на фотосессию</h4>
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
        <div class="field">
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
        type: '- Не выбрано -',
        name: '',
        phone: '',
        height: '- укажите ваш вес -',
        weight: '- укажите ваш рост -',
        date: ''
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
        if (this.booking.type !== '- Не выбрано -' && this.booking.name && this.booking.phone && this.booking.date) {
          if (this.booking.type === 'Прыжок в тандеме' && (this.booking.height === '- укажите ваш вес -' || this.booking.weight === '- укажите ваш рост -')) {
            this.error.status = true
            this.error.message = 'Необходимо указать рост и вес'
          } else {
            this.send()
          }
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
      const dat = (this.booking.type === 'Прыжок в тандеме') ? {
        date: this.booking.date, type: 'Тандем', name: this.booking.name, weight: this.booking.weight, height: this.booking.height, phone: this.booking.phone
      } : {
        date: this.booking.date, type: 'Д-6', name: this.booking.name, phone: this.booking.phone
      }
      this.$axios.post('api/v1/booking/', {
        data: dat
      })
        .then((response) => {
          this.success.status = true
          this.success.message = response.data.msg
          this.booking = {
            type: '- Не выбрано -', name: '', phone: '', height: '- укажите ваш вес -', weight: '- укажите ваш рост -', date: ''
          }
        })
        .catch((err) => {
          this.error.status = true
          this.error.message = err
        })
    },
    cleanForm () {
      this.error = { status: false, message: '' }
      this.success = { status: false, message: '' }
      this.booking = {
        type: '- Не выбрано -', name: '', phone: '', height: '- укажите ваш вес -', weight: '- укажите ваш рост -', date: ''
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
    border: 1px solid #ccc
    border-radius: 5px
    box-shadow: 0, 2px #000
    background: rgba(255, 255, 255, 0.7)
    padding: 10px
    & .select, select
      width: 100%
    & .send
      text-align: center
.error, .success
  text-align: center
  text-transform: uppercase

</style>

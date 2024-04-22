export const state = () => ({
  modal: {},
  feedback: [
    {
      rating: '5',
      name: 'Катерина',
      body: 'Тут такое дело. Накануне поездки я вдруг решила, что я толстая. Ну, смотрю на себя сверху вниз, живот такой на меня смотрит снизу вверх, здоровались, короче.Особенно по вечерам после ужина. А сейчас смотрю на свои фоточки в купальнике и улыбаюсь. Вроде ничего, шоколадная, изящная, красивая. Полюбила себя, короче)',
      file: require('@/static/feedback/001.jpg')
    },
    {
      rating: '5',
      name: 'Дарья Князева',
      body: 'Настя, какой кайф! Спасибо вам огромное, ребята!!! Очень живые фотографии!',
      file: require('@/static/feedback/002.jpg')
    },
    {
      rating: '5',
      name: 'Марина',
      body: 'Все фото зачетные. Но именно здесь отобразилось мое истинное я!!! Спасибо😘😘😘😘',
      file: require('@/static/feedback/003.jpg')
    },
    {
      rating: '5',
      name: 'Никита',
      body: 'Планировали фотосессию на медовый месяц. Спасибо, большое! Отличные фотографии ☺️',
      file: require('@/static/feedback/004.jpg')
    },
    {
      rating: '5',
      name: 'Евгения',
      body: 'Волшебные фото! Обычно фотографы на курортах снимают только на пляже быстрей-быстрей и готово, а тут такой подход: мы были на разных локациях, меняли наряды, в результате получилось много разнообразного контента! спасибо!',
      file: require('@/static/feedback/005.jpg')
    },
    {
      rating: '5',
      name: 'Елена и Дмитрий',
      body: 'Спасибо большое!!! Мчусь срочно публиковать пост! Классное решение было поехать в вашу солнечную страну 👍',
      file: require('@/static/feedback/006.jpg')
    }
  ],
  feedback_rating: null,
  photo: [
    {
      id: 1,
      file: require('@/static/photogallery/001.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 2,
      file: require('@/static/photogallery/002.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 3,
      file: require('@/static/photogallery/003.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 4,
      file: require('@/static/photogallery/004.jpeg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 5,
      file: require('@/static/photogallery/005.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 6,
      file: require('@/static/photogallery/006.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 7,
      file: require('@/static/photogallery/007.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 8,
      file: require('@/static/photogallery/008.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 9,
      file: require('@/static/photogallery/009.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 10,
      file: require('@/static/photogallery/010.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 11,
      file: require('@/static/photogallery/011.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 12,
      file: require('@/static/photogallery/012.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 13,
      file: require('@/static/photogallery/013.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 14,
      file: require('@/static/photogallery/014.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 15,
      file: require('@/static/photogallery/015.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 16,
      file: require('@/static/photogallery/016.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 17,
      file: require('@/static/photogallery/017.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    },
    {
      id: 18,
      file: require('@/static/photogallery/018.jpg'),
      description: 'Фотосессии на острове Маргарита.'
    }
  ]
})

export const mutations = {
  set_modal (state, data) {
    state.modal = data
  },
  set_feedback (state, data) {
    state.feedback = data
  },
  set_feedback_rating (state, data) {
    state.feedback_rating = data
  },
  set_photo (state, data) {
    state.photo = data
  }
}

export const actions = {
  get_modal ({ commit }, source) {
    return new Promise((resolve) => {
      commit('set_modal', source)
      resolve()
    })
  },
  get_feedback ({ commit }) {
    this.$axios.$get('api/v1/feedback/?count=10')
      .then((response) => {
        commit('set_feedback', response)
      })
  },
  get_feedback_rating ({ commit }, data) {
    commit('set_feedback_rating', data)
  }
}

export const getters = () => ({
})

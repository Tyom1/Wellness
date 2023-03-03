import { createStore } from 'vuex'
export default createStore({
  state: {
    plans: [
      {
        _id: 1,
        month: 'Mar',
        title: 'Hormone replacement therapy',
        status: 'completed'
      },
      { _id: 2, month: 'Jun', title: 'Ozone therapy', status: 'completed' },
      { _id: 3, month: 'Jun', title: 'NAD', status: 'completed' },
      {
        _id: 4,
        month: 'Jun',
        title: 'Hormone replacement therapy',
        status: 'completed'
      },
      { _id: 5, month: 'Feb', title: 'Ozone therapy', status: 'booked' },
      { _id: 6, month: 'Jan', title: 'NAD', status: 'booked' },
      {
        _id: 7,
        month: 'Sep',
        title: 'Hormone replacement therapy',
        status: 'book Now'
      }
    ]
  },
  mutations: {
    changePLans (state, payload) {
      state.plans = payload
    }
  },
  actions: {
    async removePlan (context, _id) {
      const plans = context.state.plans.filter((item) => item._id !== _id)
      context.commit('changePLans', plans)
    }
  },
  modules: {},
  getters: {}
})

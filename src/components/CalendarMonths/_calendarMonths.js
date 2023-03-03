export default {
  data () {
    return {
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  },
  methods: {
    getPlans (month) {
      return this.$store.state.plans.filter((e) => e.month === month)
    }
  }
}

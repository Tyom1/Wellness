export default {
  emits: ['showHide'],
  computed: {
    getSteps () {
      return this.$store.state.plans.filter((e) => e.status !== 'completed')
        .length
    }
  },
  methods: {
    hideShow () {
      this.$emit('showHide')
    }
  }
}

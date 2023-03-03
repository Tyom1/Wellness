export default {
  data () {
    return {
      plans: [],
      activeBtnId: null,
      nameValue: '',
      showModal: false
    }
  },
  methods: {
    openTools (_id) {
      if (this.activeBtnId === _id) {
        return (this.activeBtnId = -1)
      }
      this.activeBtnId = _id
    },

    editRename (_id, title) {
      this.nameValue = title
      this.showModal = true
    },
    saveName () {
      this.showModal = false
      this.plans.forEach((item) => {
        if (item._id === this.activeBtnId) {
          item.title = this.nameValue
        }
      })
      this.activeBtnId = -1
    },

    async deletePlan (_id) {
      this.activeBtnId = -1
      this.$store.dispatch('removePlan', _id)
      this.plans = await this.$store.state.plans
    }
  },
  mounted () {
    this.plans = this.$store.state.plans
  }
}

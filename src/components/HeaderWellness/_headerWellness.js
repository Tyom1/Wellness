export default {
  data () {
    return {
      fullyear: null
    }
  },
  methods: {
    getFullYear () {
      return (this.fullyear = new Date().getFullYear())
    }
  }
}

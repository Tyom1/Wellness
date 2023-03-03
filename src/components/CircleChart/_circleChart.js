import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'CircleChart',
  components: { Doughnut },
  data () {
    return {
      plans: [],
      gradient: null
    }
  },
  computed: {
    getStatistic () {
      const compconsted = this.$store.state.plans.filter(
        (item) => item.status === 'completed'
      )
      const notCompconsted = this.$store.state.plans.filter(
        (item) => item.status !== 'completed'
      )
      return [compconsted.length, notCompconsted.length]
    },
    circleData () {
      return {
        datasets: [
          {
            backgroundColor: [this.gradient, '#f1f2f3'],
            borderWidth: 0,
            data: this.getStatistic
          },
          {
            cutoutPercentage: 70
          }
        ]
      }
    },
    circleOptions () {
      return {
        responsive: true
      }
    },
    plugins () {
      return [
        {
          id: 'text',
          beforeDraw: function (chart) {
            const width = chart.width
            const height = chart.height
            const ctx = chart.ctx

            const fontSize = 40
            ctx.font = fontSize + 'px roboto'
            const finishedCount = chart.data.datasets[0].data[0]
            const ongoingCount = chart.data.datasets[0].data[1]
            let text = Math.round((finishedCount / (finishedCount + ongoingCount)) * 100) + '%'
            if (!finishedCount && !ongoingCount) {
              text = '0%'
            }
            const textX = Math.round((width - ctx.measureText(text).width) / 2)
            const textY = height / 2

            ctx.fillText(text, textX, textY)
          }
        }
      ]
    }
  },
  mounted () {
    this.gradient = this.$refs.circleCanvas
      .getContext('2d')
      .createLinearGradient(200, 100, 0, 200)
    this.gradient.addColorStop(0, '#b0d4e2')
    this.gradient.addColorStop(0.5, '#61b058')
    this.gradient.addColorStop(1, '#61b058')
  }
}

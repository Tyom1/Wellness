import HeaderWellness from '@/components/HeaderWellness/HeaderWellness'
import ContainerHead from '@/components/ContainerHead/ContainerHead'
import CircleChart from '@/components/CircleChart/CircleChart'
import CalendarMonths from '@/components/CalendarMonths/CalendarMonths'
import DataTable from '@/components/DataTable/DataTable'

export default {
  name: 'HomeWellness',
  components: {
    HeaderWellness,
    ContainerHead,
    CircleChart,
    CalendarMonths,
    DataTable
  },
  data () {
    return {
      hideWrapper: false
    }
  },
  methods: {
    toggleHide () {
      return (this.hideWrapper = !this.hideWrapper)
    }
  }
}

<template>
  <div>
    <heatTitle :title="'搜索指数'" :date="1526268168000" @chooseDate='chooseDate'/>
    <searchHeatChart />
  </div>
</template>

<script>
import heatTitle from './heat-title'
import searchHeatChart from './search-heat-chart'
export default {
  components: {
    heatTitle,
    searchHeatChart
  },
  methods: {
    chooseDate(val) {
      console.log(val)
    }
  }
}
</script>

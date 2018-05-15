<template>
  <div>
    <heatTitle :title="'收入条数（关键字）'" :date="15001245"/>
    <includedNumberChart />
  </div>
</template>

<script>
import heatTitle from './heat-title'
import includedNumberChart from './included-number-chart'
export default {
  components: {
    heatTitle,
    includedNumberChart
  }
}
</script>

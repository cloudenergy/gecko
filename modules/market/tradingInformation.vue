<template>
  <div style="margin: 0 auto;width:1050px">
    <!-- 第二个页面 -->
    <topPieChart />
    <h2>交易所列表</h2>
    <dataTable />
  </div>
</template>

<script>
import topPieChart from '../tradingInformation/topPieChart.vue';
import dataTable from '../tradingInformation/data-table.vue';
export default {
	components: {
		topPieChart,
		dataTable
	}
};
</script>


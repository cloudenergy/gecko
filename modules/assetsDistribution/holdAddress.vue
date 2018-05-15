<template>
  <div>
		<heatTitle :title="'持有地址增长趋势'" :date="85764643543" @chooseDate='chooseDate'/>
    <holdAddressCharts class="holdAddressCharts"/>
    <holdAddressPropoprtion class="holdAddressPropoprtion"/>
    <holdAddressTable class="holdAddressTable"/>
  </div>
</template>

<script>
import holdAddressCharts from './holdAddressCharts';
import holdAddressPropoprtion from './holdAddressPropoprtion';
import holdAddressTable from './holdAddressTable';
import heatTitle from '~/modules/heat/heat-title'
export default {
	components: {
		holdAddressCharts,
		holdAddressPropoprtion,
		holdAddressTable,
		heatTitle
	},
	methods: {
		chooseDate(val) {
			console.log(val)
		}
	}
};
</script>

<style lang="less" scoped>
.holdAddressCharts,
.holdAddressPropoprtion,
.holdAddressTable {
	margin: 0 auto;
	width: 1050px;
}
</style>



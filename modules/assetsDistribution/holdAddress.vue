<template>
  <div>
    <holdAddressCharts class="holdAddressCharts"/>
    <holdAddressPropoprtion class="holdAddressPropoprtion"/>
    <holdAddressTable class="holdAddressTable"/>
  </div>
</template>

<script>
import holdAddressCharts from './holdAddressCharts';
import holdAddressPropoprtion from './holdAddressPropoprtion';
import holdAddressTable from './holdAddressTable';
export default {
	components: {
		holdAddressCharts,
		holdAddressPropoprtion,
		holdAddressTable
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



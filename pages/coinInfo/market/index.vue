<template>
  <div>
    <top-nav :link="link" @tabChange = "tabChange"/>
    <div class="select">
      <priceTrend v-if="index===0"/>
      <tradingInformation v-if="index===1"/>
      <exchangeDistribution v-if="index===2"/>
    </div>
  </div>
</template>
<script>
import {
	priceTrend,
	tradingInformation,
	exchangeDistribution
} from '~/modules/market/index';
export default {
	created() {},
	computed: {},
	components: {
		priceTrend,
		tradingInformation,
		exchangeDistribution
	},
	data() {
		return {
			link: [
				{ name: '价格趋势', link: '' },
				{ name: '交易信息', link: '' },
				{ name: '交易所分布', link: '' }
			],
			index: 0
		};
	},
	methods: {
		tabChange(val) {
			this.$set(this, 'index', val);
		}
	}
};
</script>
<style>
.select {
	background-color: #fff;
}
</style>
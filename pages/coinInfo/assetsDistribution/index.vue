<template>
  <div>
    <top-nav :link="link" @tabChange = "tabChange"/>
    <div class="select">
      <holdAddress v-if="index===0"/>
      <transactionAnalysis v-if="index===1"/>
    </div>
  </div>
</template>

<script>
import { holdAddress, transactionAnalysis } from '~/modules/assetsDistribution';
export default {
	created() {},
	computed: {},
	components: {
		holdAddress,
		transactionAnalysis
	},
	data() {
		return {
			link: [{ name: '持有地址' }, { name: '交易分析' }],
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

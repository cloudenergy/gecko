<template>
  <div>
    <top-nav :link="link" @tabChange = "tabChange"/>
    <div class="select">
      <basicInfo v-if="index===0"/>
      <developHistory v-if="index===1"/>
    </div>
  </div>
</template>

<script>
import { developHistory, basicInfo } from '~/modules/coinInfo/index';
export default {
	created() {},
	computed: {},
	components: {
		developHistory,
		basicInfo
	},
	data() {
		return {
			link: [
				{ name: '基本信息', link: '/coinInfo/basicInfo' },
				{ name: '发展历程', link: '/coinInfo/basicInfo' }
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



<template>
  <div class="coin-info">
    <coinMenu class="coin-menu" />
    <div class="main-content">
      <router-view></router-view>
    </div>
		<basicInfo style="flex:1"/>
  </div>
</template>

<script>
import { coinMenu } from '~/modules/coinMenu/index';
import basicInfo from '~/modules/basicInfo/basicInfo.vue';
export default {
	components: {
		coinMenu,
		basicInfo
	},
	created() {}
};
</script>

<style lang="less" scoped>
.coin-info {
	margin-top: 20px;
	display: flex;
	.coin-menu {
		width: 300px;
	}
	.main-content {
		width: 1100px;
		margin: 0 25px;
	}
}
</style>
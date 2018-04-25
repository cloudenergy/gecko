<template>
  <div class="coin-info">
    <coinMenu class="coin-menu" />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { coinMenu } from '~/modules/coinMenu/index';
export default {
	components: {
		coinMenu
	},
	created() {
		console.log(1);
	}
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
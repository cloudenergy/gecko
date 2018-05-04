<template>
  <el-col :span="12">
    <div class="top-menu-info flex aline">
      <i class="el-icon-arrow-left goback point" @click="goback"></i>
      <img src="~/static/imgs/eth_logo.png" alt="" srcset="" class="coin-icon">
      <span class="coin-name">Ethereum</span>
    </div>
    <el-menu
      router
      :default-active="menuList[0].router"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#4a90e2"
      style="height:520px;">
      <el-menu-item v-for="(item, index) in menuListQuery" :key="index" :index="item.router">
        <span slot="title">{{item.value}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>
export default {
	computed: {
		menuListQuery() {
			return this.menuList.map(ele => {
				return {
					router: `${ele.router}?name=${this.$route.query.name}`,
					value: ele.value
				};
			});
		}
	},
	data() {
		return {
			menuList: [
				{ router: '/coinInfo/basicInfo', value: '基本信息' },
				{ router: '/coinInfo/market', value: '市场行情' },
				{ router: '/coinInfo/assetsDistribution', value: '资产分布' },
				{ router: '/coinInfo/socialHeat', value: '社交热度' },
				{ router: '/coinInfo/developHeat', value: '开发活跃度' },
				{ router: '/coinInfo/heat', value: '公众关注度' },
				{ router: '/coinInfo/news', value: '新闻资讯' }
			]
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		goback() {
			this.$router.push('/houses');
		}
	}
};
</script>

<style lang="less" scoped>
.top-menu-info {
	height: 59px;
	width: 299px;
	background: #fff;
	border-bottom: 1px solid @theme;
	.goback {
		color: @theme;
		font-size: 30px;
		margin-left: 10px;
	}
	.coin-icon {
		width: 25px;
		height: 25px;
	}
	.coin-name {
		font-size: 20px;
		margin-left: 13px;
		color: @deepBlue;
	}
}
</style>


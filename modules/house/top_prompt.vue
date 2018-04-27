<template>
  <div class="flex promit-all">
    <div v-for="(item, index) in data" :key="index" class="list-promit point" @click="into(item)">
      <!-- 顶部 -->
      <div class="flex aline header">
        <div class="flex aline"><h3 class="bold">{{item.name}}</h3><span class="type">{{item.type}}</span></div>
        <div><span :class="Number(item.percent)>0?'rose':'fall'">{{item.percent}}%</span></div>
      </div>
      <!-- 价格 -->
      <h3 class="bold price">
        {{item.num}}
      </h3>
      <!-- 成交量 -->
      <div class="volume"><span>成交量：{{item.volume}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			data: [
				{
					name: 'BTC/USD',
					type: '成交量最大',
					percent: '1.43',
					num: '8890.5',
					volume: '554345223'
				},
				{
					name: 'BTC/USD',
					type: '成交量最大',
					percent: -1.43,
					num: '8890.5',
					volume: '554345223'
				},
				{
					name: 'BTC/USD',
					type: '成交量最大',
					percent: '1.43',
					num: '8890.5',
					volume: '554345223'
				},
				{
					name: 'BTC/USD',
					type: '成交量最大',
					percent: '1.43',
					num: '8890.5',
					volume: '554345223'
				},
				{
					name: 'BTC/USD',
					type: '成交量最大',
					percent: -1.43,
					num: '8890.5',
					volume: '554345223'
				},
				{
					name: 'BTC/USD',
					type: '成交量最大',
					percent: '1.43',
					num: '8890.5',
					volume: '554345223'
				}
			]
		};
	},
	methods: {
		into(val) {
			console.log(val);
		}
	}
};
</script>

<style lang="less" scoped>
.promit-all {
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20px;
	.list-promit {
		width: 300px;
		height: 100px;
		background: #fff;
		box-shadow: 0 0 7px #888888;
		padding: 10px;
		transition: all 0.2s;
		.header {
			flex-direction: row;
			justify-content: space-between;
			.type {
				color: @fall;
				border: 1px solid @fall;
				display: inline-block;
				width: 100px;
				border-radius: 3px;
				margin-left: 5px;
				font-size: 13px;
			}
		}
		.rose {
			color: @rose;
		}
		.fall {
			color: @fall;
		}
		// 单价
		.price {
			margin-top: 8px;
		}
		// 成交数量
		.volume {
			margin-top: 15px;
			color: @gray;
		}
	}
	.list-promit:hover {
		box-shadow: 0 0 7px #4a90e2;
		transform: scale(1.03, 1.03);
	}
}
</style>

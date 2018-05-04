<template>
<div>
  <div>
    <div>
    <span>
      持有地址数量 12337
    </span>
    <span>
      (最后更新:2018-04-28 05:28)
    </span>
    </div>
    <div>
      <span>最近一月</span>
      <span>最近一年</span>
      <span>更多</span>
    </div>
  </div>
  <div id="echarts" style="width:1050px;height:600px;"></div>
</div>
</template>

<script>
export default {
	created() {
		this.drawChart();
	},
	methods: {
		drawChart() {
			setTimeout(() => {
				let myChart = this.$echarts.init(
					document.getElementById('echarts')
				);
				let a = [];
				for (let i = 1; i <= 12; i++) {
					a.push(i);
				}
				myChart.setOption({
					color: ['#4a90e2'],
					xAxis: {
						type: 'category',
						data: a,
						splitLine: {
							//网格线
							show: true,
							lineStyle: {
								color: ['#dddddd'],
								type: 'solid'
							}
						},
						// nameTextStyle: {
						// 	color: '#9b9b9b'
						// },
						axisLine: {
							lineStyle: {
								color: '#9b9b9b' //坐标轴线颜色
							}
						},
						boundaryGap: true,
						axisLabel: { interval: 0 }
					},
					yAxis: {
						type: 'value',
						splitLine: {
							//网格线
							show: true,
							lineStyle: {
								color: ['#dddddd'],
								type: 'solid'
							}
						},
						axisLine: {
							lineStyle: {
								color: '#9b9b9b' //坐标轴线颜色
							}
						}
					},
					grid: {
						show: true,
						backgroundColor: '#fbfafa'
					},
					tooltip: {},
					series: [
						{
							showAllSymbol: true,
							data: [
								10300,
								20200,
								32400,
								43200,
								50900,
								66000,
								72000,
								83000,
								99000,
								100000,
								113000,
								127000
							],
							type: 'line',
							label: {
								normal: {
									show: true,
									position: 'top'
								}
							}
						}
					]
				});
			}, 500);
		}
	}
};
</script>

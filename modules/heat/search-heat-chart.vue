<template>
<div>
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
					color: ['#4a90e2','#ef5350','#43a047','#fbc02d'],
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
					tooltip: {
            trigger: 'axis',
          },
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
              },
              symbol:'circle',
              symbolSize:10
						},
						{
							showAllSymbol: true,
							data: [
								20300,
								10200,
								22400,
								33200,
								60900,
								106000,
								72000,
								83000,
								99000,
								50000,
								31000,
								127000
							],
							type: 'line',
							label: {
								normal: {
									show: true,
									position: 'top'
								}
              },
              symbol:'circle',
              symbolSize:10
						}
					]
				});
			}, 500);
		}
	}
};
</script>

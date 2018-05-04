<template>
  <div class="chart">
    <div class="flex chart-top">
      <div class="chart-title">
        <span class="chart-title-prevent">持有地址占比</span>
        <span class="chart-title-update-time">(最后更新:2018-04-24 05:28:45)</span>
      </div>
      <div class="flex">
        <div class="top-ten-ratio">
          <div class="flex top-ten-ratio-title">
            <span>前10名地址持有数量</span>
            <span>7678657755 <span class="coin-name">VEN</span></span>
          </div>
          <div class="flex top-ten-ratio-title">
            <span>市场总供应量</span>
            <span>10000000000 <span class="coin-name">VEN</span></span>
          </div>
        </div>
        <div style="width:200px;height:200px;" id="fan"></div>
      </div>
    </div>
    <div style="width:1050px;height:400px;position:absolute" id="roundCakes"></div>
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
				let myChart1 = this.$echarts.init(
					document.getElementById('fan')
				);
				let myChart2 = this.$echarts.init(
					document.getElementById('roundCakes')
				);
				let a = [];
				for (let i = 1; i <= 12; i++) {
					a.push(i);
				}
				const coinAllNumber = 1000;
				const listArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
				const list = {
					a: 10,
					b: 20,
					c: 30,
					d: 40,
					e: 50,
					f: 60,
					g: 70,
					h: 80,
					i: 90,
					j: 100
				};
				myChart1.setOption({
					title: {
						text: '占比',
						subtext: `40.42%`,
						itemGap: 3,
						x: '49%',
						y: '32%',
						textAlign: 'center',
						textStyle: {
							fontWeight: 'normal',
							fontSize: 14,
							color: '#aaaaaa'
						},
						subtextStyle: {
							fontWeight: 'normal',
							fontSize: 24,
							color: '#020202',
							lineHeight: 14
						}
					},

					tooltip: {
						trigger: 'item',
						formatter: function(a) {
							return (
								a['data']['name'] +
								':' +
								a['data']['value'] +
								'(' +
								a['percent'] * 2 +
								'%)'
							);
						},
						position: ['25%', '50%']
					},
					color: ['#4a90e2', '#e1ebf6', 'transparent'],
					startAngle: 180,
					series: [
						{
							name: '',
							type: 'pie',
							radius: ['80%', '90%'],
							avoidLabelOverlap: false,
							startAngle: 180,
							center: ['50%', '50%'],
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [
								{
									value: 40,
									name: '占比'
								},
								{
									value: 60,
									name: '剩余'
								},
								{
									value: 100,
									name: '',
									tooltip: {
										formatter: function(a) {
											return '';
										}
									}
								}
							]
						}
					]
				});
				myChart2.setOption({
					title: {
						show: false
					},
					tooltip: {},
					color: [
						'#50E3C2',
						'#7CB5EC',
						'#F7A35C',
						'#E4D354',
						'#91E8E1',
						'#90ED7D',
						'#F7A35C',
						'#F15C80',
						'#2C908F',
						'#8085E9'
					],
					startAngle: 180,
					legend: {
						type: 'plain',
						orient: 'vertical',
						right: '30%',
						top: 'center',
						data: [
							'a',
							'b',
							'c',
							'd',
							'e',
							'f',
							'g',
							'h',
							'i',
							'j'
						],
						formatter: function(a, b, c, d) {
							return `${(list[a] / coinAllNumber).toFixed(
								2
							)}%   ${a}`;
						}
					},
					series: [
						{
							name: '',
							type: 'pie',
							radius: ['25%', '90%'],
							avoidLabelOverlap: false,
							startAngle: 180,
							center: ['30%', '50%'],
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: [
								{ name: 'a', value: 10 },
								{ name: 'b', value: 30 },
								{ name: 'c', value: 10 },
								{ name: 'd', value: 10 },
								{ name: 'e', value: 10 },
								{ name: 'f', value: 10 },
								{ name: 'g', value: 10 },
								{ name: 'h', value: 10 },
								{ name: 'i', value: 10 },
								{ name: 'j', value: 10 }
							]
						}
					]
				});
			}, 500);
		}
	}
};
</script>

<style lang="less" scoped>
.chart {
	position: relative;
	height: 500px;
	#roundCakes {
		top: 100px;
	}
	.chart-top {
		justify-content: space-between;
		padding: 0 30px;
		.chart-title {
			.chart-title-prevent {
				font-size: 18px;
			}
			.chart-title-update-time {
				color: @gray;
				margin-left: 10px;
			}
		}
		.top-ten-ratio {
			.flex.top-ten-ratio-title {
				flex-direction: column;
				span {
					height: 25px;
					line-height: 25px;
				}
				span:nth-child(1) {
					color: @gray;
				}
				span:nth-child(2) {
					font-size: 20px;
					font-weight: bold;
					.coin-name {
						color: #000;
						font-weight: 400;
					}
				}
			}
			.flex.top-ten-ratio-title:nth-child(1) {
				border-bottom: 1px solid @borderGray;
				padding-bottom: 4px;
				margin-bottom: 4px;
			}
		}
	}
}
</style>

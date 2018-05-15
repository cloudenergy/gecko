<template>
	<div>
		<div :id="value" style="width:500px;height:200px"></div>
	</div>
</template>

<script>
	export default {
		props: {
			dateChoose: {
				default: true
			},
			value: {
				required: true
			},
			title: {
				// type: Object,
				required: true
			}
		},
		created() {
			this.drawBar()
		},
		methods: {
			drawBar() {
				setTimeout(() => {
					console.log(this.value)
					let myChart = this.$echarts.init(
						document.getElementById(this.value)
					);
					let a = [];
					for (let i = 1; i <= 7; i++) {
						a.push(i);
					}
					myChart.setOption({
						title: [{
							left: '0',
							text: '群内人数'
						}],
						xAxis: {
							show: false,
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
							axisLabel: {
								interval: 0
							}
						},
						yAxis: {
							show: false,
							boundaryGap: false,
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
							},
							axisLabel: {
								width: 0
							}
						},
						grid: {
							show: true,
							backgroundColor: '#fff',
							// 内padding
							x: 0,
							y: 30,
							x2: 0,
							y2: 0,
						},
						tooltip: {},
						series: [{
							showAllSymbol: true,
							data: [
								10300,
								20200,
								32400,
								43200,
								50900,
								66000,
								72000,
							],
							type: 'bar',
							label: {
								normal: {
									show: false,
									position: 'top'
								}
							},
							itemStyle: {
								normal: {
									color: new this.$echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: '#3ce5e7'
											},
											{
												offset: 1,
												color: '#d9f4fa'
											}
										]
									)
								},
							},
							barGap: '-100%',
							barCategoryGap: '40%',
							animation: false,
						}],
						toolbox: {
							feature: {
								myTool1: {
									show: true,
									title: ' ',
									icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
									onclick: function () {
										alert('myToolHandler2')
									}
								},
								myTool2: {
									show: true,
									title: ' ',
									icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
									onclick: function () {
										alert('myToolHandler1')
									}
								},
								myTool3: {
									show: true,
									title: ' ',
									icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
									onclick: function () {
										alert('myToolHandler1')
									}
								},
							}
						}
					})
				}, 700)
			}
		}
	}
</script>
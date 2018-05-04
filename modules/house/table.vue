<template>
	<div class="house">
		<div class="flex aline table">
			<el-menu :default-active="activeIndex" class="el-menu-demo margin-right" mode="horizontal" @select="handleSelect">
				<el-menu-item :index="item.index" v-for="(item, index) in list" :key="index">{{item.type}}</el-menu-item>
			</el-menu>
			<el-select v-model="value" placeholder="请选择" size="mini" class="margin-right">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<search placeholder="输入币名称" class="margin-right" />
			<el-select v-model="value" placeholder="请选择" size="mini" class="margin-right">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			{{list[0].index}}项结果
		</div>
		<div class="data-table">
			<el-table :data="dataList" style="width: 100%" stripe @cell-mouse-enter="test" @sort-change="hotChange">
				<el-table-column prop="date" label="序号" width="60">
				</el-table-column>
				<el-table-column prop="name" label="名称">
					<template slot-scope="scope">
						<div class="coin-name point flex aline" @click="showCoinInfo(scope.row)">
							<img src="./icon.png" alt="" style="width:30px;height:30px">
							<div style="margin-left:10px">
								<p>{{scope.row.name}}</p>
								<p>{{scope.row.name}}</p>
							</div>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="关注" :render-header="focusHeader">
				</el-table-column>
				<el-table-column prop="hot" label="社区热度" sortable="custom" :render-header="hotHeader">
				</el-table-column>
				<el-table-column prop="develop" label="开发活跃度"  sortable="custom" sort-change="hotChange" :render-header="developHeader">
				</el-table-column>
				<el-table-column prop="focus" label="公众关注度"  sortable="custom" sort-change="hotChange" :render-header="focusPublicHeader">
				</el-table-column>
				<el-table-column prop="hold" label="持有账户"  sortable="custom" sort-change="hotChange" :render-header="holdHeader">
				</el-table-column>
				<el-table-column prop="price" label="价格"  sortable="custom" sort-change="hotChange" :render-header="priceHeader">
				</el-table-column>
				<el-table-column prop="turnover" label="通用市值"  sortable="custom" sort-change="hotChange" :render-header="turnoverHeader">
				</el-table-column>
				<el-table-column prop="number" label="流通量"  sortable="custom" sort-change="hotChange" :render-header="numberHeader">
				</el-table-column>
				<el-table-column prop="address" label="成交额(24H)"  sortable="custom" sort-change="hotChange" :render-header="clinchHeader">
				</el-table-column>
				<el-table-column prop="one_hour" label="1小时" class-name="none-margin" width="65" align="center" :render-header="onehourHeader">
					<template slot-scope="scope">
						<div :class="scope.row.one_hour_name">
							{{scope.row.one_hour}}%
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="one_day" label="24小时" class-name="none-margin" width="65" align="center" :render-header="onedayHeader">
					<template slot-scope="scope">
						<div :class="scope.row.one_day_name">
							{{scope.row.one_day}}%
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="seven_day" label="7天" class-name="none-margin" width="65" align="center" :render-header="sevendayHeader">
					<template slot-scope="scope">
						<div :class="scope.row.seven_day_name">
							{{scope.row.seven_day}}%
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="one_month" label="30天" class-name="none-margin" width="65" align="center" :render-header="onemonthHeader">
					<template slot-scope="scope">
						<div :class="scope.row.one_month_name">
							<div class="flex" style="flex-direction:column">
								<div>
									<p style="justify-content:center;" class="flex aline">{{scope.row.one_month}}%</p>
								<p style="justify-content:center;" class="flex aline">￥5.1</p>
								</div>
								
							</div>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="three_month" label="90天" class-name="none-margin" width="65" align="center" :render-header="threemonthHeader">
					<template slot-scope="scope">
						<div :class="scope.row.three_month_name">
							{{scope.row.three_month}}%
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="7天价格" width="120" class-name="none-margin echarts" :render-header="sevendayPriceHeader">
					<template slot-scope="scope">
						<div :id="scope.row.coinId" :style="{width: '120px', height: '60px'}"></div>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		dataList() {
			return this.tableData.map(ele => {
				ele.one_hour_name = this.checkone_hour(ele.one_hour);
				ele.one_day_name = this.checkone_hour(ele.one_day);
				ele.seven_day_name = this.checkone_hour(ele.seven_day);
				ele.one_month_name = this.checkone_hour(ele.one_month);
				ele.three_month_name = this.checkone_hour(ele.three_month);
				return ele;
			});
		}
	},
	created() {
		setTimeout(() => {
			this.drawLine(this.dataList);
		}, 2000);
	},
	data() {
		return {
			activeIndex: '1',
			list: [
				{
					type: '全部',
					index: '1'
				},
				{
					type: '法币',
					index: '2'
				},
				{
					type: '代币',
					index: '3'
				}
			],
			options: [
				{
					value: '选项1',
					label: '黄金糕'
				},
				{
					value: '选项2',
					label: '双皮奶'
				},
				{
					value: '选项3',
					label: '蚵仔煎'
				},
				{
					value: '选项4',
					label: '龙须面'
				},
				{
					value: '选项5',
					label: '北京烤鸭'
				}
			],
			value: '',
			tableData: [
				{
					coinId: '1',
					date: '1',
					name: 'btc',
					address: 'false',
					hot: '98.00',
					develop: '36.53',
					focus: '23',
					hold: '12222',
					price: '6742',
					value: '8877',
					number: '33452',
					turnover: '87655',
					one_hour: '1.2',
					one_day: '10',
					seven_day: '30',
					one_month: '70',
					three_month: '110',
					seven_day_price: [
						{
							price: '43.21'
						},
						{
							price: '80.89'
						},
						{
							price: '50.82'
						},
						{
							price: '84.37'
						},
						{
							price: '80.02'
						},
						{
							price: '75.00'
						},
						{
							price: '66.74'
						},
						{
							price: '83.96'
						},
						{
							price: '48.86'
						},
						{
							price: '86.42'
						},
						{
							price: '94.15'
						},
						{
							price: '40.91'
						},
						{
							price: '57.90'
						},
						{
							price: '86.90'
						},
						{
							price: '80.00'
						},
						{
							price: '2.64'
						},
						{
							price: '23.75'
						},
						{
							price: '95.29'
						},
						{
							price: '50.91'
						},
						{
							price: '63.82'
						},
						{
							price: '99.02'
						},
						{
							price: '15.61'
						},
						{
							price: '45.57'
						},
						{
							price: '98.76'
						},
						{
							price: '44.66'
						},
						{
							price: '94.14'
						},
						{
							price: '62.09'
						},
						{
							price: '99.28'
						},
						{
							price: '60.47'
						},
						{
							price: '93.62'
						},
						{
							price: '34.74'
						},
						{
							price: '23.52'
						},
						{
							price: '30.06'
						},
						{
							price: '17.55'
						},
						{
							price: '6.23'
						},
						{
							price: '42.15'
						},
						{
							price: '81.72'
						},
						{
							price: '28.44'
						},
						{
							price: '16.48'
						},
						{
							price: '59.63'
						},
						{
							price: '44.39'
						},
						{
							price: '48.74'
						},
						{
							price: '31.10'
						},
						{
							price: '32.58'
						},
						{
							price: '71.42'
						},
						{
							price: '36.96'
						},
						{
							price: '78.31'
						},
						{
							price: '22.55'
						},
						{
							price: '49.67'
						},
						{
							price: '49.16'
						},
						{
							price: '92.29'
						},
						{
							price: '86.91'
						},
						{
							price: '68.21'
						},
						{
							price: '88.92'
						},
						{
							price: '39.65'
						},
						{
							price: '75.84'
						},
						{
							price: '26.56'
						},
						{
							price: '48.58'
						},
						{
							price: '58.55'
						},
						{
							price: '75.79'
						},
						{
							price: '19.24'
						}
					]
				},
				{
					coinId: '2',
					date: '1',
					name: 'btc',
					address: 'false',
					hot: '98.00',
					develop: '36.53',
					focus: '23',
					hold: '12222',
					price: '6742',
					value: '8877',
					number: '33452',
					turnover: '87655',
					one_hour: '-1.2',
					one_day: '-6',
					seven_day: '-15',
					one_month: '-30',
					three_month: '-50',
					seven_day_price: [
						{
							price: '33.66'
						},
						{
							price: '59.99'
						},
						{
							price: '44.79'
						},
						{
							price: '40.46'
						},
						{
							price: '70.57'
						},
						{
							price: '54.11'
						},
						{
							price: '61.20'
						},
						{
							price: '50.19'
						},
						{
							price: '16.52'
						},
						{
							price: '59.86'
						},
						{
							price: '82.24'
						},
						{
							price: '61.85'
						},
						{
							price: '67.61'
						},
						{
							price: '15.77'
						},
						{
							price: '29.94'
						},
						{
							price: '42.67'
						},
						{
							price: '35.08'
						},
						{
							price: '5.65'
						},
						{
							price: '84.42'
						},
						{
							price: '77.43'
						},
						{
							price: '36.25'
						},
						{
							price: '23.39'
						},
						{
							price: '41.83'
						},
						{
							price: '87.23'
						},
						{
							price: '89.81'
						},
						{
							price: '41.18'
						},
						{
							price: '17.53'
						},
						{
							price: '44.99'
						},
						{
							price: '85.97'
						},
						{
							price: '81.91'
						},
						{
							price: '54.86'
						},
						{
							price: '56.98'
						},
						{
							price: '58.93'
						},
						{
							price: '52.83'
						},
						{
							price: '53.16'
						},
						{
							price: '49.49'
						},
						{
							price: '9.38'
						},
						{
							price: '97.64'
						},
						{
							price: '96.02'
						},
						{
							price: '13.73'
						},
						{
							price: '53.22'
						},
						{
							price: '54.76'
						},
						{
							price: '11.48'
						},
						{
							price: '33.30'
						},
						{
							price: '50.21'
						},
						{
							price: '84.79'
						},
						{
							price: '8.50'
						},
						{
							price: '13.30'
						},
						{
							price: '15.95'
						},
						{
							price: '10.65'
						},
						{
							price: '69.81'
						},
						{
							price: '23.60'
						}
					]
				},
				{
					coinId: '3',
					date: '1',
					name: 'btc',
					address: 'false',
					hot: '98.00',
					develop: '36.53',
					focus: '23',
					hold: '12222',
					price: '6742',
					value: '8877',
					number: '33452',
					turnover: '87655',
					one_hour: '1.2',
					one_day: '-0.08',
					seven_day: '0.08',
					one_month: '10',
					three_month: '-10',
					seven_day_price: [
						{
							price: '97.14'
						},
						{
							price: '88.20'
						},
						{
							price: '78.00'
						},
						{
							price: '96.52'
						},
						{
							price: '37.92'
						},
						{
							price: '53.40'
						},
						{
							price: '33.79'
						},
						{
							price: '75.82'
						},
						{
							price: '6.38'
						},
						{
							price: '55.71'
						},
						{
							price: '22.13'
						},
						{
							price: '64.69'
						},
						{
							price: '83.69'
						},
						{
							price: '91.19'
						},
						{
							price: '21.25'
						},
						{
							price: '18.73'
						},
						{
							price: '50.85'
						},
						{
							price: '88.32'
						},
						{
							price: '19.97'
						},
						{
							price: '40.59'
						},
						{
							price: '85.68'
						},
						{
							price: '1.70'
						},
						{
							price: '0.58'
						},
						{
							price: '7.34'
						},
						{
							price: '87.23'
						},
						{
							price: '45.58'
						},
						{
							price: '14.82'
						},
						{
							price: '32.29'
						},
						{
							price: '77.84'
						},
						{
							price: '99.32'
						},
						{
							price: '26.47'
						},
						{
							price: '69.41'
						},
						{
							price: '56.65'
						},
						{
							price: '16.30'
						},
						{
							price: '87.06'
						},
						{
							price: '54.53'
						},
						{
							price: '1.78'
						},
						{
							price: '81.19'
						},
						{
							price: '36.12'
						},
						{
							price: '95.33'
						},
						{
							price: '84.49'
						},
						{
							price: '2.25'
						},
						{
							price: '72.58'
						},
						{
							price: '68.81'
						},
						{
							price: '84.35'
						},
						{
							price: '73.02'
						},
						{
							price: '79.63'
						},
						{
							price: '16.06'
						},
						{
							price: '87.07'
						},
						{
							price: '64.49'
						},
						{
							price: '44.60'
						},
						{
							price: '92.03'
						},
						{
							price: '51.78'
						},
						{
							price: '98.09'
						},
						{
							price: '41.41'
						},
						{
							price: '1.10'
						},
						{
							price: '63.34'
						},
						{
							price: '31.76'
						},
						{
							price: '8.03'
						},
						{
							price: '60.99'
						},
						{
							price: '48.50'
						},
						{
							price: '68.89'
						},
						{
							price: '77.18'
						},
						{
							price: '94.89'
						},
						{
							price: '32.83'
						},
						{
							price: '22.15'
						},
						{
							price: '94.55'
						},
						{
							price: '40.40'
						},
						{
							price: '58.72'
						},
						{
							price: '80.09'
						},
						{
							price: '38.07'
						},
						{
							price: '91.54'
						},
						{
							price: '69.34'
						},
						{
							price: '30.77'
						},
						{
							price: '94.27'
						},
						{
							price: '67.03'
						},
						{
							price: '26.88'
						},
						{
							price: '12.43'
						},
						{
							price: '62.84'
						},
						{
							price: '25.44'
						},
						{
							price: '95.22'
						},
						{
							price: '95.90'
						},
						{
							price: '83.46'
						},
						{
							price: '78.92'
						},
						{
							price: '50.88'
						},
						{
							price: '58.82'
						},
						{
							price: '70.67'
						},
						{
							price: '48.11'
						},
						{
							price: '49.15'
						},
						{
							price: '44.03'
						},
						{
							price: '80.39'
						},
						{
							price: '65.45'
						},
						{
							price: '21.30'
						},
						{
							price: '51.16'
						},
						{
							price: '71.05'
						},
						{
							price: '71.68'
						},
						{
							price: '52.41'
						},
						{
							price: '71.41'
						},
						{
							price: '83.78'
						},
						{
							price: '87.33'
						}
					]
				},
				{
					coinId: '4',
					date: '1',
					name: 'btc',
					address: 'false',
					hot: '98.00',
					develop: '36.53',
					focus: '23',
					hold: '12222',
					price: '6742',
					value: '8877',
					number: '33452',
					turnover: '87655',
					one_hour: '1.2',
					one_day: '-0.08',
					seven_day: '0.08',
					one_month: '10',
					three_month: '-10',
					seven_day_price: [
						{
							price: '91.15'
						},
						{
							price: '41.60'
						},
						{
							price: '74.80'
						},
						{
							price: '69.26'
						},
						{
							price: '65.08'
						},
						{
							price: '58.09'
						},
						{
							price: '66.10'
						},
						{
							price: '31.46'
						},
						{
							price: '84.92'
						},
						{
							price: '29.96'
						},
						{
							price: '16.00'
						},
						{
							price: '38.21'
						},
						{
							price: '72.70'
						},
						{
							price: '70.01'
						},
						{
							price: '82.56'
						},
						{
							price: '35.64'
						},
						{
							price: '76.04'
						},
						{
							price: '21.45'
						},
						{
							price: '38.07'
						},
						{
							price: '57.12'
						},
						{
							price: '23.06'
						},
						{
							price: '51.46'
						},
						{
							price: '85.97'
						},
						{
							price: '5.52'
						},
						{
							price: '56.20'
						},
						{
							price: '23.40'
						},
						{
							price: '72.35'
						},
						{
							price: '99.56'
						},
						{
							price: '62.13'
						},
						{
							price: '12.93'
						},
						{
							price: '6.10'
						},
						{
							price: '26.74'
						},
						{
							price: '80.66'
						},
						{
							price: '81.84'
						},
						{
							price: '54.36'
						},
						{
							price: '16.42'
						},
						{
							price: '17.24'
						},
						{
							price: '98.79'
						},
						{
							price: '44.48'
						},
						{
							price: '54.84'
						},
						{
							price: '32.39'
						},
						{
							price: '75.16'
						},
						{
							price: '93.75'
						},
						{
							price: '73.81'
						},
						{
							price: '82.82'
						},
						{
							price: '71.52'
						},
						{
							price: '58.78'
						},
						{
							price: '87.01'
						},
						{
							price: '4.47'
						},
						{
							price: '90.42'
						},
						{
							price: '39.29'
						},
						{
							price: '3.85'
						},
						{
							price: '58.44'
						},
						{
							price: '20.78'
						},
						{
							price: '31.76'
						},
						{
							price: '80.66'
						},
						{
							price: '43.32'
						},
						{
							price: '7.12'
						},
						{
							price: '7.92'
						},
						{
							price: '67.04'
						},
						{
							price: '90.80'
						},
						{
							price: '87.29'
						},
						{
							price: '84.82'
						},
						{
							price: '58.22'
						},
						{
							price: '60.17'
						},
						{
							price: '45.73'
						},
						{
							price: '27.64'
						},
						{
							price: '64.32'
						},
						{
							price: '28.04'
						},
						{
							price: '90.96'
						},
						{
							price: '98.10'
						},
						{
							price: '26.00'
						},
						{
							price: '98.51'
						},
						{
							price: '97.59'
						},
						{
							price: '19.14'
						},
						{
							price: '25.49'
						},
						{
							price: '78.85'
						},
						{
							price: '92.77'
						},
						{
							price: '97.13'
						},
						{
							price: '9.78'
						},
						{
							price: '65.61'
						},
						{
							price: '10.90'
						},
						{
							price: '88.90'
						},
						{
							price: '9.29'
						},
						{
							price: '86.22'
						},
						{
							price: '78.99'
						},
						{
							price: '74.88'
						},
						{
							price: '59.14'
						},
						{
							price: '78.35'
						},
						{
							price: '90.48'
						},
						{
							price: '7.07'
						},
						{
							price: '60.67'
						},
						{
							price: '58.49'
						},
						{
							price: '52.82'
						},
						{
							price: '1.46'
						},
						{
							price: '1.82'
						},
						{
							price: '82.01'
						},
						{
							price: '83.75'
						},
						{
							price: '86.72'
						},
						{
							price: '77.75'
						}
					]
				},
				{
					coinId: '5',
					date: '1',
					name: 'btc',
					address: 'false',
					hot: '98.00',
					develop: '36.53',
					focus: '23',
					hold: '12222',
					price: '6742',
					value: '8877',
					number: '33452',
					turnover: '87655',
					one_hour: '1.2',
					one_day: '-0.08',
					seven_day: '0.08',
					one_month: '10',
					three_month: '-10',
					seven_day_price: [
						{
							price: '43.21'
						},
						{
							price: '80.89'
						},
						{
							price: '50.82'
						},
						{
							price: '63.89'
						},
						{
							price: '26.57'
						},
						{
							price: '61.38'
						},
						{
							price: '74.06'
						},
						{
							price: '43.70'
						},
						{
							price: '33.21'
						},
						{
							price: '67.95'
						},
						{
							price: '58.66'
						},
						{
							price: '75.26'
						},
						{
							price: '10.51'
						},
						{
							price: '59.74'
						},
						{
							price: '30.28'
						},
						{
							price: '55.31'
						},
						{
							price: '72.13'
						},
						{
							price: '58.57'
						},
						{
							price: '56.84'
						},
						{
							price: '30.50'
						},
						{
							price: '11.42'
						},
						{
							price: '9.57'
						},
						{
							price: '54.27'
						},
						{
							price: '57.01'
						},
						{
							price: '13.98'
						},
						{
							price: '87.62'
						},
						{
							price: '26.69'
						},
						{
							price: '23.98'
						},
						{
							price: '90.47'
						},
						{
							price: '42.70'
						},
						{
							price: '84.37'
						},
						{
							price: '80.02'
						},
						{
							price: '75.00'
						},
						{
							price: '66.74'
						},
						{
							price: '83.96'
						},
						{
							price: '48.86'
						},
						{
							price: '86.42'
						},
						{
							price: '94.15'
						},
						{
							price: '40.91'
						},
						{
							price: '57.90'
						},
						{
							price: '86.90'
						},
						{
							price: '80.00'
						},
						{
							price: '2.64'
						},
						{
							price: '23.75'
						},
						{
							price: '95.29'
						},
						{
							price: '50.91'
						},
						{
							price: '63.82'
						},
						{
							price: '99.02'
						},
						{
							price: '15.61'
						},
						{
							price: '45.57'
						},
						{
							price: '80.33'
						},
						{
							price: '67.01'
						},
						{
							price: '61.38'
						},
						{
							price: '74.57'
						},
						{
							price: '75.73'
						},
						{
							price: '27.84'
						},
						{
							price: '99.44'
						},
						{
							price: '25.86'
						},
						{
							price: '32.38'
						},
						{
							price: '58.77'
						},
						{
							price: '45.96'
						},
						{
							price: '54.07'
						},
						{
							price: '98.76'
						},
						{
							price: '44.66'
						},
						{
							price: '94.14'
						},
						{
							price: '62.09'
						},
						{
							price: '99.28'
						},
						{
							price: '60.47'
						},
						{
							price: '93.62'
						},
						{
							price: '34.74'
						},
						{
							price: '23.52'
						},
						{
							price: '30.06'
						},
						{
							price: '17.55'
						},
						{
							price: '6.23'
						},
						{
							price: '42.15'
						},
						{
							price: '81.72'
						},
						{
							price: '28.44'
						},
						{
							price: '16.48'
						},
						{
							price: '59.63'
						},
						{
							price: '44.39'
						},
						{
							price: '48.74'
						},
						{
							price: '31.10'
						},
						{
							price: '32.58'
						},
						{
							price: '71.42'
						},
						{
							price: '36.96'
						},
						{
							price: '78.31'
						},
						{
							price: '22.55'
						},
						{
							price: '49.67'
						},
						{
							price: '49.16'
						},
						{
							price: '92.29'
						},
						{
							price: '86.91'
						},
						{
							price: '68.21'
						},
						{
							price: '88.92'
						},
						{
							price: '39.65'
						},
						{
							price: '75.84'
						},
						{
							price: '26.56'
						},
						{
							price: '48.58'
						},
						{
							price: '58.55'
						},
						{
							price: '75.79'
						},
						{
							price: '19.24'
						}
					]
				},
				{
					coinId: '6',
					date: '1',
					name: 'btc',
					address: 'false',
					hot: '98.00',
					develop: '36.53',
					focus: '23',
					hold: '12222',
					price: '6742',
					value: '8877',
					number: '33452',
					turnover: '87655',
					one_hour: '-1.2',
					one_day: '-0.08',
					seven_day: '0.08',
					one_month: '10',
					three_month: '-10',
					seven_day_price: [
						{
							price: '43.21'
						},
						{
							price: '80.89'
						},
						{
							price: '50.82'
						},
						{
							price: '63.89'
						},
						{
							price: '26.57'
						},
						{
							price: '61.38'
						},
						{
							price: '74.06'
						},
						{
							price: '43.70'
						},
						{
							price: '33.21'
						},
						{
							price: '67.95'
						},
						{
							price: '58.66'
						},
						{
							price: '75.26'
						},
						{
							price: '10.51'
						},
						{
							price: '59.74'
						},
						{
							price: '30.28'
						},
						{
							price: '55.31'
						},
						{
							price: '72.13'
						},
						{
							price: '58.57'
						},
						{
							price: '56.84'
						},
						{
							price: '30.50'
						},
						{
							price: '11.42'
						},
						{
							price: '9.57'
						},
						{
							price: '54.27'
						},
						{
							price: '57.01'
						},
						{
							price: '13.98'
						},
						{
							price: '87.62'
						},
						{
							price: '26.69'
						},
						{
							price: '23.98'
						},
						{
							price: '90.47'
						},
						{
							price: '42.70'
						},
						{
							price: '84.37'
						},
						{
							price: '80.02'
						},
						{
							price: '75.00'
						},
						{
							price: '66.74'
						},
						{
							price: '83.96'
						},
						{
							price: '48.86'
						},
						{
							price: '86.42'
						},
						{
							price: '94.15'
						},
						{
							price: '40.91'
						},
						{
							price: '57.90'
						},
						{
							price: '86.90'
						},
						{
							price: '80.00'
						},
						{
							price: '2.64'
						},
						{
							price: '23.75'
						},
						{
							price: '95.29'
						},
						{
							price: '50.91'
						},
						{
							price: '63.82'
						},
						{
							price: '99.02'
						},
						{
							price: '15.61'
						},
						{
							price: '45.57'
						},
						{
							price: '80.33'
						},
						{
							price: '67.01'
						},
						{
							price: '61.38'
						},
						{
							price: '74.57'
						},
						{
							price: '75.73'
						},
						{
							price: '27.84'
						},
						{
							price: '99.44'
						},
						{
							price: '25.86'
						},
						{
							price: '32.38'
						},
						{
							price: '58.77'
						},
						{
							price: '45.96'
						},
						{
							price: '54.07'
						},
						{
							price: '98.76'
						},
						{
							price: '44.66'
						},
						{
							price: '94.14'
						},
						{
							price: '62.09'
						},
						{
							price: '99.28'
						},
						{
							price: '60.47'
						},
						{
							price: '93.62'
						},
						{
							price: '34.74'
						},
						{
							price: '23.52'
						},
						{
							price: '30.06'
						},
						{
							price: '17.55'
						},
						{
							price: '6.23'
						},
						{
							price: '42.15'
						},
						{
							price: '81.72'
						},
						{
							price: '28.44'
						},
						{
							price: '16.48'
						},
						{
							price: '59.63'
						},
						{
							price: '44.39'
						},
						{
							price: '48.74'
						},
						{
							price: '31.10'
						},
						{
							price: '32.58'
						},
						{
							price: '71.42'
						},
						{
							price: '36.96'
						},
						{
							price: '78.31'
						},
						{
							price: '22.55'
						},
						{
							price: '49.67'
						},
						{
							price: '49.16'
						},
						{
							price: '92.29'
						},
						{
							price: '86.91'
						},
						{
							price: '68.21'
						},
						{
							price: '88.92'
						},
						{
							price: '39.65'
						},
						{
							price: '75.84'
						},
						{
							price: '26.56'
						},
						{
							price: '48.58'
						},
						{
							price: '58.55'
						},
						{
							price: '75.79'
						},
						{
							price: '19.24'
						}
					]
				},
				{
					coinId: '7',
					date: '1',
					name: 'btc',
					address: 'false',
					hot: '98.00',
					develop: '36.53',
					focus: '23',
					hold: '12222',
					price: '6742',
					value: '8877',
					number: '33452',
					turnover: '87655',
					one_hour: '1.2',
					one_day: '1.2',
					seven_day: '1.2',
					one_month: '1.2',
					three_month: '1.2',
					seven_day_price: [
						{
							price: '43.21'
						},
						{
							price: '80.89'
						},
						{
							price: '50.82'
						},
						{
							price: '63.89'
						},
						{
							price: '26.57'
						},
						{
							price: '61.38'
						},
						{
							price: '74.06'
						},
						{
							price: '43.70'
						},
						{
							price: '33.21'
						},
						{
							price: '67.95'
						},
						{
							price: '58.66'
						},
						{
							price: '75.26'
						},
						{
							price: '10.51'
						},
						{
							price: '59.74'
						},
						{
							price: '30.28'
						},
						{
							price: '55.31'
						},
						{
							price: '72.13'
						},
						{
							price: '58.57'
						},
						{
							price: '56.84'
						},
						{
							price: '30.50'
						},
						{
							price: '11.42'
						},
						{
							price: '9.57'
						},
						{
							price: '54.27'
						},
						{
							price: '57.01'
						},
						{
							price: '13.98'
						},
						{
							price: '87.62'
						},
						{
							price: '26.69'
						},
						{
							price: '23.98'
						},
						{
							price: '90.47'
						},
						{
							price: '42.70'
						},
						{
							price: '84.37'
						},
						{
							price: '80.02'
						},
						{
							price: '75.00'
						},
						{
							price: '66.74'
						},
						{
							price: '83.96'
						},
						{
							price: '48.86'
						},
						{
							price: '86.42'
						},
						{
							price: '94.15'
						},
						{
							price: '40.91'
						},
						{
							price: '57.90'
						},
						{
							price: '86.90'
						},
						{
							price: '80.00'
						},
						{
							price: '2.64'
						},
						{
							price: '23.75'
						},
						{
							price: '95.29'
						},
						{
							price: '50.91'
						},
						{
							price: '63.82'
						},
						{
							price: '99.02'
						},
						{
							price: '15.61'
						},
						{
							price: '45.57'
						},
						{
							price: '80.33'
						},
						{
							price: '67.01'
						},
						{
							price: '61.38'
						},
						{
							price: '74.57'
						},
						{
							price: '75.73'
						},
						{
							price: '27.84'
						},
						{
							price: '99.44'
						},
						{
							price: '25.86'
						},
						{
							price: '32.38'
						},
						{
							price: '58.77'
						},
						{
							price: '45.96'
						},
						{
							price: '54.07'
						},
						{
							price: '98.76'
						},
						{
							price: '44.66'
						},
						{
							price: '94.14'
						},
						{
							price: '62.09'
						},
						{
							price: '99.28'
						},
						{
							price: '60.47'
						},
						{
							price: '93.62'
						},
						{
							price: '34.74'
						},
						{
							price: '23.52'
						},
						{
							price: '30.06'
						},
						{
							price: '17.55'
						},
						{
							price: '6.23'
						},
						{
							price: '42.15'
						},
						{
							price: '81.72'
						},
						{
							price: '28.44'
						},
						{
							price: '16.48'
						},
						{
							price: '59.63'
						},
						{
							price: '44.39'
						},
						{
							price: '48.74'
						},
						{
							price: '31.10'
						},
						{
							price: '32.58'
						},
						{
							price: '71.42'
						},
						{
							price: '36.96'
						},
						{
							price: '78.31'
						},
						{
							price: '22.55'
						},
						{
							price: '49.67'
						},
						{
							price: '49.16'
						},
						{
							price: '92.29'
						},
						{
							price: '86.91'
						},
						{
							price: '68.21'
						},
						{
							price: '88.92'
						},
						{
							price: '39.65'
						},
						{
							price: '75.84'
						},
						{
							price: '26.56'
						},
						{
							price: '48.58'
						},
						{
							price: '58.55'
						},
						{
							price: '75.79'
						},
						{
							price: '19.24'
						}
					]
				}
			]
		};
	},
	methods: {
		focusHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">收藏自己关注的币</div>
					<div class="toolTip point">关注</div>
				</el-tooltip>
			);
		},
		hotHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">
						在电报群、推特等社交媒<br />
						体的互动，反应出人们是<br />
						否对该货币有着广泛的认<br />
						识和共识。
					</div>
					<div class="toolTip point">社区热度</div>
				</el-tooltip>
			);
		},
		developHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">
						通过对开发者的人数和公<br />
						共源代码的提交情况可以<br />
						反映出该币是够有着持续<br />
						的开发和维护。<br />
					</div>
					<div class="toolTip point">开发活跃度</div>
				</el-tooltip>
			);
		},
		focusPublicHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">
						根据在百度、谷歌等热门<br />
						网站被公众搜索的次数来<br />
						判断人们是否有兴趣来了<br />解此币。<br />
					</div>
					<div class="toolTip point">公众关注度</div>
				</el-tooltip>
			);
		},
		holdHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">持有该币的账户地址和数量。</div>
					<div class="toolTip point">持有地址数量</div>
				</el-tooltip>
			);
		},
		priceHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">当前1个币的市场价格</div>
					<div class="toolTip point">价格</div>
				</el-tooltip>
			);
		},
		turnoverHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">
						市场流通的货币数量<br />×当前1个币的价格
					</div>
					<div class="toolTip point">流通市值</div>
				</el-tooltip>
			);
		},
		numberHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">市场流通的货币总数量</div>
					<div class="toolTip point">流通数量</div>
				</el-tooltip>
			);
		},
		clinchHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">过去24小时的成交额</div>
					<div class="toolTip point">成交额(24小时)</div>
				</el-tooltip>
			);
		},
		onehourHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">过去1小时的价格变化</div>
					<div class="toolTip point">1小时</div>
				</el-tooltip>
			);
		},
		onedayHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">过去1天的价格变化</div>
					<div class="toolTip point">24小时</div>
				</el-tooltip>
			);
		},
		sevendayHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">过去7天的价格变化</div>
					<div class="toolTip point">7天</div>
				</el-tooltip>
			);
		},
		onemonthHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">过去1个月的价格变化</div>
					<div class="toolTip point">30天</div>
				</el-tooltip>
			);
		},
		threemonthHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">过去3个月的价格变化</div>
					<div class="toolTip point">90天</div>
				</el-tooltip>
			);
		},
		sevendayPriceHeader(createElement, { column, index }) {
			return (
				<el-tooltip
					class="item"
					effect="dark"
					placement="top"
					width="50"
				>
					<div slot="content">过去7天价格变化趋势</div>
					<div class="toolTip point">7天价格</div>
				</el-tooltip>
			);
		},
		handleSelect(key, keyPath) {},
		test(row, column, cell, event) {
			// console.log(row, column, cell, event);
		},
		checkone_hour(val) {
			return val > 0
				? this.absoluteNum(val, 1)
				: this.absoluteNum(-val * 2, 2);
		},
		absoluteNum(val, index) {
			if (index === 1) {
				return `positive${this.checkNum(val)}`;
			} else {
				return `negative${this.checkNum(val)}`;
			}
		},
		checkNum(val) {
			if (val > 20) {
				if (val < 50) {
					return 'normal';
				} else if (val < 100) {
					return 'big';
				} else {
					return 'jiant';
				}
			} else {
				if (val > 5) {
					return 'small';
				} else {
					return 'mini';
				}
			}
		},
		//coin 详情
		showCoinInfo(val) {
			console.log(val);
			this.$router.push({
				path: '/coinInfo/basicInfo',
				query: { name: 'private' }
			});
		},
		// 绘制表格
		drawLine(val) {
			val.map(ele => {
				let myChart = this.$echarts.init(
					document.getElementById(ele.coinId)
				);
				let price = ele.seven_day_price.map(list => {
					return list.price;
				});
				let time = ele.seven_day_price.map((list, index) => {
					return index;
				});
				// 绘制图表
				let option = {
					backgroundColor: '#fff',
					color: ['#37A2DA'],
					tooltip: {
						trigger: 'axis',
						position: ['0%', '0%']
					},
					legend: {
						show: false
					},
					grid: {
						left: 0
					},
					xAxis: {
						type: 'category',
						boundaryGap: true,
						data: time,
						show: false
					},
					yAxis: {
						show: false,
						type: 'value'
					},
					series: [
						{
							name: '涨幅',
							type: 'line',
							smooth: true,
							data: price,
							symbol: 'none'
						}
					]
				};
				myChart.setOption(option);
			});
		},
		hotChange(column) {
			console.log(column);
		}
	},
	watch: {}
};
</script>

<style lang="less" scoped>
.table {
	margin-top: 30px;
	.margin-right {
		margin-right: 15px;
	}
	.el-menu-demo {
		width: 150px;
		height: 28px;
		overflow: hidden;
		border-radius: 3px;
	}
	.el-menu-item {
		padding: 0 11px;
	}
}

.data-table {
	margin-top: 10px;
	.coin-name {
		color: #03a9f4;
		// border-bottom: 1px solid #03a9f4;
		// display: inline;
	}
	.coin-name:hover {
		color: #0d47a1;
		// border-bottom: 1px solid #0d47a1;
	}
}
</style>

<style lang="less">
.house {
	.flex.aline.table {
		.el-menu-demo {
			li {
				height: 28px;
				line-height: 28px;
			}
		}
	}
}
</style>
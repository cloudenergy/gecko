<template>
<div class='charts'>
   <div :id="value" style="height:130px;width:250px">
  </div>
  <span class="number">number</span>
</div>
 
</template>

<script>
  export default {
    props: {
      value: {
        required: true,
        type: String
      }
    },
    created() {
      this.drawLine()
    },
    methods: {
      drawLine() {
        setTimeout(() => {
          let myChart = this.$echarts.init(
            document.getElementById(this.value)
          );
          myChart.setOption({
            title: {
              text: `${this.value}`,
            },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                return `${params[0].axisValue}${params[0].value}`
              },
            },
            grid: {
              show: true,
              // 内padding
              x: 0,
              y: 30,
              x2: 0,
              y2: 0,
            },
            xAxis: [{
              show: false,
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }],
            yAxis: [{
              show: false,
              type: 'value'
            }],
            series: [{
              type: 'line',
              stack: '总量',
              areaStyle: {
                normal: {}
              },
              symbol: 'none',
              data: [120, 132, 101, 134, 90, 230, 210],
              areaStyle: {
                normal: {
                  type: 'default',
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(199, 37, 50,0.9)'
                  }, {
                    offset: 1,
                    color: 'rgba(199, 37, 50,0.2)'
                  }], false)
                }
              },
            }]
          })
        }, 500)
      }
    }
  }
</script>

<style lang="less" scoped>
.charts {
  position: relative;
  .number {
    position: absolute;
    top:0;
    left:200px;
  }
}
</style>
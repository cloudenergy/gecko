<template>
  <div>
    <h2 class="shop">背景信息</h2>
      <div class="shop-info flex aline">
        <div class="flex direction shop-info-list">
          <div class="flex aline between">
            <span>流通市值</span>
            <span class="focus">排名:18</span>
          </div>
          <div>￥ 2234324.23423</div>
          <div>$ 42342342323</div>
          <div>B 234234324</div>
          <div>
            <div class="flex aline between">
              <span>占全球总市值</span>
              <span class="bold">0.53%</span>
            </div>
            <accounted :accounted="12.75" />
          </div>
        </div>
        <div class="flex direction shop-info-list shop-center">
          <div class="flex aline between">
            <span>流通市值</span>
            <span class="focus">排名:18</span>
          </div>
          <div>￥ 2234324.23423</div>
          <div>$ 42342342323</div>
          <div>B 234234324</div>
          <div>
            <div class="flex aline between">
              <span>占全球总市值</span>
              <h3 class="bold">0.53%</h3>
            </div>
            <accounted :accounted="90" />
          </div>
        </div>
        <div class="flex direction shop-info-list">
          <div class="flex aline between">
            <span>流通市值</span>
            <span class="focus">排名:18</span>
          </div>
          <div>￥ 2234324.23423</div>
          <div>$ 42342342323</div>
          <div>B 234234324</div>
          <div>
            <div class="flex aline between">
              <span>占全球总市值</span>
              <h3 class="bold">0.53%</h3>
            </div>
            <accounted :accounted="12.75" />
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="less" scoped>
h2.shop,
h2.bg {
	margin-left: 40px;
}
.shop-info {
	height: 200px;
	.shop-info-list {
		flex: 1;
		padding: 0 40px;
		.between {
			justify-content: space-between;
			margin-bottom: 15px;
		}
		> div {
			width: 280px;
			margin-bottom: 10px;
		}
	}
	.shop-info-list.shop-center {
		border-left: 1px dotted #ccc;
		border-right: 1px dotted #ccc;
	}
}
</style>
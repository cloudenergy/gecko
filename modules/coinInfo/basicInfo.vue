<template>
  <div class="flex" style="flex-direction:column">
    <div class="flex aline coin-price-change">
      <div class="">
        <span class="bold">￥ 24.2 </span>
        <span>2.54%</span>
      </div>
      <div class="flex aline right-info">
        <div>
          <p>美元(USD)</p>
          <span class="bold">$3.844</span>
        </div>
        <div>
          <p>比特币</p>
          <span class="bold">B0.00042</span>
        </div>
        <div>
          <p>24小时最高</p>
          <span class="bold">￥24.47</span>
        </div>
        <div>
          <p>24小时最低</p>
          <span class="bold">￥23.13</span>
        </div>
      </div>
    </div>
    <div>
      <p>市场信息</p>
      <div class="shop-info flex aline">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <p>背景信息</p>
      <div class="bg-info flex aline">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.coin-price-change {
	justify-content: space-between;
	width: 1050px;
	margin: 20px auto;
	padding: 25px 20px;
	height: 80px;
	background: #fbfafa;
	box-shadow: 2px 2px 5px #ccc;
	.right-info {
		width: 720px;
		justify-content: space-between;
	}
}
.bg-info,
.shop-info {
	height: 200px;
}
.bg-info div,
.shop-info div {
	flex: 1;
}
.bg-info div:nth-child(2),
.shop-info div:nth-child(2) {
	border-left: 1px dotted #ccc;
	border-right: 1px dotted #ccc;
}
</style>

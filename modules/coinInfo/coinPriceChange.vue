<template>
  <div>
    <div class="flex aline coin-price-change">
      <div class="">
        <h3 class="bold">￥ 24.2 </h3>
        <span class="focus">2.54%</span>
      </div>
      <div class="flex aline right-info">
        <div>
          <p>美元(USD)</p>
          <h3 class="bold">$3.844</h3>
        </div>
        <div>
          <p>比特币</p>
          <h3 class="bold">B0.00042</h3>
        </div>
        <div>
          <p>24小时最高</p>
          <h3 class="bold">￥24.47</h3>
        </div>
        <div>
          <p>24小时最低</p>
          <h3 class="bold">￥23.13</h3>
        </div>
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
</style>


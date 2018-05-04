<template>
  <div class="">
    <div class="flex aline info">
      <h3>基本信息</h3>
      <span class="detail point">详细 >></span>
    </div>
    <div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
    </div>
    <div class="flex aline info priceTrend">
      <h3>基本信息</h3>
      <span class="detail point">详细 >></span>
    </div>
    <div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
      <div class="list flex aline">
        <span>英文名</span>
        <span>VeChina</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.info {
	.detail {
		color: @cobaltBlue;
		font-size: 14px;
	}
}
.info,
.list {
	justify-content: space-between;
}
.list {
	margin-top: 15px;
	padding-bottom: 5px;
	border-bottom: 1px dotted @gray;
	span:nth-child(1) {
		color: @gray;
	}
}
.priceTrend {
	margin-top: 20px;
}
</style>

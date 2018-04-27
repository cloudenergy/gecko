<template>
  <div class="all">
    <div class="progress-accounted" :style="{width:accounted*2.8+'px'}"></div>
  </div>
</template>

<script>
export default {
	props: {
		accounted: {
			default: 0,
			required: true
		}
	}
};
</script>

<style lang="less" scoped>
.all {
	margin: 0;
	padding: 0;
	width: 280px;
	height: 18px;
	border-radius: 4px;
	border: 1px solid #7baee8;
	background: #e1ebf6;
	overflow: hidden;
	.progress-accounted {
		height: 16px;
		background: #4a90e0;
		border-radius: 2px 0 0 2px;
	}
}
</style>


<template>
  <div class="flex aline top-bar">
    <div v-for="(item, index) in link" :key="index" @click="tabSwitch(item, index)" :class="active===index?'active':'none'" class="tab flex aline point">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
	props: {
		link: {
			type: Array
		}
	},
	computed: {},
	data() {
		return {
			active: 0
		};
	},
	methods: {
		tabSwitch(val, index) {
			this.$set(this, 'active', index);
			this.$emit('tabChange', index);
		}
	}
};
</script>


<style lang="less" scoped>
.top-bar {
	border-bottom: 1px solid @theme;
	.tab {
		width: 100px;
		height: 59px;
		text-align: center;
		justify-content: center;
	}
	.active {
		background: #fff;
		color: @theme;
		border-radius: 5px 5px 0 0;
	}
}
</style>


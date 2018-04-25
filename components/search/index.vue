<template>
  <div>
    <el-input :placeholder="placeholder" v-model="input5" class="input-with-select" size="mini">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
  </div>
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String
		}
	},
	data() {
		return {
			input5: ''
		};
	}
};
</script>

<style lang="less" scoped>

</style>

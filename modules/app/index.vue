<template>
	<div class="app">
        <site-nav />
        <div class="main">
			<slot />
		</div>
	</div>
</template>
<script>
import site_nav from './site-nav';
export default {
    name: 'app',
    components: {
		'site-nav': site_nav
	},
}
</script>

<style lang="less">
@top-height: 60px;

.app {
	display: flex;
}

.main {
	overflow-y: scroll;
}

.app,
.main {
	position: relative;
	width: 100%;
	height: 100%;
}

.app > .sider {
	z-index: 2;
	width: 120px;
	background-color: #2f3c4d;
	flex: 0 0 110px;
	max-width: 110px;
	min-width: 110px;
	width: 110px;
}

.app .userInfo {
	position: absolute;
	top: 0px;
	right: 20px;
	height: 60px;
	z-index: 4;
	align-items: center;
}

.add {
	display: inline-block;
	font-size: 18px;
	height: 32px;
	line-height: 32px;
	width: 100px;
	text-align: center;
	background-color: rgb(81, 140, 224);
	color: #fff;
	border-radius: 3px;
	margin-right: -4px;
}
.setPading {
	padding:0 18px;
}
.new-house .el-dialog {
	width: 730px;
	.el-row{
		margin-bottom: 20px;
	}
}
.new-contract .el-dialog {
	width: 780px;
}
</style>

<style lang="less" scoped>
	
</style>

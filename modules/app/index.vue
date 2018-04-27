<template>
	<div class="app">
		<site-nav class="site-nav" />
		<div class="main">
			<slot />
		</div>
		<div class="bottom" style="height: 300px;text-align:center;margin-top:100px;font-size:40px">bottom</div>
	</div>
</template>
<script>
import site_nav from './site-nav';
export default {
	name: 'app',
	components: {
		'site-nav': site_nav
	}
};
</script>

<style lang="less">
@top-height: 60px;

.app {
	font-size: 13px;
	background: #f0f5fa;
	width: 100%;
	overflow-x: auto;
	.site-nav {
		min-width: 1900px;
	}
}

.app,
.main {
	position: relative;
}

.main {
	width: 1850px;
	margin: 0 auto;
}
</style>

<style lang="less" scoped>

</style>
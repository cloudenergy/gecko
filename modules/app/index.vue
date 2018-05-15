<template>
	<div class="app">
		<site-nav class="site-nav" />
		<div class="main">
			<slot />
		</div>
		<div class="bottom" style="height: 300px;text-align:center;margin-top:50px;font-size:40px;background:#fff;padding-top:50px;">bottom</div>
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
	background: @backgroundColor;
	width: 100%;
	.site-nav {
		// min-width: 1900px;
	}
}

.app,
.main {
	position: relative;
	width: 100%;
}

.main {
	// width: 1850px;
	margin: 0 auto;
}
</style>

<style lang="less" scoped>

</style>
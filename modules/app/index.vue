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
	}
};
</script>

<style lang="less">
@top-height: 60px;

.app {
	display: flex;
	flex-direction: column;
	font-size: 13px;
	background: #f0f5fa;
	width: 100%;
}

.app,
.main {
	position: relative;
	height: 100%;
}
.main {
	width: 1850px;
	margin: 0 auto;
}
</style>

<style lang="less" scoped>

</style>

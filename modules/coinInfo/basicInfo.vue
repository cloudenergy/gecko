<template>
  <div class="flex " style="flex-direction:column">
    <div>
    <coinPriceChange></coinPriceChange>
    <bgInfo />
    <shopInfo />
    <coinLink />
    <introduction />
    </div>
  </div>
</template>

<script>
// import {
// 	coinPriceChange,
// 	bgInfo,
// 	shopInfo,
// 	coinLink,
// 	introduction
// } from './index.js';
import coinPriceChange from './coinPriceChange';
import bgInfo from './bgInfo';
import shopInfo from './shopInfo';
import coinLink from './coinLink';
import introduction from './introduction';
export default {
	components: {
		coinPriceChange,
		bgInfo,
		shopInfo,
		coinLink,
		introduction
	},
	created() {}
};
</script>


<template>
  <div class="flex " style="flex-direction:column">
    <coinPriceChange></coinPriceChange>
    <bgInfo />
    <shopInfo/>
		<h2>相关链接</h2>
    <coinLink :coin="list" :size="'30px'" class="coinLink"/>
    <introduction />
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
import { change } from '~/utils/coinIcon.js';
export default {
	components: {
		coinPriceChange,
		bgInfo,
		shopInfo,
		coinLink,
		introduction
	},
	created() {},
	computed: {
		list() {
			return change(this.coinList);
		}
	},
	data() {
		return {
			coinList: [
				{
					name: 'site'
				},
				{
					name: 'twitter'
				},
				{
					name: 'telegram'
				},
				{
					name: 'github'
				},
				{
					name: 'reddit'
				},
				{
					name: 'facebook'
				},
				{
					name: 'whitepaper'
				},
				{
					name: 'blockSite'
				},
				{
					name: 'slack'
				},
				{
					name: 'youtube'
				},
				{
					name: 'blog'
				},
				{
					name: 'bitcointalk'
				}
			]
		};
	}
};
</script>

<style lang="less" scoped>
.coinLink {
	margin: 10px 0 20px 0;
}
</style>



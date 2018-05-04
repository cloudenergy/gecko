<template>
  <div>
		<div class="flex aline" style="height:60px">
			<coinLink :coin="list" :hover="true" :size="'23px'" :color="'#919195'" :content="true" :width="'25px'"/>
		</div>
		<introduction />
  </div>
</template>

<script>
import { coinLink } from '../coinInfo/index';
import introduction from './introduction.vue';
import { change } from '~/utils/coinIcon.js';
export default {
	components: {
		coinLink,
		introduction
	},
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

</style>



<template>
  <div>
    <top-nav :link="link" @tabChange = "tabChange"/>
    <githubPeople />
    <githubCode />
  </div>
</template>

<script>
import { githubPeople, githubCode } from '~/modules/developHeat/index';
export default {
	created() {},
	computed: {},
	components: {
    githubPeople, 
    githubCode 
	},
	data() {
		return {
			link: [
				{ name: '开发活跃度'},
			],
			index: 0
		};
	},
	methods: {
		tabChange(val) {
			this.$set(this, 'index', val);
		}
	}
};
</script>

<style>
.select {
	background-color: #fff;
}
</style>

<template>
  <div class="flex aline">
    <!-- 所有连接icon
    -site/twitter/telegram/github/reddit/facebook/whitepaper/blockSite/slack/youtube/blog/bitcointalk
    -网站/推特/电报群/github/reddit/脸书/白皮书/区块站/slack/youtube/博客/论坛
    -->
      <div class="link flex aline" v-for="(item, index) in coin" :key="index" :style="{width:width}">
				<el-tooltip class="item" effect="dark" :content="item.entire" placement="top" v-if="content===true">
					<icon :type="item.name" :style="{color,fontSize:size}" :class="{hover: hover}" class="point"/>
    		</el-tooltip>
				<icon :type="item.name" :style="{color,fontSize:size}" :class="{hover: hover}" v-if="content===false" class="point"/>
				<span v-if="content===false" style="margin-top:10px">{{item.entire}}</span>
      </div>
  </div>
</template>

<script>
export default {
	props: {
		color: {
			default: '#7baee8',
			type: String
		},
		size: {
			type: String
		},
		coin: {
			required: true,
			type: Array
		},
		hover: {
			type: Boolean
		},
		content: {
			default: false
		},
		width: {
			default: '100px'
		}
	},
	created() {}
};
</script>


<style lang="less" scoped>
.link {
	justify-content: center;
	flex-direction: column;
	.hover {
		transition: all 0.2s;
	}
}
</style>
<style lang="less">
.hover:hover {
	color: #4a90e0 !important;
}
</style>



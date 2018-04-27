<script>
require('./iconfont.js');
export default {
	props: {
		type: null,
		symbol: { default: false, type: Boolean }
	},
	render() {
		const data = {
			class: this.type ? 'icon-' + this.type : ''
		};

		if (this.symbol) {
			return (
				<i>
					<svg class="icon" aria-hidden="true">
						<use
							href={this.icon}
							{...{ attrs: { 'xlink:href': this.icon } }}
						/>
					</svg>
				</i>
			);
		} else {
			return <i class="iconfont" {...data} />;
		}
	},
	computed: {
		icon() {
			return '#icon-' + this.type;
		}
	}
};
</script>

<style lang="less" scoped>
@import './icon.less';
@font-face {
	font-family: 'iconfont';
	src: url('./fonts/iconfont.eot'); /* IE9*/
	src: url('./fonts/iconfont.eot#iefix') format('embedded-opentype'),
		url('./fonts/iconfont.ttf') format('truetype'),
		url('./fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

i {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	line-height: 1;
	svg {
		position: absolute;
		top: 0px;
		left: 0px;
		height: 18px;
		width: 18px;
	}
}
</style>

<script>
const defaultLayout = ['login', 'notFound', 'upgrade'];
import _ from 'lodash';
export default {
	data() {
		return {
			loading: true
		};
	},
	render() {
        const matched = this.$route.matched;
		const last = matched[matched.length - 1];

		if (!last) {
			return <div class="page" />;
		}

		if (last.name && ~defaultLayout.indexOf(last.name)) {
			return <router-view />;
		}

		return (
			<app>
				<router-view />
			</app>
		);
	},
	methods: {
		stubLogin() {
			this.$router.replace('/login');
		}
	}
};
</script>

<style lang="less" scoped>
.page {
	width: 100%;
	height: 100%;
}
</style>
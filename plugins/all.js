/*
 * @Author: insane.luojie
 * @Date:   2017-09-30 09:33:33
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-23 16:52:05
 */
import api from './api';
import '../static/style';
import mixin from './mixins';
import Element from 'element-ui';
import echarts from 'echarts';
import MuseUI from 'muse-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-teal.css';

export default function(vue) {
	vue.prototype.$echarts = echarts;
	vue.use(Element);
	vue.use(MuseUI);
	// 设置api
	vue.prototype.$model = api;
	vue.prototype.$ELEMENT = { size: 'small' };
	// 设置全局 event bus
	vue.prototype.$event = new vue();

	mixin(vue);
}

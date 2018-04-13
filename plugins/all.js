/*
 * @Author: insane.luojie
 * @Date:   2017-09-30 09:33:33
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-10 13:12:14
 */
import api from "./api";
import "../static/style";
import mixin from "./mixins";
import Element from 'element-ui';
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';

export default function(vue) {
	vue.prototype.$echarts = echarts 
	vue.use(Element);
	// 设置api
	vue.prototype.$model = api;
	vue.prototype.$ELEMENT = { size: 'small' }
	// 设置全局 event bus
	vue.prototype.$event = new vue();

	mixin(vue);
}

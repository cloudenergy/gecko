/*eslint no-unused-vars: 0 */

import {
	makeGet,
	makePost,
	setup,
	makePut,
	makeDelete,
	decorateMaker,
	makePatch,
	makeResource
} from '@/api';
import { isFunc } from '~/utils';

import router from '@/router';
import axios from 'axios';

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

const interceptor = function({ response, message }) {
	const { status, data } = response || {};

	if (status === 401) {
		// source.cancel('login required.');

		// source = CancelToken.source();
		// setup({
		// 	cancelToken: source.token
		// });

		localStorage.user = '{}';
		router.push('/login');
		return data;
	}
	return Promise.reject(data);
};

const [get, post, put, del, patch] = [
	makeGet,
	makePost,
	makePut,
	makeDelete,
	makePatch
].map(action => {
	return decorateMaker(action, interceptor);
});

const resource = function(url, actions) {
	return makeResource(url, actions, {
		GET: get,
		POST: post,
		PUT: put,
		DELETE: del,
		PATCH: patch
	});
};

let baseURL = '/api/v1.0';
function responseHandler({ data, errcode, errmsg }) {
	if (errcode === 0) {
		return data;
	} else {
		// 显示错误
		return Promise.reject({ errcode, data });
	}
}

setup({
	baseURL,
	cancelToken: source.token,
	headers: {
		'content-type': 'application/json'
	},
	interceptors: {
		reponse(res) {
			const { code, message, data } = res;
			if (code && code !== 0) {
				Message({
					message: message,
					type: 'error'
				});

				return Promise.reject(message);
			}

			return data;
		}
	}
});

const apis = {
	userInfoChange: resource('/login')
};

/**
 * 通过接口名称返回请求对象
 * @param {string} entry	接口名称
 * @param {object} data  query/body 参数
 * @param {object} params url 参数
 */
export default function(entry, data, params) {
	// entry - string, array, function
	if (apis.hasOwnProperty(entry)) {
		return isFunc(apis[entry]) ? apis[entry](data, params) : apis[entry];
	}

	throw 'Entry not defined';
}

// export const getApi = name => apis[name];

import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// 先导入vuex,因为我们要使用到里面的状态对象
// vuex的路径根据自己的路径去写
import store from '@/store/index';

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
// 	axios.defaults.baseURL = 'http://119.45.160.45/api/';
// } else if (process.env.NODE_ENV == 'debug') {
// 	axios.defaults.baseURL = 'http://119.45.160.45/api/';
// } else if (process.env.NODE_ENV == 'production') {
// 	axios.defaults.baseURL = 'http://119.45.160.45/api/';
// }
axios.defaults.baseURL = '/dpc';
axios.defaults.timeout = 1000;
// post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 请求拦截器
axios.interceptors.request.use(
	config => {
		// 每次发送请求之前判断vuex中是否存在token        
		// 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
		const token = store.state.token;
		token && (config.headers.Authorization = token);
		return config;
	},
	error => {
		return Promise.error(error);
	})

// 响应拦截器
axios.interceptors.response.use(
	response => {
		// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
		// 否则的话抛出错误
		if (response.status === 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	// 服务器状态码不是2开头的的情况
	// 这里可以跟你们的后台开发人员协商好统一的错误状态码    
	// 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
	// 下面列举几个常见的操作，其他需求可自行扩展
	error => {
		if (error.response.status) {
			// console.log(uni.$u.toast)
			
			switch (error.response.status) {
				// 401: 未登录
				// 未登录则跳转登录页面，并携带当前页面的路径
				// 在登录成功后返回当前页面，这一步需要在登录页操作。                
				case 401:
				console.log(22)
					break;
					// 403 token过期
					// 登录过期对用户进行提示
					// 清除本地token和清空vuex中token对象
					// 跳转登录页面                
				case 403:
					uni.showToast({
						title: "登录过期",
						icon: "none",
						duration: 2000
					});

					setTimeout(() => {
						uni.navigateTo({
							url: '/login/login'
						})
					}, 2000)
					// 清除token
					uni.removeStorage({
						key: 'userInfo',
						success: (res) => {
							uni.reLaunch({
								url: '/page/login/login'
							})
						}
					})
					// store.commit('loginSuccess', null);
					// 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
					// uni.navigateTo({
					// 	url: '/login/login'
					// })
					break;

					// 404请求不存在
				case 404:
					uni.showToast({
						message: "网络请求不",
						duration: 1500,
						icon:none
					});
					break;
					// 其他错误，直接抛出错误提示
				default:
					uni.showToast({
						message: '123456',
						duration: 1500,
						icon:none
					});
			}
			return Promise.reject(error.response);
		}
	}
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	});
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, QS.stringify(params))
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}

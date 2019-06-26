import http from './interface'
//设置基本的访问连接
http.config.baseUrl = "http://localhost:8080/api/"

//将业务所有接口统一起来便于维护，如果项目很大可以将 url 独立成文件，接口分成不同的模块
//具体的业务请求
export const app_user_login = (data) => {
	
/* 	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
		
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
        url: 'APP.User.Login',
		dataType: 'json',
        data,
    })
}

export const App_User_Login = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
		url: 'App.User.Login',
		dataType: 'text',
        data,
    })
}



// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
        url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
        data,
    })
}

// 轮播图
export const banner = (data) => {
    return http.request({
        url: '/banner/36kr',
        method: 'GET', 
        data,
		// handle:true
    })
}

// 默认全部导出  import api from '@/common/insunHttp/'
export default {
	App_User_Login,
	test,
    banner
}
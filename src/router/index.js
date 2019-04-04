import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'

import copyRight from './copyRight'	// 版权管理
import book from './book'	// 书籍管理
import verify from './verify'		// 审核列表
import platform from './platform'	// 平台管理
import user from './user'			// 用户数据
import sale from './sale'			// 销售数据
import account from './account'		// 账户管理
import remind from './remind'		// 短梗提醒
Vue.use(Router)

export default new Router({
	mode: 'history',  //去掉url中的#
	routes: [
		{
			path: '/',
			redirect:'/login',
		},
	    {
			path: '/login',
			name: '登陆',
			component: login
		},
		{
			path: '/',
			name: '首页',
			component: home,
			children:[
				...copyRight,
				...book,
				...verify,
				...platform,
				...user,
				...sale,
				...account,
				...remind
			]
		},
	]
})

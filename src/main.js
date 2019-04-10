// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// iview ui(按需引入)
import {
	Menu,
	MenuItem,
	Submenu,
	Breadcrumb,
	BreadcrumbItem,
	Row,
	Col,
	Button,
	Form,
	FormItem,
	Icon,
	Table,
	Page,
	Modal,
	Input,
	Select,
	Option,
	Tabs,
	TabPane,
	RadioGroup,
	Radio,
	DatePicker,
	Card,
	Upload,
	Notice,
	Message
} from 'iview';
import 'iview/dist/styles/iview.css';

Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Submenu', Submenu);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);
Vue.component('Card', Card);
Vue.component('Upload', Upload);
Vue.component('Form', Form);
Vue.component('Form-item', FormItem);
Vue.component('Page', Page);
Vue.component('Table', Table);
Vue.component('Icon', Icon);
Vue.component('Input', Input);
Vue.component('Select', Select);
Vue.component('RadioGroup', RadioGroup);
Vue.component('DatePicker', DatePicker);
Vue.component('Radio', Radio);
Vue.component('Option', Option);
Vue.component('Button', Button);
Vue.component('Modal', Modal);
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Message = Message;

//Message
//路由跳转
router.beforeEach((to, from, next) => {
	// console.log(to);
	// console.log(from);
	next();
})
//交互 axios
import axios from 'axios'
//配置post参数

import qs from 'qs';
Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use((config) => {  //配置发送请求的信息
	if (config.method == 'post' && config.headers['Content-Type'] != 'multipart/form-data') {
		config.data = qs.stringify(config.data);
	}
	// store.dispatch('loadingShowFn');
	return config;
}, function (error) {
	return Promise.reject(error);
});

axios.interceptors.response.use((response) => { //配置请求回来的信息
	// store.dispatch('loadingHiddenFn');
	// console.log(router);
	// console.log(response);
	switch (response.data.code) {
		case 0:
			Notice.error({
				title: router.history.current.name,
				desc: response.data.msg
			});
			break;
		case 1:
			return response.data;
			break;
		case -1:
			router.replace({ path: '/login' });
			break;
	}
}, function (error) {
	return Promise.reject(error);
});
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})

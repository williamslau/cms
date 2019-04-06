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
	Upload
} from 'iview';
import 'iview/dist/styles/iview.css';

Vue.component('Menu', Menu);
Vue.component('Menu-item', MenuItem);
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



Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

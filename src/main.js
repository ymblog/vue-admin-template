import Vue from 'vue';
import App from './App';
import router from './router';
import util from '@/assets/js/util';
import ElementUI from 'element-ui';//引入饿了么ui
import 'element-ui/lib/theme-chalk/index.css'//引入饿了么ui
import '@/assets/js/filter';//引入过滤器
import '@/assets/js/directive';//引入自定义指令
import store from '@/store/index.js';//使用vuex 不使用请删除掉

Vue.config.productionTip = false;
Vue.use(util);
Vue.use(ElementUI);
new Vue({
	el: '#app',
	store,
	router,//使用vuex 不使用请删除掉
	components: { App },
	template: '<App/>'
})

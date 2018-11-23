import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);
const state = {
	data:''//用户信息 包括token、name和导航权限列表
};
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
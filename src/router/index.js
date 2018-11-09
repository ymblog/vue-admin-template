import Vue from 'vue';
import Router from 'vue-router';
import Util from '@/assets/js/util';
import common from '@/assets/js/common';
import store from '@/store/index.js';//使用vuex 不使用请删除掉
//组件统一懒加载引入
const index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index');
const form = r => require.ensure([], () => r(require('@/pages/form/form')), 'form');
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login');
const table = r => require.ensure([], () => r(require('@/pages/table/table')), 'table');
Vue.use(Util);
Vue.use(Router);
/* 需要验证登录的加上
meta:{
    requiresAuth:true
}
*/
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta:{
                requiresAuth:true
            }
        },
        {
            path: '/form',
            name: 'form',
            component: form,
            meta:{
                title:'表单',
                requiresAuth:true
            }
        },
        {
            path: '/table',
            name: 'table',
            component: table,
            meta:{
                title:'表格',
                requiresAuth:true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
});
//登录验证 包括存储用户信息 不使用请删除掉
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (common.cookie.get('token')) {
            if(store.state.token){
                next();
            }else{
                store.commit('SET_NAME',common.cookie.get('name'));
                store.commit('SET_TOKEN',common.cookie.get('token'));
                store.commit('SET_ROLE',common.cookie.get('role'));
                next();
            }    
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});
export default router;


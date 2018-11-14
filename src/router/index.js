import Vue from 'vue';
import Router from 'vue-router';
import Util from '@/assets/js/util';
import common from '@/assets/js/common';
import store from '@/store/index.js';//使用vuex 不使用请删除掉
//组件统一懒加载引入
const index = r => require.ensure([], () => r(require('@/pages/index/index')), 'index');
const layout = r => require.ensure([], () => r(require('@/components/layout')), 'layout');
const form = r => require.ensure([], () => r(require('@/pages/form/form')), 'form');
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login');
const table = r => require.ensure([], () => r(require('@/pages/table/table')), 'table');
const richtext = r => require.ensure([], () => r(require('@/pages/richtext/richtext')), 'richtext');
const error = r => require.ensure([], () => r(require('@/pages/error/error')), 'error');
Vue.use(Util);
Vue.use(Router);
const whiteList = ['/login','/error'] // 不需要登录的白名单
const router = new Router({
    routes: [
        {
            path: '/',
            component: layout,
            redirect: '/index',
            children: [{
                path:'index',
                name: 'index',
                component: index,
                meta:{
                    title:'首页',
                    nav:'1'
                },
            }]
        },
        {
            path: '/error',
            name: 'error',
            component: error
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/layout',
            name: 'layout',
            redirect:'/layout/form',
            component: layout,
            meta:{
                title:'布局'
            },
            children: [
                {
                    path: 'form',
                    name: 'form',
                    component: form,
                    meta:{
                        title:'表单',
                        nav:'2-1'
                    }
                },
                {
                    path: 'table',
                    name: 'table',
                    component: table,
                    meta:{
                        title:'表格',
                        nav:'2-2'
                    }
                }
            ]
        },
        {
            path: '/other',
            name: 'other',
            redirect:'/other/richtext',
            component: layout,
            meta:{
                title:'其他'
            },
            children: [
                {
                    path: 'richtext',
                    name: 'richtext',
                    component: richtext,
                    meta:{
                        title:'富文本',
                        nav:'3-1'
                    }
                }
            ]
        },
        { path: '*', redirect: '/error', hidden: true }
    ]
});
//登录验证 包括存储用户信息 不使用请删除掉
router.beforeEach((to, from, next) => {
    if (whiteList.indexOf(to.path) == -1) {
        if (common.cookie.get('token')) {
            if(store.state.token){
                next();
            }else{
                store.commit('SET_NAME',common.cookie.get('name'));
                store.commit('SET_TOKEN',common.cookie.get('token'));
                store.commit('SET_ROLE',common.cookie.get('role'));
                store.commit('SET_NAVLIST',JSON.parse(common.cookie.get('navList')));
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


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
const plugin = r => require.ensure([], () => r(require('@/pages/plugin/plugin')), 'plugin');
const error = r => require.ensure([], () => r(require('@/pages/error/error')), 'error');
const accountList = r => require.ensure([], () => r(require('@/pages/setting/account/list')), 'accountList');
const accountEdit = r => require.ensure([], () => r(require('@/pages/setting/account/edit/edit')), 'accountEdit');
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
            path: '/setting',
            name: 'setting',
            redirect:'/setting/account',
            component: layout,
            meta:{
                title:'系统管理'
            },
            children: [
                {
                    path: 'account',
                    name: 'accountList',
                    component: accountList,
                    meta:{
                        title:'子账号管理',
                        nav:'2-1'
                    },
                    children: [
                        {
                            path: 'add',
                            name: 'accountAdd',
                            component: accountEdit,
                            meta:{
                                title:'新增子账号',
                                nav:'2-1-1'
                            }
                        },
                        {
                            path: 'edit/:id',
                            name: 'accountEdit',
                            component: accountEdit,
                            meta:{
                                title:'编辑子账号',
                                nav:'2-1-1'
                            }
                        }
                    ]
                }
            ]
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
                        nav:'3-1'
                    }
                },
                {
                    path: 'table',
                    name: 'table',
                    component: table,
                    meta:{
                        title:'表格',
                        nav:'3-2'
                    }
                }
            ]
        },
        {
            path: '/other',
            name: 'other',
            redirect:'/other/plugin',
            component: layout,
            meta:{
                title:'其他'
            },
            children: [
                {
                    path: 'plugin',
                    name: 'plugin',
                    component: plugin,
                    meta:{
                        title:'插件',
                        nav:'4-1'
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
        //设置单独的cookie名称
        if (common.cookie.get(common.cookie.dataName)) {
            if(store.state.data){
                next();
            }else{
                store.commit('SET_DATA',JSON.parse(common.cookie.get(common.cookie.dataName)));
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


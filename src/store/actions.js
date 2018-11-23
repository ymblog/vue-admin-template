/**
 * vuex异步操作
 * @author lk 2018-11-08
 */
import Vue from 'vue';
import common from '@/assets/js/common';
const actions = {
    // 登录
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            //导航模板
            const navTemplate = {
                '2':{
                    title: '系统管理',
                    icon: 'el-icon-setting',
                    index: '2',
                },
                '2-1':{
                    title: '子账号管理',
                    index: '2-1',
                    name: 'accountList'
                },
                '3':{
                    title: '布局',
                    icon: 'el-icon-menu',
                    index: '3',
                },
                '3-1':{
                    title: '表单',
                    index: '3-1',
                    name: 'form'
                },
                '3-2':{
                    title: '表格',
                    index: '3-2',
                    name: 'table'
                },
                '4':{
                    title: '其他',
                    icon: 'el-icon-tickets',
                    index: '4',
                },
                '4-1':{
                    title: '插件',
                    index: '4-1',
                    name: 'plugin'
                }
            }
            Vue.prototype.$ajax({
                url: '/login',
                method: 'POST',
                data: {
                    username:userInfo.username,
                    password:userInfo.password
                }
            }).then(response => {
                let data = response.data;
                let list = [];
                //生成导航列表
                data.navList.forEach((value) => {
                    let tem = {};
                    tem = navTemplate[value['nav']];
                    if(value.children.length > 0){
                        tem.children = [];
                        value.children.forEach((item) => {
                            tem.children = [...tem.children,navTemplate[item]];
                        });
                    }
                    list = [...list,tem];
                });
                let info = {token:data.token,name:data.name,list:list};
                common.cookie.set(common.cookie.dataName,
                    JSON.stringify(info));
                commit('SET_DATA',info);
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
    },

    // 登出
    logOut({ commit, state }){
        return new Promise((resolve, reject) => {
            Vue.prototype.$ajax({
                url: '/logout',
                method: 'POST',
                data: {
                    token:state.data.token
                }
            }).then(() => {
                commit('SET_DATA', '');
                common.cookie.delete(common.cookie.dataName);
                resolve();
            }).catch(error => {
                reject(error);   
            });
        });
    }
}
export default actions;
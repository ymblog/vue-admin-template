webpackJsonp([4],{"C9/d":function(t,a){},K3aq:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"lt-content"},[e("div",{staticClass:"add-btn-box"},[e("router-link",{attrs:{to:{name:"accountAdd"}}},[e("el-button",{attrs:{type:"primary"}},[t._v("新增")])],1)],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list.data,border:"",align:"center"}},[e("el-table-column",{attrs:{prop:"role",label:"角色名称",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"account",align:"center",label:"登录账号"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{attrs:{to:{name:"accountEdit",params:{id:a.row.id}}}},[e("el-button",{attrs:{type:"text"}},[t._v("编辑")])],1)]}}])})],1),t._v(" "),e("el-pagination",{staticClass:"lt-pagination",attrs:{background:"",layout:"prev, pager, next",total:t.list.total}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=e("VU/8")({data:function(){return{list:{data:[]},loading:!0}},created:function(){var t=this;this.$ajax({url:"/accountList"}).then(function(a){t.loading=!1,t.list=a})}},n,!1,function(t){e("C9/d")},null,null);a.default=l.exports}});
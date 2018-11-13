<template>
	<el-row class="lt-nav">
		<el-menu
			:default-active="active"
			class="el-menu-vertical-demo"
			background-color="#304156"
			text-color="rgb(191, 203, 217)"
			active-text-color="#409eff"
			>
			<el-menu-item index="1">
				<router-link :to="{name:'index'}" slot="title">
					<i class="el-icon-document"></i>
					<span>首页</span>
				</router-link>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>布局</span>
				</template>
				<router-link :to="{name:'form'}">
					<el-menu-item index="2-1">表单</el-menu-item>
				</router-link>
				<router-link :to="{name:'table'}">
					<el-menu-item index="2-2">表格列表</el-menu-item>
				</router-link>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span>其他</span>
				</template>
				<router-link :to="{name:'richtext'}">
					<el-menu-item index="3-1">富文本</el-menu-item>
				</router-link>
			</el-submenu>
		</el-menu>
	</el-row>
</template>
<script>
	export default {
		data(){
			return{
				active:'1'
			}
		},
		mounted(){
			this.active = this.$route.meta.nav;
		}
	}
</script>
<style lang="less" scope>
.lt-nav{
	position:fixed;
	left:0;
	top:0;
	height:100%;
	width:210px;
}
.el-menu{
	height:100%;
}
</style>
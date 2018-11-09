<template>
	<el-row class="lt-nav">
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			background-color="#304156"
			text-color="rgb(191, 203, 217)"
			active-text-color="#409eff">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>布局</span>
				</template>
				<router-link :to="{name:'form'}">
					<el-menu-item index="1-1">表单</el-menu-item>
				</router-link>
				<router-link :to="{name:'table'}">
					<el-menu-item index="1-2">表格列表</el-menu-item>
				</router-link>
			</el-submenu>
			<el-menu-item index="3">
				<i class="el-icon-setting"></i>
				<span>其他</span>
			</el-menu-item>
		</el-menu>
	</el-row>
</template>
<script>
	export default {
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
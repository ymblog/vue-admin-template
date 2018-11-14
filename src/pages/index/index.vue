<template>
	<div class="lt-content page-index">
		<h2>欢迎进入后台管理系统</h2>
		<p>用户名：{{name}}</p>
		<p>角色：{{role}}</p>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	export default{
		name:'index',
	  	computed:{
			...mapState(['name','role'])
		}
	}
</script>
<style lang="less" scope>
.lt-content.page-index{
	height:86vh;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	h2{
		margin-bottom:30px;
		font-size:28px;
	}
	p{
		font-size:16px;
		line-height:2;
	}
}
</style>
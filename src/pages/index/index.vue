<template>
	<div class="page-index lt-block">
		<nav-bar></nav-bar>
		<div class="lt-main">
			<breadcrumb></breadcrumb>
		</div>
	</div>
</template>
<script>
	import navBar from '@/components/navBar';
	import breadcrumb from '@/components/breadcrumb';
	export default{
		components:{
			navBar,
			breadcrumb
		}
	}
</script>
<style lang="less" scope>
@import './index.less';
</style>
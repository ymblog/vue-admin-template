<template>
	<div class="lt-block">
		<nav-bar />
		<div class="lt-main">
			<breadcrumb />
			<transition name="fade" mode="out-in">
			  	<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
	import navBar from '@/components/nav-bar';
	import breadcrumb from '@/components/breadcrumb';
	export default{
		components:{
			navBar,
			breadcrumb
		}
	}
</script>
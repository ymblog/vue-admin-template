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
			<el-submenu :index="nav.index" v-for="nav in list" :key="nav.index">
				<template slot="title">
					<i :class="nav.icon"></i>
					<span>{{nav.title}}</span>
				</template>
				<router-link :to="{name:navItem.name}" v-for="navItem in nav.children" :key="navItem.name">
					<el-menu-item :index="navItem.index">{{navItem.title}}</el-menu-item>
				</router-link>
			</el-submenu>
		</el-menu>
	</el-row>
</template>
<script>
	import {mapState} from 'vuex';
	export default {
		computed:{
			...mapState(['data'])
		},
		data(){
			return{
				active:'1'
			}
		},
		created(){
			//侧边导航权限后端提供
			this.list = this.data.list;
			this.active = this.$route.meta.nav;
		}
	}
</script>
<style lang="less">
body{
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
	.el-menu-item{
		a{
			display:block;
		}
	}
}
</style>
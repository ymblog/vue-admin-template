<template>
	<div class="lt-breadcrumb-box">
		<el-breadcrumb class="lt-breadcrumb" separator="/">
			<el-breadcrumb-item v-for="(item,index) in breadList" :to="item.path" :key="index">
				<span v-if="index==breadList.length-1" class="no-redirect">{{ item.meta.title }}</span>
	       	 	<router-link v-else :to="item.path">{{ item.meta.title }}</router-link>
			</el-breadcrumb-item>
		</el-breadcrumb>
		<el-dropdown class="lt-dropdown" @command="handleCommand">
			<span class="el-dropdown-link">
			{{data.name}}<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="logout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	export default{
		data(){
			return{
				breadList:[]
			}
		},
		computed:{
			...mapState(['data'])
		},
		watch: {
			$route(){
				this.getBreadcrumb();
			}
        },
        created(){
        	this.getBreadcrumb();
        },
        methods:{
            //处理下拉框函数
            handleCommand(command){
            	//登出
            	if(command === 'logout'){
	            	this.$confirm('确定要退出吗?','提示',{
	            		confirmButtonText: '确定',
	          			cancelButtonText: '取消',
	            	}).then(()=>{
						this.$store.dispatch('logOut').then(()=>{
		            		this.$router.push('/login');
		            	});
	            	});
	            }
            },
            getBreadcrumb(){
            	//动态设置面包屑
				let matched = this.$route.matched.filter(item => item.name);
	            const first = matched[0];
	            if (first && first.name.trim().toLocaleLowerCase() !== 'index'.toLocaleLowerCase()) {
	                matched = [{ path: '/', meta: { title: '首页' }}].concat(matched);
	            }
	            this.breadList = matched;
            }
        }
	}
</script>
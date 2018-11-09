<template>
	<el-breadcrumb class="lt-breadcrumb" separator="/">
		<el-breadcrumb-item v-for="(item,index) in breadList" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
		<el-dropdown class="lt-dropdown">
			<span class="el-dropdown-link">
			{{name}}<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</el-breadcrumb>
</template>
<script>
	import {mapState} from 'vuex';
	export default{
		data(){
			return{
				breadList:[]
			}
		},
		mounted(){
			let matched = this.$route.matched.filter(item => item.name);
            const first = matched[0];
            if (first && first.name.trim().toLocaleLowerCase() !== 'index'.toLocaleLowerCase()) {
                matched = [{ path: '/', meta: { title: '首页' }}].concat(matched);
            }
            console.log(matched);
            this.breadList = matched;
		},
		computed:{
			...mapState(['name'])
		},
		watch: {
            $route() {
                this.getBreadcrumb();
            }
        },
        methods:{
            getBreadcrumb() {
            	console.log(111);
                let matched = this.$route.matched.filter(item => item.name);
                const first = matched[0];
                if (first && first.name.trim().toLocaleLowerCase() !== 'index'.toLocaleLowerCase()) {
                    matched = [{ path: '/', meta: { title: '首页' }}].concat(matched);
                }
                console.log(matched);
                this.breadList = matched;
            }
        }
	}
</script>
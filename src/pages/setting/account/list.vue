<template>
	<div class="lt-content">
		<div class="add-btn-box">
			<router-link :to="{name:'accountAdd'}">
				<el-button type="primary">新增</el-button>
			</router-link>
		</div>
		<el-table
			:data="list.data"
			border
			align="center"
			v-loading="loading"
			>
			<el-table-column
				prop="role"
				label="角色名称"
				align="center"
				>
			</el-table-column>
			<el-table-column
				prop="account"
				align="center"
				label="登录账号">
			</el-table-column>
			<el-table-column
				label="操作" width="180" align="center">
				<template slot-scope="scope">
					<router-link :to="{name:'accountEdit',params:{id:scope.row.id}}">
						<el-button type="text">编辑</el-button>
					</router-link>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			background
			layout="prev, pager, next"
			:total="list.total" class="lt-pagination">
		</el-pagination>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:{data:[]},
				loading:true
			}
		},
		created(){
			this.$ajax({
				url:'/accountList'
			}).then((data) => {
				this.loading = false;
				this.list = data;
			});
		}
	}
</script>
<style lang="less" scoped>
	.add-btn-box{
		text-align:right;
		margin-bottom:20px;
	}
</style>
<template>
	<div class="lt-edit-box">
		<div class="lt-edit-form">
			<el-form ref="form" :model="form" label-width="180px" class="lt-table" :rules="rules">
				<div class="lt-form-box">
					<el-form-item label="角色名称" prop="role">
						<el-input v-model="form.role" placeholder="输入角色名称"></el-input>
					</el-form-item>
					<el-form-item label="登录密码" prop="password">
						<el-input type="password" v-model="form.password" placeholder="输入角色名称"></el-input>
					</el-form-item>
				</div>
				<div class="lt-form-box">
					<el-form-item label="登录账号" prop="account">
						<el-input v-model="form.account" placeholder="输入角色名称"></el-input>
					</el-form-item>
					<el-form-item label="状  态">
						<el-radio-group v-model="form.status">
							<el-radio :label="1">启用</el-radio>
							<el-radio :label="2">停用</el-radio>
						</el-radio-group>
					</el-form-item>
				</div>
			</el-form>
		</div>
		<btns @submit="formSubmit"/>
	</div>
</template>
<script>
	import btns from '@/components/form-btns';
	export default{
		data(){
			return{
				form:{
					status:1
				},
				article:{},
				rules:{ required: true, trigger: 'blur',message:'请输入'}
			}
		},
		activated: function() {
			let id = this.$route.params.id;
			//缓存数据
			if(id > 0){
				if (this.article.hasOwnProperty(id)) {
					this.form = this.article[id];
				}else{
					this.$ajax({
						url:'/accountList'
					}).then((data) => {
						for(var value of data.data){
							if(value['id'] == this.$route.params.id){
								this.article[id] = value;
								this.form = value;
							}
						}
					});
				}
			}
		},
		deactivated: function() {
			this.data = "";
		},
		components:{
			btns
		},
		methods:{
			formSubmit(){
				this.$refs.form.validate(valid => {
					if(valid){
						this.$message({
			              	type:'success',
			              	duration:1500,
			              	message:'提交成功',
			              	onClose:()=>{
			              		this.$router.push({name:'accountList'});
			              	}
			            });
					}
				});
			}
		}
	}
</script>
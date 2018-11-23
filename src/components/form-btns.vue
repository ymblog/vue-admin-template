<template>
	<div class="form-btns">
		<el-button type="primary" @click="$emit('submit')">提交</el-button>
		<el-button type="info" @click="$router.go(-1)">返回</el-button>
	</div>
</template>
<style lang="less" scoped>
	.form-btns{
		width:1200px;
		text-align:center;
		margin-top:60px;
	}
</style>
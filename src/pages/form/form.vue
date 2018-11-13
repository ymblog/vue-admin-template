<template>
	<div class="lt-content">
		<el-table
			:data="tableData"
			border
			align="center"
			>
			<el-table-column
				prop="date"
				label="日期"
				align="center"
				width="180">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				align="center"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				align="center"
				label="地址">
			</el-table-column>
			<el-table-column
				label="操作" width="180" align="center">
				<template slot-scope="scope">
					<el-button type="text" >查看</el-button>
					<el-button type="text">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			background
			layout="prev, pager, next"
			:total="1000" class="lt-pagination">
		</el-pagination>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		}
	}
</script>
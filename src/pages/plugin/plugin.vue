<template>
	<div class="lt-content page-plugin">
		<p>富文本使用wangeditor<a :href="editorLink" class="link" target="_blank">（前往该插件仓库）</a></p>
		<div ref="editor" class="editor-box"></div>
		<el-button type="primary" @click="getContent" style="margin-top:20px;">查看内容</el-button>
		<p>图表使用vue-echarts<a :href="echartLink" class="link" target="_blank">（前往该插件仓库）</a></p>
		<p>更多插件……<a :href="moreLink" class="link" target="_blank">（前往该插件仓库）</a></p>
	</div>
</template>
<script>
	import E from 'wangeditor';
	export default{
		name: 'richtext',
		data(){
			return{
				editorLink:'http://www.wangeditor.com/',
				echartLink:'https://github.com/ecomfe/vue-echarts',
				moreLink:'https://github.com/vuejs/awesome-vue',
				editorContent:''
			}
		},
		mounted() {
	        var editor = new E(this.$refs.editor)
	        editor.customConfig.onchange = (html) => {
	          	this.editorContent = html;
	        }
	        editor.create()
	    },
	    methods:{
	    	getContent(){
	    		alert(this.editorContent);
	    	}
	    }
	}
</script>
<style lang="less" scoped>
.page-plugin{
	width:800px;
	p{
		margin:20px 0;
	}
}
</style>
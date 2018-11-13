<template>
	<div class="lt-content">
		<p>富文本使用wangeditor<a :href="link" class="link" target="_blank">(wangeditor)</a></p>
		<div ref="editor" class="editor-box"></div>
		<el-button type="primary" @click="getContent">查看内容</el-button>
	</div>
</template>
<script>
	import E from 'wangeditor';
	export default{
		name: 'richtext',
		data(){
			return{
				link:'http://www.wangeditor.com/',
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
<style lang="less" scope>
.editor-box{
	width:800px;
	margin:10px 0;
}
</style>
<template>
	<div>
		<div @click="showMsg('info')">信息</div>
		<div @click="showMsg('success')">成功</div>
		<div @click="showMsg('warning')">警告</div>
		<div @click="showMsg('error')">错误</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import xMessage from '../src/index.js'
	Vue.prototype.$message = xMessage;
	
	export default {
		data() {
			return {
				visible: false
			}
		},
		methods: {
			showMsg (type) {
				this.$message[type]({
					content: '这是一条消息',
					duration: 3000
				})
			}
		}
	}
</script>

<style>
	.test-enter, .test-leave-to {
		opacity: 0;
		color: yellow;
	}
	.test-enter-to, .test-leave {
		opacity: .4;
		color: red;
	}
	.test-enter-active, .test-leave-active {
		transition: all, 2s ease;
	}
</style>

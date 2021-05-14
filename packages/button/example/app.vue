<template>
	<div>
		<y-button size="small" icon='iconchazhao' circle @click="handleClick">搜索</y-button>
		<y-button type="warning" icon='iconchazhao' @click="handleClick"></y-button>
		<y-button type="primary" disabled circle size="large" @click="handleClick">搜索</y-button>
		<y-button type="ghost" :loading="loading" @click="handleClick">搜索</y-button>
		<y-button type="text" @click="loading = !loading">toggle loading</y-button>
	</div>
	
</template>

<script>
	import yButton from '../src/index.js'
	
	export default {
		components: { yButton },
		data () {
			return {
				loading: true
			}
		},
		methods: {
			handleClick () {
				console.log('button clicked')
			}
		},
	}
</script>

<style>
</style>

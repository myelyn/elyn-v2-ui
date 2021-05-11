<template>
	<div>
		<x-button size="small" icon='iconchazhao' circle @click="handleClick">搜索</x-button>
		<x-button type="warning" icon='iconchazhao' @click="handleClick"></x-button>
		<x-button type="primary" disabled circle size="large" @click="handleClick">搜索</x-button>
		<x-button type="ghost" :loading="loading" @click="handleClick">搜索</x-button>
		<x-button type="text" @click="loading = !loading">toggle loading</x-button>
	</div>
	
</template>

<script>
	import xButton from '../src/index.js'
	
	export default {
		components: { xButton },
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

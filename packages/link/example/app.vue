<template>
	<div>
		<x-link @click="handleClick" type="primary" icon="iconjia" underline>link</x-link>
	</div>
	
</template>

<script>
	import xLink from '../src/index.js'
	
	export default {
		components: { xLink },
		methods: {
			handleClick () {
				console.log('a')
			}
		}
	}
</script>

<style>
</style>

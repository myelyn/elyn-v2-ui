<template>
	<div>
		<y-link @click="handleClick" type="primary" icon="iconjia" underline>link</y-link>
	</div>
	
</template>

<script>
	import yLink from '../src/index.js'
	
	export default {
		components: { yLink },
		methods: {
			handleClick () {
				console.log('a')
			}
		}
	}
</script>

<style>
</style>

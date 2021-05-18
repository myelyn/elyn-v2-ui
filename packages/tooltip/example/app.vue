<template>
	<div class="wrapper">
		<div v-tooltip.top="'tooltip内容'">上方</div>
		<div v-tooltip.bottom="'tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容'">下方</div>
		<div v-tooltip.right="'tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容'">右边</div>
		<div v-tooltip.right.start="'tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容tooltip内容'">右上</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { yTooltip } from '../src/index.js'
	
	Vue.use(yTooltip)
</script>

<style>
	.wrapper {
		margin-top: 100px;
		text-align: center;
	}
	.wrapper div {
		display: inline-block;
		margin-right: 30px;
	}
</style>

<template>
	<div style="margin-top: 150px; text-align: center;">
		<y-poptip placement="right" content="contentaaa">
			<y-button slot="reference">click触发</y-button>
		</y-poptip>
		<y-poptip placement="top" trigger="hover" :width="150">
			<div>上面上面上面</div>
			<y-button slot="reference">hover触发</y-button>
		</y-poptip>
		<y-poptip placement="bottom" :visibleArrow="false" content="contentccc">
			<y-button slot="reference">没有箭头</y-button>
		</y-poptip>
		<y-poptip placement="right-start" content="contentddd">
			<y-button slot="reference">右上</y-button>
		</y-poptip>
	</div>
</template>

<script>
	import yPoptip from '../src/index.js'
	import yButton from '../../button/src/index.js'
	
	export default {
		components: { yPoptip, yButton },
		data () {
			return {
				
			}
		},
		mounted() {
			
		},
	}
</script>

<style>
	.elyn-btn {
		margin-right: 20px;
	}
</style>

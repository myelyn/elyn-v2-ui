<template>
	<div
		ref="popper"
		v-show="visible"
		class="elyn-ui-tooltip"
	>
		<div class="elyn-ui-tooltip-content" :style="contentStyles">{{ text }}</div>
		<div class="elyn-base-arrow elyn-theme-dark" x-arrow></div>
	</div>
</template>

<script>
	import { on, off, Popper } from '../../../../src/util/index'
	
	export default {
		name: 'yTooltip',
		mixins: [Popper],
		data () {
			return {
				
			}
		},
		props: {
			text: String,
			maxWidth: String
		},
		computed: {
			contentStyles () {
				return {
					maxWidth: this.maxWidth
				}
			}
		},
		methods: {
			handleMouseenter () {
				this.visible = true
			},
			handleMouseleave () {
				this.visible = false
			}
		},
		created () {
			const reference = this.reference
		  on(reference, 'mouseenter', this.handleMouseenter)
			on(reference, 'mouseleave', this.handleMouseleave)
		},
		beforeDestroy () {
			const reference = this.reference
			off(reference, 'mouseenter', this.handleMouseenter)
			off(reference, 'mouseleave', this.handleMouseleave)
		}
	}
</script>

<style>
</style>

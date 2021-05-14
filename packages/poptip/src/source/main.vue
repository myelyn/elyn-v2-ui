<template>
	<span>
		<div ref="popper" class="elyn-poptip" v-show="visible">
			<div class="elyn-base-arrow" x-arrow ref="arrow" v-if="visibleArrow"></div>
			<div class="elyn-poptip__content" :style="getStyle">
				<slot>{{ content }}</slot>
			</div>
		</div>
		<slot name="reference"></slot>
	</span>
</template>

<script>
	
	import { on, off, Popper } from '../../../../src/util/index'
	
	export default {
		name: 'yPoptip',
		mixins: [Popper],
		data () {
			return {
				visible: false,
				popperInstance: null
			}
		},
		computed: {
			getStyle () {
				if (!this.width) {
					return ''
				}
				return {
					width: this.width.toString().includes('px') ? this.width : this.width + 'px'
				}
			}
		},
		props: {
			trigger: {
				type: String,
				default: 'click',
				validator: v => ['click', 'hover'].includes(v)
			},
			placement: {
				type: String,
				default: 'top',
				validator: v => [
          'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end',
          'right', 'right-start', 'right-end'].includes(v)
			},
			content: {
				type: String,
				default: 'content'
			},
			visibleArrow: {
				type: Boolean,
				default: true
			},
			width: [String, Number]
		},
		
		methods: {
			doToggle (e) {
				e.stopPropagation()
				this.visible = !this.visible
			},
			handleDocumentClick (e) {
				this.visible = false
			},
			doShow () {
				this.visible = true
			},
			doClose () {
				this.visible = false
			},
			handleMouseEnter () {
				this.timer && clearTimeout(this.timer)
				this.doShow()
			},
			handleMouseLeave () {
				this.timer && clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					this.doClose()
				}, 100)
			},
			getReference () {
				let reference = this.referenceEl = this.reference || this.$refs.reference
				if (!reference && this.$slots.reference && this.$slots.reference[0]) {
					reference = this.referenceEl = this.$slots.reference[0].elm
				}
				return reference
			}
		},
		mounted () { 
			const reference = this.getReference()
			const popper = this.popperEl = this.$refs.popper
			if (this.trigger === 'click') {
				on(reference, 'click', this.doToggle)
				on(document, 'click', this.handleDocumentClick)
			} else if (this.trigger === 'hover') {
				on(reference, 'mouseenter', this.handleMouseEnter)
				on(popper, 'mouseenter', this.handleMouseEnter)
				on(reference, 'mouseleave', this.handleMouseLeave)
				on(popper, 'mouseleave', this.handleMouseLeave)
			}
		},
		beforeDestroy () {
			const reference = this.referenceEl
			const popper = this.popperEl
		
			off(reference, 'click', this.doToggle)
			off(reference, 'click', this.handleClick)
			off(reference, 'mouseleave', this.handleMouseLeave)
			off(reference, 'mouseenter', this.handleMouseEnter)
	
			if (popper) {
				off(popper, 'mouseenter', this.handleMouseEnter)
				off(popper, 'mouseleave', this.handleMouseLeave)
			}
			off(document, 'click', this.handleDocumentClick)
			this.timer && clearTimeout(this.timer)
		}
	}
</script>

<style>
</style>

import PopperJS from 'popper.js'
import merge from 'deepmerge'

export default {
	data () {
		return {
			visible: false,
			popperInstance: null,
			referenceEl: null,
			popperEl: null
		}
	},
	props: {
		placement: {
			type: String,
			default: 'top'
		},
		reference: HTMLElement,
		appendToBody: {
			type: Boolean,
			default: false
		},
		popperOptions: {
			type: Object,
			default: () => ({})
		}
	},
	watch: {
		visible (v) {
			v ? this.updateElementHandler() : this.hideElementHandler()
		}
	},
	methods: {
		bindPopper () {
			let referenceEl = this.referenceEl || this.reference || this.$refs.reference
			
			let popperEl = this.popperEl || this.$refs.popper

			if (!referenceEl || !popperEl) return

			const options = {
				placement: this.placement
			}
			const mergedOptions = merge(options, this.popperOptions)
			this.popperInstance = new PopperJS(referenceEl, popperEl, mergedOptions)
		},
		updateElementHandler () {
			!this.popperInstance && this.bindPopper()
			this.popperInstance.enableEventListeners()
			this.$nextTick(() => {
				this.popperInstance.scheduleUpdate()
			})
		},
		hideElementHandler () {
			if (this.popperInstance) {
				this.popperInstance.disableEventListeners()
			}
		},
	}
}
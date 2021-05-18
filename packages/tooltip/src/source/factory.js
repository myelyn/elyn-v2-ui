import Vue from 'vue'
import Tooltip from './tooltip.vue'
var tooltipConstructor = Vue.extend(Tooltip)
const factory = function (options = {}) {
	const { el, text, placement, maxWidth } = options
	const instance = new tooltipConstructor({
		propsData: {
			reference: el,
			text,
			placement,
			maxWidth
		}
	}).$mount()
	document.body.appendChild(instance.$el)
}

export default factory
import yTooltip from './source/tooltip.vue'
import directive from './source/directive'

yTooltip.install = (Vue, options = {}) => {
	const { directiveName = 'tooltip' } = options
	Vue.directive(directiveName, directive)
}

export { yTooltip }
import yPoptip from './source/main.vue'

yPoptip.install = function(Vue) {
	Vue.component(yPoptip.name, yPoptip)
}

export default yPoptip
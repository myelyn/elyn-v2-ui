import xButton from './source/main.vue'

xButton.install = function(Vue) {
	Vue.component(xButton.name, xButton)
}

export default xButton
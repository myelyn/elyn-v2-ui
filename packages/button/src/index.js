import yButton from './source/main.vue'

yButton.install = function(Vue) {
	Vue.component(yButton.name, yButton)
}

export { yButton }
import yLink from './source/main.vue'

yLink.install = function(Vue) {
	Vue.component(yLink.name, yLink)
}

export { yLink }
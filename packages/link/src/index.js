import xLink from './source/main.vue'

xLink.install = function(Vue) {
	Vue.component(xLink.name, xLink)
}

export default xLink
import xLink from '../packages/link/src';
import xButton from '../packages/button/src';
import xMessage from '../packages/message/src';


import './style/index.scss'

const components = {
	xLink,
	xButton
}

const install = function(Vue, opt = {}) {
	Object.values(components).forEach(component => {
		Vue.component(component.name, component)
	})
	
	Vue.$message = Vue.prototype.$message = xMessage

}


if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
  install,
  xLink
}
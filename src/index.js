import yLink from '../packages/link/src';
import yButton from '../packages/button/src';
import yMessage from '../packages/message/src';


import './style/index.scss'

const components = {
	yLink,
	yButton
}

const install = function(Vue, opt = {}) {
	Object.values(components).forEach(component => {
		Vue.component(component.name, component)
	})
	
	Vue.$message = Vue.prototype.$message = yMessage

}


if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
  install,
  yLink,
	yButton,
	yMessage
}
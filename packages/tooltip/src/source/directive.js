import factory from './factory.js'

const PLACEMENT = ['top', 'bottom', 'left', 'right']
const POSITION = ['start', 'end']

export default {
	bind (el, binding) {
		const { value, modifiers } = binding
		const placementModifiers = PLACEMENT.filter(placement => modifiers[placement])
		const positionModifiers = POSITION.filter(position => modifiers[position])
		let placement = placementModifiers.length ? placementModifiers[0] : 'top'
		placement += positionModifiers.length ? `-${positionModifiers[0]}` : ''
		console.log(placement)
		factory({
			el,
			text: value,
			placement,
			maxWidth: '350px'
		})
	}
}
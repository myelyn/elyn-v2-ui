<template>
	<button :class="[
		'elyn-btn',
		`elyn-btn__${type}`,
		{
			[`elyn-btn__${size}`]: !!size,
			'elyn-btn__disabled': disabled || loading,
			'elyn-btn__circle': circle
		}
	]"
	:disabled="disabled || loading"
	type="button"
	@click="handleClick">
		<i v-if="loading" class="iconfont iconloading icon-loading-spin"></i>
		<i v-if="icon" :class="['iconfont', icon]"></i>
		<slot>button</slot>
	</button>
</template>

<script>
	export default {
		name: 'yButton',
		data () {
			return {}
		},
		props: {
			type: {
				type: String,
				default: 'default',
				validator (v) {
					return ['primary', 'ghost', 'text', 'success', 'warning', 'error', 'default'].includes(v)
				}
			},
			size: {
				type: String,
				validator (v) {
					return ['small', 'large'].includes(v)
				}
			},
			disabled: Boolean,
			circle: Boolean,
			icon: String,
			loading: Boolean
		},
		methods: {
			handleClick (e) {
				this.$emit('click', e)
			}
		}
	}
</script>

<style>
</style>

<template>
	<a 
		:class="[
			'elyn-link', 
			`elyn-link__${type}`,
			disabled && `elyn-link__disabled`,
			underline && `elyn-link__underline`
		]" 
		:href="disabled ? null : href" 
		@click="handleClick"
	>
		<i v-if="icon" :class="['iconfont', icon]"></i>
		<span v-if="$slots.default" :class="`elyn-link__inner`">
			<slot></slot>
		</span>
	</a>
</template>

<script>
	export default {
		name: 'yLink',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			href: String,
			disabled: Boolean,
			underline: Boolean,
			icon: String 
		},
		methods: {
			handleClick (e) {
				if (!this.disabled) {
					this.$emit('click', e)
				}
			}
		}
	}
</script>

<style>
	
</style>
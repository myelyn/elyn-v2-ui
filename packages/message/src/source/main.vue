<template>
  <transition name="elyn-message" @after-leave="handleAfterLeave">
		<div 
			v-show="visible"
			:class="[
				'elyn-message',
				type ? `elyn-message__${type}` : ''
			]" >
		  <p>
				<i :class="[
						'iconfont',
						(type==='info' || type==='warning') && 'iconjinggao-yuan-s' ,
						type==='success' && 'icongou-yuan-s',
						type==='error' && 'iconcha-yuan-s'
				]"></i>
				{{content}} 
			</p>
		</div>
	</transition>
</template>
<script>
export default {
  name: "yMessage",
  data () {
		return {
			type: '',
			content: '',
			duration: 3000,
			visible: false
		}
	},
	methods: {
		handleAfterLeave () {
			this.$destroy();
			this.$el.parentNode.removeChild(this.$el);
		}
	},
  mounted() {
    setTimeout(() => {
			this.visible = false
		}, this.duration);
  },
};
</script>
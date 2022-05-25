<template>
	<view>
		
		<view>这里引用自定义组件-生命周期</view>
	</view>
	
</template>

<script>
	
	export default {
		data() {
			return {
				name: "sm2"
			};
		},
		props: {
			color: {
				type: String,
				default: '#000'
			},
		},
		mkloginbeforeCreate() {
			console.log('beforeCreate方法');
		},
		created() {
			console.log('created方法');
		},
		beforeMount() {
			console.log('beforeMount方法');
		},
		mounted() {
			console.log('mounted方法');
		},
		beforeDestroy() {
			console.log('beforeDestroy方法')
		},
		destroyed() {
			console.log('destroyed方法')
		},
		methods: {
			onSubmit(e) {
				var formdata = e.detail.value;
				console.log('onSubmit方法：' + JSON.stringify(formdata));
				this.$emit("login", formdata);
			},
			onReset() {
				console.log('subsign页面---onReset方法')
			}
		}
	}
</script>

<style>

</style>

<template>
	<view>
		<view>
		   <button type="default" @click="goto('add')">添加用户</button>
		   <button type="default" @click="goto('list')">用户列表</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title:'hello'
			}
		},
		onLoad() {

		},
		methods: {
			goto(e){
				uni.navigateTo({
					url:"../"+e+"/"+e
				})
			}

		}
	}
</script>

<style>
	page{
		margin: 10rpx;
	}
	button{
		margin-top: 30rpx;
	}
	.title{
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

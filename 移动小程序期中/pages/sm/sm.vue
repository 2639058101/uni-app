<template>
	<view >


		<view class="nrbox" style="text-align: center;display: flex;justify-content: center;padding: 20rpx;">
			<view class="nr-title" style="background-color: #007AFF;">显示所在平台</view>
		</view>

		<subSign></subSign>
	</view>
	
</template>

<script>
	import subsign from "pages/sm/sm1"

	export default {
		components: {
			subSign: subsign
		},
		data() {
			return {

			}
		},
		onLoad() {
			console.log('onLoad')
		},
		onShow() {
			console.log('onShow')
		},
		onReady() {
			console.log('onReady')
		},
		onHide() {
			console.log('onHide')
		},
		onUnload() {
			console.log('onUnload')
		},
		onPullDownRefresh() {
			console.log('onPullDownRefresh')
			uni.stopPullDownRefresh();
		},
		onReachBottom() {
			console.log('onReachBottom')
		},
		methods: {
			onLogin(e) {
				console.log('signsub页面---onLogin方法：' + JSON.stringify(e))
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.nrbox {
		padding: 5px;
	}

	.nr-title {
		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 35rpx;
		height: 45px;
		width: 100%;
		color: white;
	}
</style>

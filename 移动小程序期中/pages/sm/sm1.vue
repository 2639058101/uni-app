<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<view class="a">
			<view>当前在APP</view>
		</view>
		<button>Android</button>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="a">
			<view>当前在H5平台</view>
		</view>
		<button>H5</button>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="a">
			<view>当前在微信小程序</view>
		</view>
		<button>Wechat</button>
		<!-- #endif -->

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	/* #ifdef APP-PLUS */
	.a {
		padding: 40rpx;
		text-align: center;
		background-color: lightblue;
	}

	/* #endif */
	/* #ifdef H5 */
	.a {
		padding: 40rpx;
		text-align: center;
		background-color: lightblue;
	}

	/* #endif */
	/* #ifdef MP-WEIXIN */
	.a {
		padding: 40rpx;
		text-align: center;
		background-color: lightblue;
	}

	/* #endif */
</style>

</style>

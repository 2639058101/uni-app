<template>
	<view class="content">
		<view class="message">
			<view class="line">
				<text>用户名：</text>
				<input placeholder="请输入用户名" v-model="account" />
			</view>
			<view class="line">
				<text>密码：</text>
				<input placeholder="请输入密码" v-model="pwd" password="true" />
			</view>
			<view class="line">
				<text>确认密码：</text>
				<input placeholder="再次输入密码" v-model="pwdword" password="true" />
			</view>
		</view>
		<view class="bottom">
			<text @click="gotoNext">下一页</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				pwd: '',
				pwdword: ''
			}
		},
		methods: {
			gotoNext() {
				if (this.account.trim().length > 0) {
					if (this.pwd.trim().length > 4 && this.pwd == this.pwdword) {
						uni.navigateTo({
							url: "../zczj/registerinfo?account=" + this.account + '&pwd=' + this.pwd
						})
					} else {
						console.error('请重新输入pwdword')
					}
				} else {
					console.error('请重新输入account')
				}

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		height: 100vh;

	}

	.message {
		margin-top: 100rpx;
		flex: 7;
	}

	.line {
		display: flex;
		flex-direction: row;
		padding: 40rpx;
		background-color: #F1F1F1;
	}

	text {
		flex: 1;
		text-align: end;
	}

	input {
		flex: 3;
		padding-left: 20rpx;
	}

	.bottom {
		text-align: end;
		padding-right: 100rpx;
		font-size: 45rpx;
		flex: 3;
		font-weight: bold;
	}
</style>

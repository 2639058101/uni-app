<template>
	<view class="content">
		<view class="message">
			<view class="line">
				<text>用户名：</text>
				<input placeholder="请输入用户名" v-model="account" />
			</view>
			<view class="line">
				<text>密码：</text>
				<input placeholder="请输入密码" v-model="currentPwd" password="true" />
			</view>
		</view>
		<view class="bottom">
			<button type="primary" form-type="submit" @click="login">登录</button>
			<button type="warn" form-type="reset">取消</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account:'',
				pwd:'',
				currentPwd:''
				
			}
		},
		onLoad(opt) {
			this.account=opt.account;
			this.pwd=opt.pwd;
			console.log("Loing--onLoad:"+this.account+" "+ this.pwd)
		},
		methods: {
			login(){
				if(this.pwd == this.currentPwd){
					uni.reLaunch({
						url:"../index/index?account="+this.account
					})
				}else{
					console.error('请重新输入pwdword')
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
	
		font-size: 45rpx;
		flex: 3;
		font-weight: bold;
	}
	button {
		margin: 30rpx;
	}
</style>

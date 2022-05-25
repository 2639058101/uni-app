<template>
	<view>
		<form @submit="formSubmit" @reset="formReset">
			<view class="content">
				<view class="message">
					<view class="line">
						姓名 <input placeholder="请输入姓名" name="name"/>
					</view>
					<view class="line">
						性别
						<radio-group name="sex">
							<label>
								<radio value="men">男</radio>
							</label>
							<label>
								<radio value="women">女</radio>
							</label>
						</radio-group>
					</view>
					<view class="line">
						爱好 <checkbox-group name="hobby">
							<checkbox value="book">读书</checkbox>
							<checkbox value="game">玩游戏</checkbox>
							<checkbox value="sleep">睡觉</checkbox>
						</checkbox-group>
					</view>
					<view class="line">
						年龄
						<slider value="30" show-value="true" name="age"></slider>
					</view>
				</view>

				<view class="bottom">
					<button type="primary" form-type="submit">注册</button>
					<button form-type="reset">取消</button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account:'',
				pwd:''
			}
		},
		onLoad(opt) {
			this.account=opt.account;
			this.pwd=opt.pwd;
			console.log("onLoad:"+this.account+" "+ this.pwd)
		},
		methods: {
			formSubmit(msg) {
				console.log("----" + JSON.stringify(msg))
				var formDate = msg.detail.value;
				console.log("---"+JSON.stringify(formDate));
				let that=this;
				 uni.showModal({
				 	title:'注册信息',
					content:JSON.stringify(formDate),
					showCancel:true,
					success() {
						console.log("success");
						uni.redirectTo({
							url:"../zczj/login?account=" + that.account + '&pwd=' + that.pwd
						})
					}
				 })
			},
			formReset() {
				console.log("---")
				 
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}

	.message {
		margin-top: 50rpx;
		padding-left: 50rpx;
	}

	.line {
		padding: 30rpx;
	}

	checkbox-group {
		display: flex;
		flex-direction: row;
	}

	button {
		margin: 30rpx;
	}

	checkbox {
		flex: 1;
	}
</style>

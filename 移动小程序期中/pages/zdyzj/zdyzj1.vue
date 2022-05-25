<template>
	<view class="login-box">
		<form @submit="onLogin" @reset="onCancel">
			<view class="layout-box" style="justify-content:center;" @click="onClick">
				<slot>标题</slot>
			</view>
			<view class="layout-box":style="{color:color}" @click="onClick">
				<text><slot name="account">账号</slot></text><text>:</text>
				<input class="mkinput" value="123456" name="account" />
			</view>
			<view class="layout-box":style="{color:color}" @click="onClick">
				<text>密码</text><text>:</text>
				<input class="mkinput" value="123456" password="true" name="password" />
			</view>
			
			<view class="layout-box">
				<button class="btn-box" type="default" form-type="reset">
					<slot name="cancel">Reset</slot>
				</button>
				<button class="btn-box" type="primary" form-type="submit">
					<slot name="login">Login</slot>
				</button>
			</view>
			<view class="layout-box" style="margin-top: 100rpx;">
				<button class="btn-box" type="warn" @click="onRegister">
					<slot name="register">Register</slot>
				</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		name:"mkbtn",
		data(){
			return{
				
			};
		},
		props:{
			color:{
			type:String,
			default:'#000'
			}
	},
	methods:{
		onClick(){
			console.log('我是mkbtn，我被点击了');
		},
		onCancel:function(e){
			console.log('取消登录,清空数据');
		},
		onLogin(e){
			var formdata = e.detail.value;
			console.log('登录信息验证:'+JSON.stringify(formdata));
			this.$emit("login",formdata);
		},
		onRegister(){
			this.$emit("register");
		}
	}
}
</script>

<style>
	.login-box{
		align-items: center;
		border: 1px red solid;
		margin: 20rpx;
		padding-left:50rpx;
		padding-right: 50rpx;
	}
	.layout-box{
		flex:1;
		margin: 20rpx;
	}
	.mkinput{
		text-align: left;
		padding:10rpx;
		background-color: #e1e1e1;
	}
</style>
<template>
	<view>
		<testbtn color="black" @login="onLogin" @register="onRegister">
			<template v-slot:account>账户</template>
			<template v-slot:cancel>取消</template>
			<text style="font-size: 40rpx;">我是一个自定义登录框</text>
			<template v-slot:login>登录</template>
			<template v-slot:register>注册</template>
		</testbtn>
	</view>
</template>

<script>
	import btn from 'pages/zdyzj/zdyzj1'
	export default{
		components:{
			testbtn:btn
		},
		data(){
			return{
				
			}
		},
		methods:{
			onLogin(message){
				console.log('我是页面,登陆信息为:' + JSON.stringify(message));
			},
			onRegister(){
				console.log('我是页面，我要注册！！');
			}
		}
	}
</script>

<style>
</style>

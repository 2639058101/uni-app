<template>
	<view>
		<view class="form">
			<view class="content">
				<view class="forget-bg">
					<view class="forget-card">
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="用户名" v-model="form.username" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="密码" v-model="form.password" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="昵称"v-model="form.nickname" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="number" placeholder="手机号" v-model="form.mobile" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="Email" v-model="form.email" />
						</view>
					</view>
				</view>
				<view class="forget-bth">
					<button class="landing" type="primary" @click="submit">添加</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					username:"",
					password:"",
					nickname:"",
					mobile:"",
					email:""
				}
			}
		},
		methods: {
			submit(){
				console.log("------执行添加操作------");
			    uniCloud.callFunction({
			    	name:'addUser',
					data:this.form,
					success: (e) => {
						console.log(e.result);
						uni.showToast({
							title:'添加成功',
							duration:2000
						});
						setTimeout(function(){
							uni.navigateTo({
								url:'../list/list'
							})
						},1000)	
					},
			    })
			}
		}
	}
</script>

<style>

</style>

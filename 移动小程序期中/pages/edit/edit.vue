<template>
	<view>
		<view class="form">
			<view class="content">
				<view class="forget-bg">
					<view class="forget-card">
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="用户名" v-model="username" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="密码" v-model="password" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="昵称"v-model="nickname" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="number" placeholder="手机号" v-model="mobile" />
						</view>
						<view class="forget-input forget-margin-b">
							<input type="text" placeholder="Email" v-model="email" />
						</view>
					</view>	
				</view>	
				<view class="forget-bth">
					<button class="landing" type="primary" @click="editUser">编辑保存</button>
				</view>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				username:"",
				password:"",
				nickname:"",
				mobile:"",
				email:""	
					
			}
		},
		onLoad(option) {
			console.log('编辑ID:'+option.id)
			this.getDataById(option.id);
		},
		methods: {
			getDataById(_id){
				uniCloud.callFunction({
					name:"getUserByld",
					data:{
						"id":_id
					},
					success: (e) => {
						console.log(e.result);
						this.username=e.result.data[0].username;
						this.password=e.result.data[0].password;
						this.email=e.result.data[0].email;
						this.mobile=e.result.data[0].mobile;
						this.nickname=e.result.data[0].nickname;
						this.id=e.result.data[0]._id;
						
					}
				})
			},
			editUser(){
				console.log("------执行编辑保存操作------")
				uniCloud.callFunction({
					name:"editUser",
					data:{
						"id":this.id,
						"username":this.username,
						"password":this.password,
						"email":this.email,
						"mobile":this.mobile,
						"nickname":this.nickname
					},
					success: (e) => {
						uni.showToast({
							title:'编辑成功',
							duration:2000
						});
						setTimeout(function(){
							uni.navigateTo({
								url:'../list/list'
							})
						},1000)	
					}
				})
				
			}
			
		}
	}
</script>

<style>

</style>

<template>
	<view>
		<view class="list" v-for="(item,i) in list" :key="i">
			<view>
				<view>序号:{{i+1}}</view>
				<view>用户名:{{item.username}}</view>
				<view>手机号:{{item.mobile}}</view>
				<view>Email:{{item.email}}</view>
			</view>
			<view class="btn">
			<button @click="remove(item._id)">删除</button>
			<button @click="gotoDetail(item._id)">编辑</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad(){
			this.getData();
		},
		methods: {
			getData(){
				console.log("------执行查询操作------");
				uniCloud.callFunction({
					name:"getUser",
					success: (e) => {
						console.log(e.result);
						this.list=e.result.data;
					}
				})
			},
			remove(_id){
				console.log("------执行删除操作------");
				uniCloud.callFunction({
					name:"removeUser",
					data:{"id":_id},
					success: (e) => {
						console.log(e.result);
						uni.showToast({
							title:'删除成功',
							duration:2000
						});
						this.getData();
					}
				})
			},
			gotoDetail(_id){
				console.log("------执行编辑操作------");
				uni.navigateTo({
					url:"../edit/edit?id="+_id
				})
			}
		}
	}
</script>

<style>
     page{
		 margin: 30rpx;
	 }
	 .list{
		 border-bottom: 1rpx solid #f1f1f1;
		 padding-bottom: 20rpx;
	 }
	 .btn{
		 display: flex;
	 }
</style>

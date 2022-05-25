<template>
	<view class="content">
		<view style="font-size: 50rpx; display: flex; justify-content: center;padding: 20rpx;">子组件A</view>
		<view class="c">
			父组件传进来的值:
			<view style="font-weight: bold;color: blue;">{{intent}}</view>
		</view>		
		<button class="b" type="primary" @click="sendData()">传值给compB组件</button>
	</view>
</template>

<script>
	export default {
		name:"comA",
		props:['intent'],
		data() {
			return {
				
			};
		},
		methods:{
			sendData(){
				console.warn("----CompA----sendData------->" + this.intent);
				uni.$emit('getIntent',this.intent);
			},
		}
	}
</script>

<style>
.c{
	text-align: center;
	display: flex;
	justify-content: center;
}
.b{
	margin: 20rpx;
}
</style>

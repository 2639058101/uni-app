<template>
	<view class="b-box" style="margin: 10rpx;">
		<view class="c">
			CompA组件传进来的值:
			<text class="text-box">{{result}}</text>
		</view>
		回传值:
		<input type="text" v-model="callbackValue" style="color: blue;" />
		<button style="display: flex;justify-content: center;" @click="sendOutside()" size="mini">回传</button>
	</view>
</template>

<script>
	export default {
		name:"comB",
		// props:['result'],
		data() {
			return {
				result:'',
				callbackValue:''
			};
		},
		methods:{
			sendOutside(){
				console.warn("----CompB----sendOutside------>" + this.callbackValue);
				this.$emit('callBackFun',this.callbackValue);
			},
			
		},
		created(){
				uni.$on('getIntent',(msg)=>{
					console.error("----CompB----getIntent----->" + msg);
					this.result = msg;
				});
		},
	}
</script>

<style>
.c{
	text-align: center;
	display: flex;
	justify-content: center;
}
</style>

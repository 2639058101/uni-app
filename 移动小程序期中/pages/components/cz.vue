<template>
	<view style="padding-top: 120rpx;">
		<view style="">
			<view class="t1">
				输入值:
				<input type="text" v-model="title" style="color: blue;" />
			</view>
			<view class="t1">
				回传值:
				<input type="text" :value="callBackValue" style="color: green;"/>
			</view>
		</view>
		
		<comA :intent="title"></comA>
		<comB @callBackFun="callBack"></comB>
	</view>
</template>

<script>
	import comA from '../components/comA.vue'
	import comB from '../components/comB.vue'
	export default {
		// props:['callBackValue'],
		components:{
			comA,
			comB
		},
		data() {
			return {
				title:3,
				callBackValue:'',
			}
		},
		methods: {
			callBack(msg){
				console.warn("---index---callBack-->" + msg);
				this.callBackValue = msg;
			},
		}
	}
</script>

<style>
.t1{
	display: flex;
	justify-content: center;
	text-align: center;
	margin: 40rpx;
	background-color: #c3c3c3;
}
</style>

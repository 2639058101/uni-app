<template>
	<view class="content">
		<view v-for="item in arr" style="color: #007AFF;">{{item}}</view>
		<view v-for="(item,index) in 4" style="color: #4CD964;">
			<view class="'list-' + index%2">{{index%2}}</view>
		</view>
		<view v-for="(value,name,index) in object">
			{{index}}.{{name}}:{{value}}
		</view>
		<view v-for="item in arr" :key="item.id">
			<view style="color: #0000ff;">{{item.id}}:{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:[
					{id:1,name:'uni-app'},
					{id:2,name:'Html'}
				],
				object:{
					title:'12345678900',
					author:'jane Doe',
					publishedAt: '2020-4-10'
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

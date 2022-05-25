<template>
	<view>
		<image :src="item" v-for="item in imgArrayPath" @click="previewImage(item)"></image>
		<button type="warn" @click="chooseImage()">选择图片</button>
		<button type="primary" @click="chooseImageToPreview()">图片预览</button>
		<button type="default"  @click="getImageInfo()">获取图片信息</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArrayPath: []
			}
		},
		methods: {
			chooseImage() {
				uni.chooseImage({
					count: 6,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: res => {
						this.imgArrayPath = res.tempFilePaths;
						console.log("tempFilePaths:" + JSON.stringify(this.imgArrayPath));
					}
				});
			},
			previewImage(current) {
				uni.previewImage({
					current,
					urls: this.imgArrayPath,
					loop: true,
					success() {
						uni.getImageInfo({
							src: current,
							success: function(image) {
								console.log("----Image Info(" + image.width + "," + image.height +")");
							}
						});
					}
				});
			},
			chooseImageToPreview(){
				uni.chooseImage({
					count:6,
					sizeType:['original','compressed'],
					sourceType:['album'],
					success: res => {
						this.imgArrayPath = res.tempFilePaths;
						uni.previewImage({
							urls:res.tempFilePaths,
							longPressActions:{
								itemList:['发送给朋友','保存图片','收藏'],
								success:function(data){
									console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1)+ '张图片');
								}
							}
						});
					}
				});
			},
			getImageInfo(){
				uni.chooseImage({
					count:1,
					sourceType:['album'],
					success:function(res){
						uni.getImageInfo({
							src: res.tempFilePaths[0],
							success: function(image) {
								console.log("----Image Info(" + image.width + "," + image.height +")");
							}
						});
					}
				});
			},
		},
		onPullDownRefresh() {
			this.imgArrayPath=null;
			console.log('onPullDownRefresh()==>');
			setTimeout(() => {
				console.log('onPullDownRefresh()==>刷新完成');
				uni.stopPullDownRefresh();
				
				//location.reload();
			}, 1000);
		}
	}
</script>

<style>

</style>

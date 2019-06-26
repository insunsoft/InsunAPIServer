<template name="news">
	
	<view>
		
		<scroll-view scroll-y class="page">
			<!-- #ifdef APP-PLUS -->  
								<view class="cu-bar search bg-green">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg"></view>
						<view class="search-form round">
							<text class="cuIcon-search"></text>
							<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
						</view>
						<view class="action">
							<text>广州</text>
							<text class="cuIcon-triangledownfill"></text>
						</view>
					</view>
			 
			<!-- #endif --> 
		
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "news",
		data() {
			return {
			
			};
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>

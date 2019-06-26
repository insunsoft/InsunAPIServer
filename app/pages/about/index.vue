<template name="about">
	<view>
		<scroll-view scroll-y class="page">

			<view class="bg-img bg-mask flex align-center" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height: 414upx;">
				<view class="padding-xl text-white">
					<view class="padding-xs text-xxl text-bold">钢铁之翼</view>
					<view class="padding-xs text-lg">Only the guilty need fear me.</view>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top" >
				<view class="cu-item arrow" url="../pages/login/login">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">积分管理</text>
					</view>
				</view>
				<view class="cu-item arrow" >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">我的钱包</text>
					</view>
				</view>
				<view class="cu-item arrow" >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">收藏</text>
					</view>
				</view>				
				<view class="cu-item arrow" >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">地址管理</text>
					</view>
				</view>					
				<view class="cu-item arrow" >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">收藏历史</text>
					</view>
				</view>	
				<view class="cu-item arrow" >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">赞赏支持</text>
					</view> 
				</view>		
				<view class="cu-item arrow" >
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">意见反馈</text>
					</view>
				</view>	
				<view class="cu-item arrow" >
					
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">关于</text>
					</view>
				</view>																	
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	name: 'about',
	data() {
		return {
			menuBorder: false,
			menuArrow: false,
			menuCard: false
		};
	},
	onShow() {
		console.log('success');
	}
};
</script>

<style>
.page {
	height: 100vh;
}
</style>

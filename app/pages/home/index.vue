<template name="home">
	<view>
		<scroll-view scroll-y class="page">
<!-- #ifdef APP-PLUS -->  
			<view class="cu-bar bg-cyan search">
				<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
				<view class="content">
					ColorUI
				</view>
				<view class="action">
					<text class="cuIcon-more"></text>
				</view>
			</view> 
 
<!-- #endif --> 

<!-- #ifdef MP -->  
<cu-custom bgColor="bg-gradual-blue" :isBack="true">
	<block slot="backText">返回</block>
	<block slot="content">导航栏</block>
</cu-custom>
 
<!-- #endif --> 




			<!-- 轮播图 -->
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
			<!-- 九宫格 -->
			<view class="cu-list grid" :class="['col-' + gridCol, gridBorder ? '' : 'no-border']">
				<view class="cu-item" v-for="(item, index) in cuIconList" :key="index" v-if="index < gridCol * 2">
					<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge != 0">
							<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
						</view>
					</view>
					<text>{{ item.name }}</text>
				</view>
			</view>

			<!-- 新闻导读 -->
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-titles text-orange "></text>
					新闻导读
				</view>
			</view>
			<!-- 新闻列表 -->
			<view class="cu-card article" :class="isCard ? 'no-card' : ''">
				<view class="cu-item shadow">
					<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content">折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
							<view>
								<view class="cu-tag bg-red light sm round">正义天使</view>
								<view class="cu-tag bg-green light sm round">史诗</view>
							</view>
						</view>
					</view>
				</view>
			</view>
						<view class="cu-card article" :class="isCard ? 'no-card' : ''">
				<view class="cu-item shadow">
					<view class="title"><view class="text-cut">震区90小时含泪记录：他们用双手刨出生命通道！废墟上的这一幕，看哭了……_荔枝网新闻</view></view>
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg" mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content">目前，四川宜宾6.0级地震的抢险救灾工作，已经进入第4天。在宜宾长宁、珙县，各救援部队和社会力量以及灾区群众，持续展开</view>
							<view>
								<view class="cu-tag bg-red light sm round">正义天使</view>
								<view class="cu-tag bg-green light sm round">史诗</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: '公文签收'
				},
				{
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '通知签收'
				},
				{
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '消息签收'
				},
				{
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '文档签收'
				},
				{
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '教学中心'
				},
				{
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '管理中心'
				},
				{
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '休闲中心'
				},
				{
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '用户中心'
				}
			],
			gridCol: 4,
			gridBorder: false,
			cardCur: 0,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			],
			dotStyle: true,
			towerStart: 0,
			direction: '',
			isCard: true
		};
	},
	onLoad() {
		this.TowerSwiper('swiperList');
		// 初始化towerSwiper 传已有的数组名即可
	},
	onShow() {
		console.log('success');
	},
	methods: {
		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		}
	}
};
</script>

<style>
.page {
	height: 100vh;
	
}

</style>


			
<template>
	<view>
		<home v-if="PageCur=='home'"></home>
	 	<news v-if="PageCur=='news'"></news>
		<publish v-if="PageCur=='publish'"></publish>
		<platform v-if="PageCur=='platform'"></platform> 
		<about v-if="PageCur=='about'"></about>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/tabbar/home' + [PageCur=='home'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='home'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="news">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/tabbar/news' + [PageCur == 'news'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='news'?'text-green':'text-gray'">新闻</view>
			</view>
			<view class="action text-gray add-action"  @click="NavChange" data-cur="publish">
				<button class="cu-btn cuIcon-add shadow" :class="PageCur=='publish'?'bg-green':'bg-gray'"></button>
				<view :class="PageCur=='publish'?'text-green':'text-gray'">发布</view>
			</view>
			<view class="action" @click="NavChange" data-cur="platform">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/tabbar/platform' + [PageCur == 'platform'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='platform'?'text-green':'text-gray'">平台</view>
			</view>
			<view class="action" @click="NavChange" data-cur="about">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/img/tabbar/about' + [PageCur == 'about'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='about'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
				console.log('当前Tabbar页面==>' + e.currentTarget.dataset.cur)
			}
		}
	}
</script>

<style>
</style>

<template>
	<cu-custom bgColor="bg-gradual-pink" :isBack="true">
		<block slot="backText">返回</block>
		<block slot="content">操作条</block>
	</cu-custom>
	<view class="content">
		<button type="primary" @click="toLogin" :loading="loading">登录</button>
		<button type="primary" @click="toRegister" :loading="loading">注册</button>
		<button type="primary" @click="toResetpasswd" :loading="loading">修改密码</button>
	</view>
</template>

<script>
export default {
	data() {
		return { title: 'request' };
	},
	methods: {
		toLogin: function() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		},
		toRegister: function() {
			uni.navigateTo({
				url: '/pages/login/register'
			});
		},
		toResetpasswd: function() {
			uni.navigateTo({
				url: '/pages/login/resetpasswd'
			});
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>

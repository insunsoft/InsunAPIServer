<template>
	<view class="InsunUI-box">
		<image src="../../static/img/login/login.png" mode='aspectFit' class="InsunUI-logo"></image>
		<view class="InsunUI-title">健康南县</view>
		<view class="InsunUI-form">
			<input class="InsunUI-input" placeholder-class placeholder="请输入手机号" />
			<input class="InsunUI-input" placeholder-class password placeholder="请输入密码(8-16位)"/>
			<view class="InsunUI-label" @click="go_resetpasswd">忘记密码？</view>
			<button class="InsunUI-btn">立即登录</button>
			<view class="InsunUI-label" @click="go_register">还没有账号？点此注册.</view>
			
			   
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			go_resetpasswd(){
				uni.navigateTo({
				    url: './resetpasswd'
				})
			},
			go_register(){
				uni.navigateTo({
					url: './register'
				})
			}
			
		}
	}
</script>


   
<style>
	
	.InsunUI-box{
		padding: 0 100upx;
		position: relative;
	}
	.InsunUI-logo{
		width: 100%;
		width: 100%;
		height: 290upx;
	}
	.InsunUI-title{
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}
	.InsunUI-form{
		margin-top: 120upx;
	}
	.InsunUI-input{
		background: #F5FFFA;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .InsunUI-input{
		color: #94afce;
	}
	.InsunUI-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.InsunUI-btn{
		background: #39b54a;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}
	.InsunUI-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.InsunUI-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>




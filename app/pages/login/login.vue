<template>
  <view>
<!-- 导航栏 -->
    <view class="cu-bar bg-gradual-green">
		<view class="cu-avatar sm round" style="background-image:url({{avatar}});"></view>
      	<view class="content">登录</view>
      	<view class="action">
        <text class="cuIcon-more"></text>
      </view>
    </view>
				<view class="cu-bar bg-blue">
				<view class="action">
					<text class="cuIcon-close"></text> 关闭
				</view>
				<view class="content text-bold">
					海蓝
				</view>
			</view>
<!-- 上部背景图以及APP Logo -->
    <view class="bg-gradual-green padding radius text-center shadow-blur">
      	<view class="cu-avatar xl round" style="background-image:url({{avatar}});"></view>
      	<view class="margin-top-sm text-lg">{{title}}</view>
    </view>
<!-- 翘边阴影 -->
	<view class="padding-xl radius shadow-warp bg-white margin-top">
<!-- 输入表单 -->		
		<form>
				<view class="cu-form-group">
					<view class="title">手机号码</view>
					<input placeholder="11位国内手机号码" name="loginname"  @input="loginnameInput"></input>
					<view class="cu-capsule radius">
						<view class='cu-tag bg-blue '>
							+86
						</view>
						<view class="cu-tag line-blue">
							中国大陆
						</view>
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">登录密码</view>
					<input  name="password" @input="passwordInput"></input>
				</view>
		</form>
	</view>
	<!-- 登录按钮 -->
	<view class="padding flex flex-direction">
			<button class="cu-btn bg-green lg" @tap="go_login" :loading="loading">登录</button>	
	</view>
		<view class="padding flex flex-wrap justify-between align-center bg-white">
			<button class="cu-btn  sm" @tap="go_register">立即注册</button>
			<button class="cu-btn  sm" @tap="go_resetpasswd">忘记密码</button>
			
		</view>

			<view class="solids-bottom padding-xs flex align-center">
				
				<view class="flex-sub text-center">
					<view class="solid-bottom text-xl padding">
						<text class="text-black text-bold">{{res}}</text>
					</view>
					
				</view>
			</view>

		<!-- 页面结束 -->
  </view>
</template>


<script>
export default {
  data() {
    return {
		loading: false,
	  title: "健康南县",
	  loginname:"",
	  password:"",
	  res:""
    };
  },
  onLoad() {},
  methods: {
    go_resetpasswd() {
      uni.navigateTo({
        url: "./resetpasswd"
      });
    },
    go_register() {
      uni.navigateTo({
        url: "./register"
      });
	},
	async go_login(){
		 
				this.loading = true
               let res = await this. $insunapi.userlogin({loginname: this.loginname,password:this.password});
						
                    this.loading = false;
                    console.log('request success', res)
                   

	},
	loginnameInput(e) {
				this.loginname = e.detail.value
			},
passwordInput(e) {
				this.password = e.detail.value
			},
			
  }
};
</script>


   
<style>
.InsunUI-box {
  padding: 0 100upx;
  position: relative;
}
.InsunUI-logo {
  width: 100%;
  width: 100%;
  height: 290upx;
}
.InsunUI-title {
  position: absolute;
  top: 0;
  line-height: 360upx;
  font-size: 68upx;
  color: #fff;
  text-align: center;
  width: 100%;
  margin-left: -100upx;
}
.InsunUI-form {
  margin-top: 120upx;
}
.InsunUI-input {
  background: #f5fffa;
  margin-top: 30upx;
  border-radius: 100upx;
  padding: 20upx 40upx;
  font-size: 36upx;
}
.input-placeholder,
.InsunUI-input {
  color: #94afce;
}
.InsunUI-label {
  padding: 60upx 0;
  text-align: center;
  font-size: 30upx;
  color: #a7b6d0;
}
.InsunUI-btn {
  background: #39b54a;
  color: #fff;
  border: 0;
  border-radius: 100upx;
  font-size: 36upx;
}
.InsunUI-btn:after {
  border: 0;
}
/*按钮点击效果*/
.InsunUI-btn.button-hover {
  transform: translate(1upx, 1upx);
}
</style>




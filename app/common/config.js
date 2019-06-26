/* *
 * 通用配置以及功能js库，主要定义api接口，auth apikey 常量值和通用函数
 */

// api接口地址
var APIUrl = 'http://localhost:3000/api/';
// http校验值，需和服务器端一致，在请求时作为headers auth参数传入
var HttpAuth = 'asdgladsjgs3454adooewauatg454443452';
// 服务器端校验来源的参数值
var APPKey = 'IQJ3VC4FIwpiBiAAMQUm';
const assetsPath: "/static/img"

// 设置标识 ========================================================
var SourcePlatform = '';
//#ifdef APP-PLUS
SourcePlatform = 'app';
//#endif

//#ifdef MP-WEIXIN
SourcePlatform = 'wx';
//#endif
//#ifdef H5
SourcePlatform = 'H5';
//#endif
//#ifdef MP-ALIPAY
SourcePlatform = '支付宝';
//#endif
//#ifdef MP-BAIDU
SourcePlatform = '百度';
//#endif
//#ifdef MP-TOUTIAO
SourcePlatform = '头条';
//#endif
//#ifdef MP-QQ
SourcePlatform = 'QQ';
//#endif
//==================================================================


/* 
 * 图片静态资源表，所有图片资源路径在这统一管理，不应该写死在页面中，该数据挂载到Vue原型中。
 * 页面使用：this.$mAssetsPath.grid_1
 * CSS背景：应尽量使用:style="" 行内样式设置背景图
 * PATH说明：本地路径或者服务器路径
 * 
 * 举例：<image :src="grid_1">  需要在data中映射 grid_1: this.$mAssetsPath.grid_1
 * 
 * 特别注意：经测试小程序中不支持 <image :src="$mAssetsPath.grid_1"> 该用法
 */




export default {
	APIUrl,
	HttpAuth,
	APPKey,
	SourcePlatform,
	
		// 首页grid的图标
	Img_Logo: PATH + "/grid-1.png",
	grid_2: PATH + "/grid-2.png",
	grid_3: PATH + "/grid-3.png",
	grid_4: PATH + "/grid-4.png",
	grid_5: PATH + "/grid-5.png",
	grid_6: PATH + "/grid-6.png"
};

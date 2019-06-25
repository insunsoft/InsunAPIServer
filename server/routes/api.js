'use strict';
// +----------------------------------------------------------------------
// | InsunAPIServer
// | Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | Author: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------

// +----------------------------------------------------------------------
// | 此处用于服务器根地址的访问接口，默认显示欢迎页面。 后期改造成admin模块入口
// |
// | 
// | 
// +----------------------------------------------------------------------
const router = require('koa-router')()
const User = require('../controllers/User')
const Article = require('../controllers/Article')

router.prefix('/api')
// Hello Wolrd示例接口
// 接口链接：http://localhost:3000/api/
// 功能说明： 用于第一次接口接入，验证签名
router.get('/', function (ctx, next) {
    ctx.body = 'Hello Wolrd!,您已成功访问InsunAPIServer！'
})
//获取数据库连接状态
router.post('/App.DBConn.Status',User.App_DBConn_Status);
router.get('/App.DBConn.Status',User.App_DBConn_Status);
//用户登录
router.post('/App.User.Login',User.App_User_Login);
router.get('/App.User.Login',User.App_User_Login);

//获取用户个人信息
router.post('/App.User.ByMobile',User.App_User_ByMobile);
router.get('/App.User.ByMobile',User.App_User_ByMobile);
router.post('/App.User.ByUUID',User.App_User_ByUUID);
router.get('/App.User.ByUUID',User.App_User_ByUUID);

 
//用户注册n
router.post('/App.User.Register',User.App_User_Register);
//用户修改自身密码
router.post('/App.User.AlterPassword',User.App_User_AlterPassword);

//用户登出
router.post('/App.User.Logout',User.App_User_Logout);
router.get('/App.User.Logout',User.App_User_Logout);
//获取用户自身所有信息
router.post('/App.User.SelfInfo',User.App_User_SelfInfo);



router.post('/App.Point.Add',User.App_Point_Add); 
router.get('/App.Point.Add',User.App_Point_Add); 
//==============管理员权限==================================================
//管理员==无条件重置用户密码
router.post('/App.User.ResetPasswordForAdmin',User.App_User_ResetPasswordForAdmin); 
//管理员==修改任意用户状态
router.post('/App.User.SetStatusForAdmin',User.App_User_SetStatusForAdmin); 

router.post('/App.Point.count',User.App_Point_count); 

// //判断用户是否登陆
// router.post('/App.User.Check',User.App_User_Check); 


// router.post('/App.User.Token',User.App_User_Token);
// router.get('/App.User.Token',User.App_User_Token);


module.exports = router



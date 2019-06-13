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
router.post('/App.DBConn.Status',User.App_DBConn_Status);
router.get('/App.DBConn.Status',User.App_DBConn_Status);
router.post('/App.User.Info',User.App_User_Info);
router.get('/App.User.Info',User.App_User_Info);
router.post('/App.User.Register',User.App_User_Register);
router.post('/App.User.AlterPassword',User.App_User_AlterPassword);
router.post('/App.User.Login',User.App_User_Login);

router.post('/App.User.Logout',User.App_User_Logout);
router.get('/App.User.Logout',User.App_User_Logout);

router.post('/App.User.Profile',User.App_User_Profile);
router.post('/App.User.SetStatus',User.App_User_SetStatus); 
//
router.post('/App.User.Token',User.App_User_Token);
router.get('/App.User.Token',User.App_User_Token);


module.exports = router



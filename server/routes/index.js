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
const Insun = require('../units');
router.get('/', function (ctx, next) {
    ctx.body = Insun.ReturnUnit.returnInfoJson (200,'Hello Wolrd!',{})
})
module.exports = router

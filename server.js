// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// | 用途: 基于NodeJS+Koa2的API开发框架。
// | 路径: \server.js
// | 使用: node server.js 或者 npm run dev
// | 备注：已完成
// +----------------------------------------------------------------------

//+----------------------Koa2核心库-----------------------------------------
const Koa2 = require('koa')//web开发框架Koa2核心库加载
const app = new Koa2()//获得Koa2实例
const env = process.env.NODE_ENV || 'development' // Current mode
console.error(`服务器端【${process.env.NODE_ENV}】==>加载NodeJS-Koa2框架核心库...`)
// +----------------------内置中间件---------------------------------------

const path = require('path')// 用于处理目录路径
//const ip = require('ip')//ip
// +----------------------常用中间件---------------------------------------
const Json = require('koa-json')//返回Json格式化，主要是换行处理
const KoaBody = require('koa-body')//查询字符串解析到`ctx.request.query`
const KoaBodyparser = require('koa-bodyparser')//查询字符串解析到`ctx.request.query`
const KoaStatic = require('koa-static')//静态文件
//const views = require('koa-views')//
const KoaOnerror = require('koa-onerror')//错误处理
const koaLogger = require('koa-logger')//控制台显示访问类型、路径、耗时
const KoaJwt = require('koa-jwt')//令牌权限
console.error(`服务器端【${env}】==>加载常用中间件完毕。`)
// +----------------------自定义中间件加载------------------------------------
const ErrorRoutesCatch = require('./server/middleware/ErrorRoutesCatch')
// +----------------------配置文件加载------------------------------------
const { ServerInfo, MySQLInfo, SecurityInfo } = require('./server/config')//配置文件加载
console.error(`服务器端【${env}】==>加载配置文件完毕`)
// +----------------------路由文件加载------------------------------------
const InsunUnits = require('./server/units');
const index = require('./server/routes')//用于默认测试网站根目录。
const api = require('./server/routes/api')
console.error(`服务器端【${env}】==>加载路由文件完毕。`)

// +-----------------------中间件使用--------------------------------------
// 错误处理
KoaOnerror(app)
// 查询字符串解析到`ctx.request.query`
app.use(KoaBodyparser())
app.use(Json())
//========================================================================
app.use(koaLogger())
//控制台显示如下
// <-- POST /api/App.User.Register?password=123456&loginname=15027675251
// --> POST /api/App.User.Register?password=123456&loginname=15027675251 404 29ms -
//==========================================================================
// 静态资源处理，配置路径
app.use(KoaStatic(path.join(__dirname, './public')));
//========================================================================
//模板设置
// app.use(views(__dirname + '/views', {
//   extension: 'ejs'
// })) 
// logger

//请求设置--------------------------------------------------
app.use((ctx, next) => {
    console.log('设置跨域请求===>')
    if (ctx.request.header.host.split(':')[0] === 'localhost' || ctx.request.header.host.split(':')[0] === '127.0.0.1') {
        ctx.set('Access-Control-Allow-Origin', '*');
    } else {
        ctx.set('Access-Control-Allow-Origin', config.API_server_host);
    }
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.set('Access-Control-Allow-Credentials', true); // 允许带上 cookie
    return next();
})

//app.use(CorsRequest), Authorization
//访问权限控制--------------------------------------------------
//app.use(AuthHeader())
//错误信息处理--------------------------------------------------
app.use(ErrorRoutesCatch())
//权限例外
console.log('daole===>')
app.use(KoaJwt({
    secret: SecurityInfo.secret
}).unless({
    path: ['/api/App.User.Login', '/api/App.User.Register'] //除了这些地址，其他的URL都需要验证
}));


app.use(KoaBody({
    multipart: true,
    parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'HEAD', 'DELETE'], // parse GET, HEAD, DELETE requests
    formidable: {
        uploadDir: path.join(__dirname, '../assets/uploads/tmp')
    },
    jsonLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb'
})) // Processing request







// +----------------------路由配置----------------------------------------
app.use(index.routes(), index.allowedMethods())
app.use(api.routes(), api.allowedMethods())
console.error(`服务器端【${env}】==>路由配置完毕。`)
// +----------------------------------------------------------------------
// error-handling
app.on('error', (err, ctx) => {
    console.error('服务器端错误==>', err, ctx)
});




// +--------------------------开启端口侦听-----------------------------------
const type = process.env.HOST || ServerInfo.API_server_type
const host = process.env.HOST || ServerInfo.API_server_host
const port = process.env.PORT || ServerInfo.API_server_port
app.listen(port, host)
// +----------------------------------------------------------------------
console.log(`服务器端【${env}】==>运行于${port}端口...`)
console.log(`服务器端【${env}】==>按Ctrl键+鼠标点击可访问网址==>${type}${host}:${port}/`)
module.exports = app
// +----------------------------------------------------------------------



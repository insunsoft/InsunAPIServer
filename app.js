// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// +----------------------------------------------------------------------
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// +----------------------------------------------------------------------
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: 基于NodeJS+Koa2的API开发框架。
// +----------------------------------------------------------------------
// | 路径: \app.js
// +----------------------------------------------------------------------
// | 使用: node app.js 或者 npm run dev
// +----------------------------------------------------------------------
// | 样例：
// +----------------------------------------------------------------------
// | 备注：已完成
// +----------------------------------------------------------------------

//+----------------------Koa2核心库-----------------------------------------
const Koa = require('koa')//web开发框架Koa2核心库加载
const app = new Koa()//获得Koa2实例
// +----------------------常用中间件---------------------------------------
const json = require('koa-json')//
const bodyparser = require('koa-bodyparser')//处理与post相关的请求
const passport = require('koa-passport')
const path = require('path')// 用于处理目录路径
const koaStatic = require('koa-static')//
const jwt = require('jsonwebtoken')//
const koajwt = require('koa-jwt')//
const views = require('koa-views')//
const onerror = require('koa-onerror')//错误处理
const logger = require('koa-logger')//日志
// +----------------------配置文件加载------------------------------------
const config = require('./app/config')//配置文件加载
// +----------------------路由文件加载------------------------------------
const index = require('./app/routes/index')
const users = require('./app/routes/users')
const api = require('./app/routes/api')
// +-----------------------环境设置--------------------------------------
const host = process.env.HOST || config.server.API_server_host
const port = process.env.PORT || config.server.API_server_port
// +-----------------------环境设置--------------------------------------
const InsunFUN = require('./util/InsunFUN')

// +-----------------------中间件使用--------------------------------------
// 错误处理
onerror(app)
app.use(bodyparser())
app.use(json())
app.use(logger())
// 静态资源处理，配置路径
app.use(koaStatic( path.join(__dirname , './public') ));

// app.use(views(__dirname + '/views', {
//   extension: 'ejs'
// })) 
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`【模式：${ctx.method}】路径- ${ctx.url} 用时- ${ms}ms`)


  



})

// +----------------------路由配置----------------------------------------
//console.log('InsunAPIServer 正在加载index路由... ')
app.use(index.routes(), index.allowedMethods())
//console.log('InsunAPIServer 正在加载users路由... ')
app.use(users.routes(), users.allowedMethods())
//console.log('InsunAPIServer 正在加载api路由... ')
app.use(api.routes(), api.allowedMethods())
// +----------------------------------------------------------------------
// error-handling
app.on('error', (err, ctx) => {
  console.error('服务器端错误==>', err, ctx)
});

app.listen(port, host)

// +----------------------------------------------------------------------
console.log('InsunAPIServer 运行于 ' + config.server.API_server_port + '端口...')
console.log('可访问网址测试==>' + config.server.API_server_type + config.server.API_server_host + ':' + config.server.API_server_port + '/api/')
module.exports = app
// +----------------------------------------------------------------------
// 设置数据库链接


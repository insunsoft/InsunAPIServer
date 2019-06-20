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
console.error(`服务器端==>加载NodeJS-Koa2框架核心库...`)
// +----------------------常用中间件---------------------------------------
const json = require('koa-json')//
const bodyparser = require('koa-bodyparser')//处理与post相关的请求
//const passport = require('koa-passport')
const path = require('path')// 用于处理目录路径
const koaStatic = require('koa-static')//
//const views = require('koa-views')//
const onerror = require('koa-onerror')//错误处理
const logger = require('koa-logger')//日志
console.error(`服务器端==>加载常用中间件完毕。`)
// +----------------------配置文件加载------------------------------------
const config = require('./server/config')//配置文件加载
console.error(`服务器端【${process.env.NODE_ENV}】==>加载配置文件完毕`)
// +----------------------路由文件加载------------------------------------
const index = require('./server/routes')//用于默认测试网站根目录。
const api = require('./server/routes/api')
console.error(`服务器端【${process.env.NODE_ENV}】==>加载路由文件完毕。`)

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
  console.log(`服务器端【模式：${ctx.method}】路径- ${ctx.url} 用时- ${ms}ms`)
})

// +----------------------路由配置----------------------------------------
app.use(index.routes(), index.allowedMethods())
app.use(api.routes(), api.allowedMethods())
console.error(`服务器端【${process.env.NODE_ENV}】==>路由配置完毕。`)
// +----------------------------------------------------------------------
// error-handling
app.on('error', (err, ctx) => {
  console.error('服务器端错误==>', err, ctx)
});
// +--------------------------开启端口侦听-----------------------------------
const type = process.env.HOST || config.server.API_server_type
const host = process.env.HOST || config.server.API_server_host
const port = process.env.PORT || config.server.API_server_port
app.listen(port,host)
// +----------------------------------------------------------------------
console.log(`服务器端【${process.env.NODE_ENV}】==>运行于${port}端口...`)
console.log(`服务器端【${process.env.NODE_ENV}】==>按Ctrl键+鼠标点击可访问网址==>${type}${host}:${port}/`)
module.exports = app
// +----------------------------------------------------------------------



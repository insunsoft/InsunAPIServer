'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// | 用途: token权限认证中间件
// | 路径: \server\middleware\authHeard.js
// | 使用: 
// | 备注：已完成 100% 但可以随时增添参数以及赋值
// +----------------------------------------------------------------------


const jwt = require('jsonwebtoken')
const config = require('../config')
const Insun = require('../units');
module.exports = async (ctx, next) => {
  // 从 Request Headers 的 Authorization 字段中获取 token
  const authorization = ctx.get('Authorization')
  const token = authorization.split(' ')[1]
  // 如果获取不到 token，则抛出错误
  if (!token) {
    ctx.status = 401
    ctx.body = await Insun.ReturnUnit.returnErrorJson(401, 'No token detected in HTTP header [Authorization]！', {})
    return
  }
  // 如果获取到了 token，则对 token 进行校验
  try {
    jwt.verify(token, config.SecurityInfo.secret)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 401
    ctx.body = await Insun.ReturnUnit.returnErrorJson(401, 'Token is expired！', {})
  }
}
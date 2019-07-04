'use strict';
// +----------------------------------------------------------------------
// | InsunAPIServer
// | Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | Author: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// +----------------------------------------------------------------------
// | 中间件，用于捕获401的错误，用于令牌验证
// +----------------------------------------------------------------------
module.exports = function () {
  return function (ctx, next) {
    return next().catch((err) => {
      console.log('asdfsddsadsd===>' + String(err))
      switch (err.status) {
        case 401:
          ctx.status = 200
          ctx.body = {
            code: 401,
            msg: '访问令牌验证错误-' + err.message + '-' + err.originalError.message,
            data: {}
          }
          break;
        case 404:
          ctx.status = 200
          ctx.body = {
            code: 404,
            msg: '无法找到指定位置的资源-Not Found ',
            data: {}
          }
          break;
        default:
          throw err
      }
    })
  }
}


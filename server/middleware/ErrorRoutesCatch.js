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
      console.error(err.stack);
      const status = err.status || 500;
      ctx.status = status;
      if (status === 401) {
        ctx.response.status = 200
        ctx.body = {
          code: 401,
          msg: '访问令牌验证错误-' + err.message,
          data: {}
        }
        console.log('404===>' + String(err))
      } else if (status === 401) {
        ctx.response.status = 200
        ctx.body = {
          code: 401,
          msg: '访问令牌验证错误-' + err.message,
          data: {}
        }
        console.log('401===>' + String(err))
      } else if (status === 500) {
        ctx.response.status =200
        ctx.body = {
          code: 500,
          msg: '无法找到指定位置的资源-Not Found' + err.message,
          data: {}
        }
        console.log('500===>' + String(err))
      }


    })
}
}
/* module.exports = async (ctx, next) => {
  try {
    await next();


  } catch (err) {
    console.error(err.stack);


  }

}
 */

/*

try {
  await next();
  if (ctx.status === 404) {
    ctx.throw(404);
  }
} catch (err) {
  console.error(err.stack);
  const status = err.status || 500;
  ctx.status = status;
  if (status === 404) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.body = {
      code: 404,
      msg: '访问令牌验证错误-' + err.message,
      data: {}
    }
    console.log('404===>' + String(err))
  } else if (status === 401) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.body = {
      code: 401,
      msg: '访问令牌验证错误-' + err.message,
      data: {}
    }
    console.log('401===>' + String(err))
  } else if (status === 500) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.body = {
      code: 500,
      msg: '无法找到指定位置的资源-Not Found' + err.message,
      data: {}
    }
    console.log('500===>' + String(err))
  }
}


module.exports = function () {
  return function (ctx, next) {
    return next().catch((err) => {

      switch (err.status) {
        case 401:
          ctx.response.status = err.statusCode || err.status || 500
          ctx.body = {
            code: 401,
            msg: '访问令牌验证错误-' + err.message,
            data: {}
          }
          console.log('401===>' + String(err))
          break;
        case 404:
          ctx.response.status = err.statusCode || err.status || 500
          ctx.body = {
            code: 404,
            msg: '无法找到指定位置的资源-Not Found ',
            data: {}
          }
          console.log('404===>' + String(err))
          break;
        default:
          ctx.response.status = err.statusCode || err.status || 500
          ctx.body = {
            code: err.status,
            msg: '未知错误',
            data: {}
          }
          console.log('err===>' + String(err))
          ctx.app.emit("error", err, ctx)

      }
    })
  }
}

 */
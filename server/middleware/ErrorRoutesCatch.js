

module.exports = function () {
  return function (ctx, next) {
    return next().catch((err) => {
      switch (err.status) {
        case 401:
          ctx.status = 200
          ctx.body = {
            code: 401,
            msg:'访问令牌验证错误-Authentication Error',
            data:{}
          }
          break;
          case 404:
          ctx.status = 200
          ctx.body = {
            code: 404,
            msg:'[无法找到指定位置的资源]Not Found ',
            data:{}
          }
          break;
        default:
          throw err
      }
    })
  }
}


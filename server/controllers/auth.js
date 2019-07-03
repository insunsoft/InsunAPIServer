
const InsunUnits = require('../units');

// 用户登录的时候返回token
// let token = jwt.sign({
//   userInfo: userInfo // 你要保存到token的数据
// }, publicKey, { expiresIn: '7d' })

/**
 * 检查授权是否合法
 */
const CheckAuth = (ctx, next) => {
  let token = ctx.request.header.authorization
  try {
    let userInfo = InsunUnits.TokenUnit.decodeToken(token.substr(7))
    if (userInfo) {
      return {
        status: 1,
        result: userInfo
      }
    } else {
      return {
        status: 403,
        result: {
          errInfo: '没有授权'
        }
      }
    }
  } catch (err) {
    return {
      status: 503,
      result: {
        errInfo: '解密错误'
      }
    }
  }
}

export const Post = (ctx, next) => {
  switch (ctx.params.action) {
    case 'check':
      return CheckAuth(ctx).then(result => { ctx.body = result; next() })
    default:
      return CheckAuth(ctx).then(result => { ctx.body = result; next() })
  }
}

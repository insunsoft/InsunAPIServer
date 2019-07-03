const { decodeToken } = require('../units/TokenUnit');
module.exports = function () {
  return async function (ctx, next) {
    var dataString = ctx.request.headers.authorization;
    if (dataString) {
      try {
        let payload = await decodeToken(dataString)
        ctx.state.user = payload
        await next()
      } catch (err) {
        ctx.status = 401;
       // Console.log('啛啛喳喳' + err)
        await next()
      }

    }
  }
}


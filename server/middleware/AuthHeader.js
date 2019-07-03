const { decodeToken } = require('../units/TokenUnit');
module.exports = function () {
  return async function (ctx, next) {
    var dataString = ctx.request.headers.authorization;
    console.log('开始解码token===>')
    if (dataString) {
      try {
        let payload = await decodeToken(dataString)
        ctx.state.user = payload
        console.log('解码得出payload===>'+ payload)
        await next()
      } catch (err) {
        ctx.status = 401;
        console.log('解码发生错误===>'+ string(err))
       // Console.log('啛啛喳喳' + err)
        await next()
      }

    }
   else{
      console.log('没有token===>')
      ctx.status = 200;
      await next()
    } 
  }
}


const {getAuthInfo} = require('../units/TokenUnit');
module.exports = function () {
    return async  function (ctx, next) {
        var dataString = ctx.request.headers.authorization;
         if(dataString ){
            ctx.state.user =getAuthInfo(dataString)
         }
         await next()
    }
  }

  

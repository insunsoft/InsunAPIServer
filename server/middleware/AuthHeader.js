const InsunUnits = require('../units');
module.exports = function () {
    return function (ctx, next) {
        var dataString = ctx.headers.authorization;
        // console.log(dataString)
         if(dataString == undefined){
              next();
         }else{
             const dataArr = dataString.split(' ');
             const token = dataArr[1];
          var data =  InsunUnits.TokenUnit.decodeToken(token)
          if (data){
             //这一步是为了把解析出来的用户信息存入全局state中，这样在其他任一中间价都可以获取到state中的值
                 ctx.state.user =data
       
                 console.log(ctx.state.user)
             }
              next();
         }
    }
  }

  

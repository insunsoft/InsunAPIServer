// 常用的函数处理
module.exports = {
  //获取数据模块信息进行处理



  handlerAsyncError: function (promise) {
    return promise.then(
      res => [null, res]
    ).catch(
      err => [err, null]
    )
  }


}
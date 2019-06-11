const router = require('koa-router')()
//const config = require('./../config')


// 
// 
// 这里考虑提供Admin
router.get('/', function (ctx, next) {
    ctx.body = returnJson(0,'Hello Wolrd!',{})
})
module.exports = router

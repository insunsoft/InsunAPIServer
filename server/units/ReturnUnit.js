'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: API调用返回数据方法的封装
// | 路径: ./units/ReturnUnit.js
// | 备注：已完成 100%
// +----------------------------------------------------------------------
module.exports = {    
    //成功模式
    returnSuccessJson: function (code, msg, data) {
        return {
            statusCode: code || 200,
            message: msg,
            data: data
        };
    },
    //错误模式
    returnErrorJson: function (code, msg, data) {
        return {
            statusCode: code || 500,
            message: msg,
            data: data
        };
    }
}



'use strict';
'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: API调用返回数据方法的封装
// | 路径: ./units/ReturnUnit.js
// | 备注：已完成 
// +----------------------------------------------------------------------
module.exports = {
    //成功模式
    returnSuccessJson: function (msg, data) {
        return {
            code: 'Success',
            msg: msg,
            data: data
        };
    },
    //服务器端出现错误
    returnErrorJson: function (msg, data) {
        return {
            code: 'Error',
            msg: msg,
            data: data
        };
    },
    //客户交互模式出现错误、提示
    returnInfoJson: function (msg, data) {
        return {
            code: 'Info',
            msg: msg,
            data: data
        };
    }
}



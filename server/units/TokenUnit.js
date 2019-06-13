'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: jsonwebtoken中间件的封装
// | 路径: ./units/TokenUnit.js
// | 备注：已完成 
// +----------------------------------------------------------------------
const JWT = require('jsonwebtoken');
const config = require('../config')//配置文件加载
const TOKEN_CONFIG = {
  KEY: config.security.secret,
  expires: config.security.expires,
  alg: config.security.alg,
};

module.exports = {
/**
 * 根据用户传递的数据生成 token 
 * @param {Object} - 用户数据
 * @returns {string} - 加密字符创即生成的token
 */
generateToken:function (data) {
  console.log('generateToken:=>secret:=>' + TOKEN_CONFIG.KEY);
  console.log('generateToken:=>expires:=>' + TOKEN_CONFIG.expires);
  console.log('generateToken:=>alg:=>' + TOKEN_CONFIG.alg);
  const token =   JWT.sign(data, TOKEN_CONFIG.KEY, { expiresIn: TOKEN_CONFIG.expires, algorithm: TOKEN_CONFIG.alg });
  console.log('显示=>原始数据：' + JSON.stringify(data) + 'token:' + token);
  return token;
},

/**
 * 解码给定的有效负载（payload）通常是来自请求头的授权字段
 * @param {string} - token
 * @returns {object|null} - 对象或者空
 */
decodeToken :function (strToken) {
  try {
    console.log('generateToken:=>secret:=>' + TOKEN_CONFIG.KEY);
    console.log('generateToken:=>expires:=>' + TOKEN_CONFIG.expires);
    console.log('generateToken:=>alg:=>' + TOKEN_CONFIG.alg);
    console.log('generateToken:=>strToken:=>' + strToken);
    
    let payload =  JWT.verify(strToken, TOKEN_CONFIG.KEY);
    console.log('显示=>原始数据：[' + JSON.stringify(payload) + ']token:' + strToken);
    return   payload
     } catch (e) {
    return  e
   
  }

}
}
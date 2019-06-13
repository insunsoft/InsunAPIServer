'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// | 用途: jsonwebtoken中间件的粉状
// | 路径: ./units/TokenUnit.js
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
   * 根据用户数据生成 token 
   * @param {Object} - 用户数据
   * @returns {string} - 加密字符创即生成的token
   */
   generateToken:function (data) {

    const token = JWT.sign(data,TOKEN_CONFIG.KEY,{expiresIn:TOKEN_CONFIG.expires,algorithm:TOKEN_CONFIG.alg});
    console.log('显示=>原始数据：' + data + 'token:' + token);
    return token;
  },

  /**
   * Decode given payload (usually, authorization field from request header)
   * @param {string} - string with token to decore
   * @returns {object|null} - object with users data
   */
   decodeToken:function (payload) {
    try {
      let data = jwt.verify(payload, TOKEN_CONFIG.KEY);
      return {
        data
      };
    } catch (e) {
      return {
           data:e 
      }
    }

  }
}
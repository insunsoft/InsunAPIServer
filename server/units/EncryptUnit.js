'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: crypto中间件aes192加解密方式的封装
// | 路径: ./units/EncryptUnit.js
// | 备注：已完成 
// +----------------------------------------------------------------------
const crypto = require('crypto');
const Config = require('../config')//配置文件加载
const TOKEN_CONFIG = {
	KEY: Config.security.secret
};

module.exports = {
	Encryptaes192: function (data) {
		const cipher = crypto.createCipher('aes192', TOKEN_CONFIG.KEY);
		var crypted = cipher.update(data, 'utf8', 'hex');
		crypted += cipher.final('hex');
		return crypted;
	},

	Decryptaes192: function (encrypted) {
		const decipher = crypto.createDecipher('aes192', TOKEN_CONFIG.KEY);
		var decrypted = decipher.update(encrypted, 'hex', 'utf8');
		decrypted += decipher.final('utf8');
		return decrypted;
	}
}
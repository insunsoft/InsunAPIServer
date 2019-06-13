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
//加密引擎
/* 查看系统所支持的算法
使用openssl list-cipher-algorithms可以查看系统所支持的算法

[ 'DSA',  'DSA-SHA',  'DSA-SHA1',  'DSA-SHA1-old',  'RSA-MD4',  'RSA-MD5',  
'RSA-MDC2',  'RSA-RIPEMD160',  'RSA-SHA',  'RSA-SHA1',  'RSA-SHA1-2',  'RSA-SHA224', 
'RSA-SHA256',  'RSA-SHA384',  'RSA-SHA512',  'dsaEncryption',  'dsaWithSHA', 
'dsaWithSHA1',  'dss1',  'ecdsa-with-SHA1',  'md4',  'md4WithRSAEncryption', 
'md5',  'md5WithRSAEncryption',  'mdc2',  'mdc2WithRSA',  'ripemd',  'ripemd160', 
'ripemd160WithRSA',  'rmd160',  'sha',  'sha1',  'sha1WithRSAEncryption',  'sha224', 
'sha224WithRSAEncryption',  'sha256',  'sha256WithRSAEncryption',  'sha384',  
'sha384WithRSAEncryption',  'sha512',  'sha512WithRSAEncryption',  'shaWithRSAEncryption', 
'ssl2-md5',  'ssl3-md5',  'ssl3-sha1',  'whirlpool' ]
 */
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
'use strict';
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


const crypto = require('crypto');
module.exports = {
    Encryptaes192: function (data, key) {
		const cipher = crypto.createCipher('aes192', key);
		var crypted = cipher.update(data, 'utf8', 'hex');
		crypted += cipher.final('hex');
		return crypted;
	},

	Decryptaes192: function (encrypted, key) {
		const decipher = crypto.createDecipher('aes192', key);
		var decrypted = decipher.update(encrypted, 'hex', 'utf8');
		decrypted += decipher.final('utf8');
		return decrypted;
	},



}
/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapiserver_development

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-14 16:39:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_ucenter_login
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_login`;
CREATE TABLE `insun_ucenter_login` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `loginname` varchar(50) DEFAULT NULL COMMENT '用户名',
  `password` varchar(128) DEFAULT NULL COMMENT '密码',
  `uuid` varchar(128) DEFAULT NULL COMMENT '客户端唯一标识号',
  `push_token` varchar(300) DEFAULT NULL COMMENT '推送的令牌',
  `avatar` varchar(200) DEFAULT NULL COMMENT '头像',
  `source` tinyint(2) unsigned DEFAULT '2' COMMENT '用户注册来源(0->iPhone, 1->iPad, 2->Android, 3->微信, 4->H5, 5->网站)',
  `social_source` tinyint(2) unsigned DEFAULT '0' COMMENT '第三方登录来源(0->手机, 1->微信, 2->QQ)',
  `social_uid` varchar(256) DEFAULT NULL COMMENT '第三方登陆用户 ID',
  `social_token` varchar(256) DEFAULT NULL COMMENT '第三方登陆用户的令牌',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态(0-失效 1-正常)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `social_uid` (`social_uid`,`social_source`),
  UNIQUE KEY `base` (`id`,`loginname`,`password`,`avatar`,`status`) USING BTREE,
  UNIQUE KEY `uuid` (`uuid`,`push_token`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

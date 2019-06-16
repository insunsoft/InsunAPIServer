/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapiserver_development

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-14 16:39:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_ucenter_userinfo
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_userinfo`;
CREATE TABLE `insun_ucenter_userinfo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL,
  `username` varchar(50) DEFAULT NULL COMMENT '真实姓名',
  `nickname` varchar(50) DEFAULT NULL COMMENT '用户昵称',
  `email` varchar(20) DEFAULT NULL COMMENT '邮箱',
  `qq` varchar(20) DEFAULT NULL COMMENT 'QQ号码',
  `identity_card_type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '证件类型：1 身份证,2军官证,3护照',
  `identity_card_no` varchar(20) DEFAULT NULL COMMENT '证件号码',
  `sex` int(1) unsigned DEFAULT NULL COMMENT '性别(0->男, 1->女)',
  `lng` float(10,0) DEFAULT '0' COMMENT '经度',
  `lat` float(10,0) DEFAULT '0' COMMENT '纬度',
  `user_point` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户积分',
  `birthday` datetime DEFAULT NULL COMMENT '会员生日',
  `user_level` tinyint(4) unsigned NOT NULL DEFAULT '1' COMMENT '会员级别:1普通会员,2青铜会员,3白银会员,4黄金会员,5钻石会员',
  `user_money` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '用户余额',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(1) DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `insun_ucenter_login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='用户扩展信息表';

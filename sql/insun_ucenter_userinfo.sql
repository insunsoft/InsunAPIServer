/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 20:43:53
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
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='用户扩展信息表';

-- ----------------------------
-- Records of insun_ucenter_userinfo
-- ----------------------------
INSERT INTO `insun_ucenter_userinfo` VALUES ('1', '35', '陈剑', 'insunsoft', '951241056@qq.com', '951241056', '1', '432322197408017913', '0', '0', '0', '1', null, '1', '0.00', '2019-06-10 18:35:22', '2019-06-10 20:41:50', '1');
INSERT INTO `insun_ucenter_userinfo` VALUES ('2', '36', '肖博', 'xiaobo', null, null, '1', null, null, '0', '0', '0', null, '1', '0.00', '2019-06-10 18:35:36', '2019-06-10 18:35:36', '1');
INSERT INTO `insun_ucenter_userinfo` VALUES ('3', '34', '陈艺璇', 'chenyixuan', null, null, '1', null, null, '0', '0', '0', null, '1', '0.00', '2019-06-10 18:36:09', '2019-06-10 18:36:09', '1');

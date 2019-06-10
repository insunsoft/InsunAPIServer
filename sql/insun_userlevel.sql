/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 13:53:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_userlevel
-- ----------------------------
DROP TABLE IF EXISTS `insun_userlevel`;
CREATE TABLE `insun_userlevel` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `levelname` varchar(50) DEFAULT NULL COMMENT '真实姓名',
  `min_point` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '该级别最低积分',
  `max_point` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '该级别最高积分',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `levelname` (`levelname`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='会员级别表';

-- ----------------------------
-- Records of insun_userlevel
-- ----------------------------
INSERT INTO `insun_userlevel` VALUES ('1', '普通会员', '0', '1000', '2019-06-10 13:47:34', '2019-06-10 13:51:18', '1');
INSERT INTO `insun_userlevel` VALUES ('2', '黑铁会员', '1001', '3000', '2019-06-10 13:48:54', '2019-06-10 13:51:29', '1');
INSERT INTO `insun_userlevel` VALUES ('3', '灰锡会员', '3001', '7000', '2019-06-10 13:49:24', '2019-06-10 13:51:48', '1');
INSERT INTO `insun_userlevel` VALUES ('4', '青铜会员', '7001', '15000', '2019-06-10 13:49:40', '2019-06-10 13:51:58', '1');
INSERT INTO `insun_userlevel` VALUES ('5', '白银会员', '15001', '31000', '2019-06-10 13:50:04', '2019-06-10 13:52:08', '1');
INSERT INTO `insun_userlevel` VALUES ('6', '黄金会员', '31001', '64000', '2019-06-10 13:50:29', '2019-06-10 13:52:23', '1');
INSERT INTO `insun_userlevel` VALUES ('7', '钻石会员', '64001', '100000', '2019-06-10 13:51:08', '2019-06-10 13:52:48', '1');

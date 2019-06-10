/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 20:50:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_ucenter_friend
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_friend`;
CREATE TABLE `insun_ucenter_friend` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `friend_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COMMENT='用户好友表';

-- ----------------------------
-- Records of insun_ucenter_friend
-- ----------------------------
INSERT INTO `insun_ucenter_friend` VALUES ('8', '35', '36', '2019-06-10 18:36:39', '2019-06-10 18:36:39', '1');
INSERT INTO `insun_ucenter_friend` VALUES ('9', '35', '34', '2019-06-10 18:36:54', '2019-06-10 18:37:11', '1');

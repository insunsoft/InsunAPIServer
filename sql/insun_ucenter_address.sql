/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 20:57:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_ucenter_address
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_address`;
CREATE TABLE `insun_ucenter_address` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `zip` smallint(6) unsigned NOT NULL COMMENT '邮编',
  `recipientname` varchar(30) NOT NULL COMMENT '接收收件人',
  `recipientmobile` varchar(200) NOT NULL COMMENT '接收收件人电话',
  `province` smallint(6) NOT NULL COMMENT '地区表中省份的ID',
  `city` smallint(6) NOT NULL COMMENT '地区表中城市的ID',
  `district` smallint(6) NOT NULL COMMENT '地区表中的区ID',
  `address` varchar(200) NOT NULL COMMENT '具体的地址门牌号',
  `is_default` tinyint(4) unsigned NOT NULL DEFAULT '0' COMMENT '是否默认',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='用户地址表';

-- ----------------------------
-- Records of insun_ucenter_address
-- ----------------------------

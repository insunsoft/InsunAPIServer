/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 14:05:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_userpoint
-- ----------------------------
DROP TABLE IF EXISTS `insun_userpoint`;
CREATE TABLE `insun_userpoint` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) NOT NULL COMMENT '外键，关联user表的自增ID',
  `source` tinyint(11) NOT NULL COMMENT '积分来源:0订单,1登录,2活动',
  `refer_number` int(11) NOT NULL DEFAULT '0' COMMENT '积分来源相关编号',
  `change_point` smallint(11) NOT NULL DEFAULT '0' COMMENT '变更积分数',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户积分日志表';

-- ----------------------------
-- Records of insun_userpoint
-- ----------------------------

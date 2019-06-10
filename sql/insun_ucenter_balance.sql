/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 20:54:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_ucenter_balance
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_balance`;
CREATE TABLE `insun_ucenter_balance` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `source` tinyint(1) NOT NULL DEFAULT '1' COMMENT '记录来源:1订单,2退货单',
  `source_sn` int(11) unsigned NOT NULL COMMENT '相关单据ID',
  `amount` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '变动金额',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户余额变动表';

-- ----------------------------
-- Records of insun_ucenter_balance
-- ----------------------------

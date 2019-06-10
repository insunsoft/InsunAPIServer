/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 21:08:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_docment_columns
-- ----------------------------
DROP TABLE IF EXISTS `insun_docment_columns`;
CREATE TABLE `insun_docment_columns` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `columnname` varchar(200) NOT NULL COMMENT '栏目名称',
  `order` smallint(4) unsigned NOT NULL DEFAULT '10' COMMENT '排序',
  `parent_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '上级栏目编号',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='文档栏目列表';

-- ----------------------------
-- Records of insun_docment_columns
-- ----------------------------

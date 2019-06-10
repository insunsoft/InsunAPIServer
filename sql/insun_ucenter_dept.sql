/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 20:53:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_ucenter_dept
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_dept`;
CREATE TABLE `insun_ucenter_dept` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `deptname` varchar(80) NOT NULL COMMENT '部门名称',
  `parent_id` int(11) unsigned DEFAULT '0' COMMENT '分级',
  `order` smallint(2) unsigned DEFAULT '10' COMMENT '排序',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(2) unsigned DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COMMENT='部门列表';

-- ----------------------------
-- Records of insun_ucenter_dept
-- ----------------------------
INSERT INTO `insun_ucenter_dept` VALUES ('1', '南县卫健局', '0', '0', '1981-09-28 00:00:00', '1981-09-28 00:00:00', '1');
INSERT INTO `insun_ucenter_dept` VALUES ('2', '南县卫健局机关', '0', '1', '1981-05-01 00:00:00', '1981-09-28 00:00:00', '1');
INSERT INTO `insun_ucenter_dept` VALUES ('3', '南县人民医院', '0', '1', '1981-06-09 00:00:00', '1981-09-28 00:00:00', '1');
INSERT INTO `insun_ucenter_dept` VALUES ('4', '南县中医医院', '0', '1', '1987-06-13 00:00:00', '2019-06-10 18:01:06', '1');
INSERT INTO `insun_ucenter_dept` VALUES ('5', '医政医管股', '2', '10', '2019-06-10 18:01:23', '2019-06-10 18:01:23', '1');

/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 13:03:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_groups
-- ----------------------------
DROP TABLE IF EXISTS `insun_groups`;
CREATE TABLE `insun_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groupname` varchar(200) NOT NULL COMMENT '群组名称',
  `order` int(11) NOT NULL DEFAULT '10' COMMENT '排序',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='群组列表';

-- ----------------------------
-- Records of insun_groups
-- ----------------------------
INSERT INTO `insun_groups` VALUES ('1', '党组成员', '1', '1981-09-28 00:00:00', '1981-09-28 00:00:00', '1');
INSERT INTO `insun_groups` VALUES ('2', '局机关全体干部', '2', '1981-05-01 00:00:00', '2019-06-06 12:28:13', '1');
INSERT INTO `insun_groups` VALUES ('3', '局机关股室长', '3', '1981-06-09 00:00:00', '2019-06-06 12:28:15', '1');
INSERT INTO `insun_groups` VALUES ('4', '二级单位一把手', '4', '1987-06-13 00:00:00', '2019-06-06 12:28:18', '1');
INSERT INTO `insun_groups` VALUES ('5', '卫健系统全体人员', '5', '1987-06-13 00:00:00', '2019-06-06 12:28:20', '1');
INSERT INTO `insun_groups` VALUES ('6', '防疫专干', '6', '1987-06-13 00:00:00', '2019-06-06 12:28:21', '1');
INSERT INTO `insun_groups` VALUES ('7', '妇幼专干', '7', '1987-06-13 00:00:00', '2019-06-06 12:28:23', '1');
INSERT INTO `insun_groups` VALUES ('8', '儿保专干', '8', '1987-06-13 00:00:00', '2019-06-06 12:28:27', '1');

/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 11:36:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_comment
-- ----------------------------
DROP TABLE IF EXISTS `insun_comment`;
CREATE TABLE `insun_comment` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '评论编号',
  `article_id` int(10) NOT NULL COMMENT '文章编号',
  `content` varchar(2000) NOT NULL DEFAULT '' COMMENT '评论内容',
  `user_id` int(10) NOT NULL COMMENT '评论人员',
  `parent_id` int(10) NOT NULL DEFAULT '0' COMMENT '上级评论编号',
  PRIMARY KEY (`id`),
  UNIQUE KEY `_index` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评论列表';

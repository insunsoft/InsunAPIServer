/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 21:11:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_docment_article
-- ----------------------------
DROP TABLE IF EXISTS `insun_docment_article`;
CREATE TABLE `insun_docment_article` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL COMMENT 'user自增主键ID',
  `article_ip` varchar(15) NOT NULL COMMENT '发布IP',
  `article_name` varchar(128) NOT NULL COMMENT '文章标题',
  `columns_id` int(11) unsigned NOT NULL COMMENT '外键，关联columns表的自增ID',
  `article_type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '文章的模式:0为私有，1为公开，2为仅好友查看',
  `article_content` text NOT NULL COMMENT '文章内容',
  `article_up` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否置顶:0为否，1为是',
  `article_support` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否博主推荐:0为否，1为是',
  `article_click` int(10) unsigned NOT NULL COMMENT '查看人数',
  `article_like` int(10) unsigned NOT NULL COMMENT '点赞人数',
  `article_unlike` int(10) unsigned NOT NULL COMMENT '点踩人数',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='文章表';

-- ----------------------------
-- Records of insun_docment_article
-- ----------------------------

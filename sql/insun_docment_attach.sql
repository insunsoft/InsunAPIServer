/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 21:09:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_docment_attach
-- ----------------------------
DROP TABLE IF EXISTS `insun_docment_attach`;
CREATE TABLE `insun_docment_attach` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '用户ID',
  `file_name` char(100) NOT NULL DEFAULT '' COMMENT '文件名称',
  `file_path` char(200) NOT NULL DEFAULT '' COMMENT '文件路径',
  `mime_type` char(50) NOT NULL DEFAULT '' COMMENT '文件类型',
  `file_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '文件大小KB',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='上传附件列表';

-- ----------------------------
-- Records of insun_docment_attach
-- ----------------------------

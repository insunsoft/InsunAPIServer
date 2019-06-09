/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 10:36:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for insun_depts
-- ----------------------------
DROP TABLE IF EXISTS `insun_depts`;
CREATE TABLE `insun_depts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deptname` varchar(30) NOT NULL COMMENT '部门名称',
  `parent_id` int(2) DEFAULT '0' COMMENT '分级',
  `order` int(11) DEFAULT '10' COMMENT '排序',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='部门列表';

-- ----------------------------
-- Table structure for insun_groups
-- ----------------------------
DROP TABLE IF EXISTS `insun_groups`;
CREATE TABLE `insun_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groupname` varchar(30) NOT NULL COMMENT '群组名称',
  `order` int(11) DEFAULT '10' COMMENT '排序',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='群组列表';

-- ----------------------------
-- Table structure for insun_users
-- ----------------------------
DROP TABLE IF EXISTS `insun_users`;
CREATE TABLE `insun_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `social_uid` varchar(256) DEFAULT NULL COMMENT '第三方登陆用户 ID',
  `social_token` varchar(256) DEFAULT NULL COMMENT '第三方登陆用户的令牌',
  `username` varchar(50) DEFAULT NULL COMMENT '用户名',
  `nickname` varchar(50) DEFAULT NULL COMMENT '用户昵称',
  `mobile` varchar(50) DEFAULT NULL COMMENT '手机号',
  `email` varchar(20) DEFAULT NULL COMMENT '邮箱',
  `password` varchar(128) DEFAULT NULL COMMENT '密码',
  `uuid` varchar(128) DEFAULT NULL COMMENT '客户端唯一标识号',
  `push_token` varchar(2000) DEFAULT NULL COMMENT '推送的令牌',
  `sex` int(2) DEFAULT NULL COMMENT '性别(0->男, 1->女)',
  `source` int(2) DEFAULT NULL COMMENT '用户注册来源(0->iPhone, 1->iPad, 2->Android, 3->微信, 4->H5, 5->网站)',
  `social_source` int(11) DEFAULT '0' COMMENT '第三方登录来源(0->手机, 1->微信, 2->QQ)',
  `avatar` varchar(128) DEFAULT NULL COMMENT '头像',
  `lng` float DEFAULT '0' COMMENT '经度',
  `lat` float DEFAULT '0' COMMENT '纬度',
  `province` varchar(50) DEFAULT NULL COMMENT '省',
  `city` varchar(50) DEFAULT NULL COMMENT '城市',
  `area` varchar(50) DEFAULT NULL COMMENT '区',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `mobile` (`mobile`),
  UNIQUE KEY `uuid` (`uuid`),
  UNIQUE KEY `social_uid` (`social_uid`,`social_source`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;

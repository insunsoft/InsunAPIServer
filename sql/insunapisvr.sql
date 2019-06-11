/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-11 12:01:33
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章表';

-- ----------------------------
-- Records of insun_docment_article
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文档栏目列表';

-- ----------------------------
-- Records of insun_docment_columns
-- ----------------------------

-- ----------------------------
-- Table structure for insun_docment_comment
-- ----------------------------
DROP TABLE IF EXISTS `insun_docment_comment`;
CREATE TABLE `insun_docment_comment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '评论编号',
  `article_id` int(10) NOT NULL COMMENT '文章编号',
  `content` varchar(2000) NOT NULL DEFAULT '' COMMENT '评论内容',
  `user_id` int(10) NOT NULL COMMENT '评论人员',
  `parent_id` int(10) NOT NULL DEFAULT '0' COMMENT '上级评论编号',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `_index` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评论列表';

-- ----------------------------
-- Records of insun_docment_comment
-- ----------------------------

-- ----------------------------
-- Table structure for insun_system_log
-- ----------------------------
DROP TABLE IF EXISTS `insun_system_log`;
CREATE TABLE `insun_system_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) NOT NULL COMMENT '外键，关联user表的自增ID',
  `login_ip` varchar(200) NOT NULL COMMENT '登录IP',
  `api_url` varchar(2000) NOT NULL COMMENT '访问API携带数据',
  `memo` varchar(2000) NOT NULL COMMENT '备注信息',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户操作日志表';

-- ----------------------------
-- Records of insun_system_log
-- ----------------------------

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户地址表';

-- ----------------------------
-- Records of insun_ucenter_address
-- ----------------------------

-- ----------------------------
-- Table structure for insun_ucenter_attention
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_attention`;
CREATE TABLE `insun_ucenter_attention` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `attention_id` int(11) unsigned NOT NULL COMMENT '外键，关联article表的自增ID',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `_index` (`id`,`user_id`,`attention_id`) USING BTREE,
  KEY `key_id` (`user_id`),
  CONSTRAINT `key_id` FOREIGN KEY (`user_id`) REFERENCES `insun_ucenter_login` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户关注表';

-- ----------------------------
-- Records of insun_ucenter_attention
-- ----------------------------

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

-- ----------------------------
-- Table structure for insun_ucenter_friend
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_friend`;
CREATE TABLE `insun_ucenter_friend` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `friend_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COMMENT='用户好友表';

-- ----------------------------
-- Records of insun_ucenter_friend
-- ----------------------------
INSERT INTO `insun_ucenter_friend` VALUES ('8', '35', '36', '2019-06-10 18:36:39', '2019-06-10 18:36:39', '1');
INSERT INTO `insun_ucenter_friend` VALUES ('9', '35', '34', '2019-06-10 18:36:54', '2019-06-10 18:37:11', '1');

-- ----------------------------
-- Table structure for insun_ucenter_group
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_group`;
CREATE TABLE `insun_ucenter_group` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `groupname` varchar(200) NOT NULL COMMENT '群组名称',
  `order` int(11) unsigned NOT NULL DEFAULT '10' COMMENT '排序',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='群组列表';

-- ----------------------------
-- Records of insun_ucenter_group
-- ----------------------------
INSERT INTO `insun_ucenter_group` VALUES ('1', '党组成员', '1', '1981-09-28 00:00:00', '1981-09-28 00:00:00', '1');
INSERT INTO `insun_ucenter_group` VALUES ('2', '局机关全体干部', '2', '1981-05-01 00:00:00', '2019-06-06 12:28:13', '1');
INSERT INTO `insun_ucenter_group` VALUES ('3', '局机关股室长', '3', '1981-06-09 00:00:00', '2019-06-06 12:28:15', '1');
INSERT INTO `insun_ucenter_group` VALUES ('4', '二级单位一把手', '4', '1987-06-13 00:00:00', '2019-06-06 12:28:18', '1');
INSERT INTO `insun_ucenter_group` VALUES ('5', '卫健系统全体人员', '5', '1987-06-13 00:00:00', '2019-06-06 12:28:20', '1');
INSERT INTO `insun_ucenter_group` VALUES ('6', '防疫专干', '6', '1987-06-13 00:00:00', '2019-06-06 12:28:21', '1');
INSERT INTO `insun_ucenter_group` VALUES ('7', '妇幼专干', '7', '1987-06-13 00:00:00', '2019-06-06 12:28:23', '1');
INSERT INTO `insun_ucenter_group` VALUES ('8', '儿保专干', '8', '1987-06-13 00:00:00', '2019-06-06 12:28:27', '1');

-- ----------------------------
-- Table structure for insun_ucenter_level
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_level`;
CREATE TABLE `insun_ucenter_level` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `levelname` varchar(50) DEFAULT NULL COMMENT '真实姓名',
  `min_point` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '该级别最低积分',
  `max_point` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '该级别最高积分',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `levelname` (`levelname`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='会员级别表';

-- ----------------------------
-- Records of insun_ucenter_level
-- ----------------------------
INSERT INTO `insun_ucenter_level` VALUES ('1', '普通会员', '0', '1000', '2019-06-10 13:47:34', '2019-06-10 13:51:18', '1');
INSERT INTO `insun_ucenter_level` VALUES ('2', '黑铁会员', '1001', '3000', '2019-06-10 13:48:54', '2019-06-10 13:51:29', '1');
INSERT INTO `insun_ucenter_level` VALUES ('3', '灰锡会员', '3001', '7000', '2019-06-10 13:49:24', '2019-06-10 13:51:48', '1');
INSERT INTO `insun_ucenter_level` VALUES ('4', '青铜会员', '7001', '15000', '2019-06-10 13:49:40', '2019-06-10 13:51:58', '1');
INSERT INTO `insun_ucenter_level` VALUES ('5', '白银会员', '15001', '31000', '2019-06-10 13:50:04', '2019-06-10 13:52:08', '1');
INSERT INTO `insun_ucenter_level` VALUES ('6', '黄金会员', '31001', '64000', '2019-06-10 13:50:29', '2019-06-10 13:52:23', '1');
INSERT INTO `insun_ucenter_level` VALUES ('7', '钻石会员', '64001', '100000', '2019-06-10 13:51:08', '2019-06-10 13:52:48', '1');

-- ----------------------------
-- Table structure for insun_ucenter_login
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_login`;
CREATE TABLE `insun_ucenter_login` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `loginname` varchar(50) DEFAULT NULL COMMENT '用户名',
  `password` varchar(128) DEFAULT NULL COMMENT '密码',
  `uuid` varchar(128) DEFAULT NULL COMMENT '客户端唯一标识号',
  `push_token` varchar(200) DEFAULT NULL COMMENT '推送的令牌',
  `avatar` varchar(200) DEFAULT NULL COMMENT '头像',
  `source` tinyint(2) unsigned DEFAULT '2' COMMENT '用户注册来源(0->iPhone, 1->iPad, 2->Android, 3->微信, 4->H5, 5->网站)',
  `social_source` tinyint(2) unsigned DEFAULT '0' COMMENT '第三方登录来源(0->手机, 1->微信, 2->QQ)',
  `social_uid` varchar(256) DEFAULT NULL COMMENT '第三方登陆用户 ID',
  `social_token` varchar(256) DEFAULT NULL COMMENT '第三方登陆用户的令牌',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态(0-失效 1-正常)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `social_uid` (`social_uid`,`social_source`),
  UNIQUE KEY `base` (`id`,`loginname`,`password`,`avatar`,`status`) USING BTREE,
  UNIQUE KEY `uuid` (`uuid`,`push_token`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of insun_ucenter_login
-- ----------------------------
INSERT INTO `insun_ucenter_login` VALUES ('26', 'insunsoft', '1d0b96f8028b0b3f3dfd8e74bf4b5c3d', '7c63537e-0665-747d-343d-b80d34bece79', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaW5zdW5zb2Z0IiwiaWF0IjoxNTYwMDYxNDc4LCJleHAiOjE1NjM2NjE0Nzh9.byRrp_1I-ao0EtLWRqxLWozI2Bv2r8uzffisZFzHJ-I', 'https://s2.ax1x.com/2019/06/07/V0tI4s.png', null, '0', null, null, '2019-06-07 20:18:38', '2019-06-09 14:24:38', '1');
INSERT INTO `insun_ucenter_login` VALUES ('34', 'chenjian', '41fbe51127116e65b8c2724049902944', 'f319d36b-166c-7ff8-ed57-8d802015fc6d', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6ZmI5YmRMyIsIm1vYmlsZSI6IjE1OTA3Mzc1MjU1IiwiaWF0IjoxNTU5OTE2Mjc0LCJleHAiOjE1NjM1MTYyNzR9.AgYrYKifd7ZpjT3C0seLRcVJv2B6HzAvX0VpfLEc8fQ', 'https://s2.ax1x.com/2019/06/07/V0tI4s.png', null, '0', null, '', '2019-06-07 22:04:34', '2019-06-07 22:53:36', '1');
INSERT INTO `insun_ucenter_login` VALUES ('35', '15907375251', '41fbe51127116e65b8c2724049902944', '8a19f685-0776-9e64-c66f-ef2f849ef45f', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6ZmI5YmRIiwiaWF0IjoxNTU5OTk1MTYwLCJleHAiOjE1NjM1OTUxNjB9.TIlmvCzFJaWagjot1M1jJvRx_I0nSbsg9uiyzicC9GY', 'https://s2.ax1x.com/2019/06/07/V0tI4s.png', null, '0', null, null, '2019-06-08 19:59:20', '2019-06-10 18:34:30', '1');
INSERT INTO `insun_ucenter_login` VALUES ('36', '75907375252', '41fbe51127116e65b8c2724049902944', '5edc3bfa-e340-6598-8b81-dc73df1935f9', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6IKW5Y2aIiwiaWF0IjoxNTU5OTk1Njg4LCJleHAiOjE1NjM1OTU2ODh9.wZTfrVBIaRwokhwiRfmk3FZItHE-n54LOCnzjY1x0Vc', 'https://s2.ax1x.com/2019/06/07/V0tI4s.png', null, '0', null, null, '2019-06-08 20:08:08', '2019-06-10 18:34:38', '1');

-- ----------------------------
-- Table structure for insun_ucenter_message
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_message`;
CREATE TABLE `insun_ucenter_message` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `send_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `message_topic` varchar(64) NOT NULL COMMENT '私信标题',
  `message_content` varchar(255) NOT NULL COMMENT '私信内容',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态 0-失效 1-正常',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户私信表';

-- ----------------------------
-- Records of insun_ucenter_message
-- ----------------------------

-- ----------------------------
-- Table structure for insun_ucenter_point
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_point`;
CREATE TABLE `insun_ucenter_point` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL COMMENT '外键，关联user表的自增ID',
  `source` tinyint(2) unsigned NOT NULL COMMENT '积分来源:0订单,1登录,2活动',
  `refer_number` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '积分来源相关编号',
  `change_point` smallint(2) unsigned NOT NULL DEFAULT '0' COMMENT '变更积分数',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户积分日志表';

-- ----------------------------
-- Records of insun_ucenter_point
-- ----------------------------

-- ----------------------------
-- Table structure for insun_ucenter_userinfo
-- ----------------------------
DROP TABLE IF EXISTS `insun_ucenter_userinfo`;
CREATE TABLE `insun_ucenter_userinfo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
  `user_id` int(11) unsigned NOT NULL,
  `username` varchar(50) DEFAULT NULL COMMENT '真实姓名',
  `nickname` varchar(50) DEFAULT NULL COMMENT '用户昵称',
  `email` varchar(20) DEFAULT NULL COMMENT '邮箱',
  `qq` varchar(20) DEFAULT NULL COMMENT 'QQ号码',
  `identity_card_type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '证件类型：1 身份证,2军官证,3护照',
  `identity_card_no` varchar(20) DEFAULT NULL COMMENT '证件号码',
  `sex` int(1) unsigned DEFAULT NULL COMMENT '性别(0->男, 1->女)',
  `lng` float(10,0) DEFAULT '0' COMMENT '经度',
  `lat` float(10,0) DEFAULT '0' COMMENT '纬度',
  `user_point` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户积分',
  `birthday` datetime DEFAULT NULL COMMENT '会员生日',
  `user_level` tinyint(4) unsigned NOT NULL DEFAULT '1' COMMENT '会员级别:1普通会员,2青铜会员,3白银会员,4黄金会员,5钻石会员',
  `user_money` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '用户余额',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(1) DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='用户扩展信息表';

-- ----------------------------
-- Records of insun_ucenter_userinfo
-- ----------------------------
INSERT INTO `insun_ucenter_userinfo` VALUES ('1', '35', '陈剑', 'insunsoft', '951241056@qq.com', '951241056', '1', '432322197408017913', '0', '0', '0', '1', null, '1', '0.00', '2019-06-10 18:35:22', '2019-06-10 20:41:50', '1');
INSERT INTO `insun_ucenter_userinfo` VALUES ('2', '36', '肖博', 'xiaobo', null, null, '1', null, null, '0', '0', '0', null, '1', '0.00', '2019-06-10 18:35:36', '2019-06-10 18:35:36', '1');
INSERT INTO `insun_ucenter_userinfo` VALUES ('3', '34', '陈艺璇', 'chenyixuan', null, null, '1', null, null, '0', '0', '0', null, '1', '0.00', '2019-06-10 18:36:09', '2019-06-10 18:36:09', '1');

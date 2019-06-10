/*
Navicat MySQL Data Transfer

Source Server         : insunserver
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : insunapisvr

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-06-10 20:36:53
*/

SET FOREIGN_KEY_CHECKS=0;

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
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`loginname`),
  UNIQUE KEY `uuid` (`uuid`),
  UNIQUE KEY `social_uid` (`social_uid`,`social_source`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of insun_ucenter_login
-- ----------------------------
INSERT INTO `insun_ucenter_login` VALUES ('26', 'insunsoft', '1d0b96f8028b0b3f3dfd8e74bf4b5c3d', '7c63537e-0665-747d-343d-b80d34bece79', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaW5zdW5zb2Z0IiwiaWF0IjoxNTYwMDYxNDc4LCJleHAiOjE1NjM2NjE0Nzh9.byRrp_1I-ao0EtLWRqxLWozI2Bv2r8uzffisZFzHJ-I', 'https://s2.ax1x.com/2019/06/07/V0tI4s.png', null, '0', null, null, '2019-06-07 20:18:38', '2019-06-09 14:24:38', '1');
INSERT INTO `insun_ucenter_login` VALUES ('34', 'chenjian', '41fbe51127116e65b8c2724049902944', 'f319d36b-166c-7ff8-ed57-8d802015fc6d', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6ZmI5YmRMyIsIm1vYmlsZSI6IjE1OTA3Mzc1MjU1IiwiaWF0IjoxNTU5OTE2Mjc0LCJleHAiOjE1NjM1MTYyNzR9.AgYrYKifd7ZpjT3C0seLRcVJv2B6HzAvX0VpfLEc8fQ', 'https://s2.ax1x.com/2019/06/07/V0tI4s.png', null, '0', null, '', '2019-06-07 22:04:34', '2019-06-07 22:53:36', '1');
INSERT INTO `insun_ucenter_login` VALUES ('35', '15907375251', '41fbe51127116e65b8c2724049902944', '8a19f685-0776-9e64-c66f-ef2f849ef45f', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6ZmI5YmRIiwiaWF0IjoxNTU5OTk1MTYwLCJleHAiOjE1NjM1OTUxNjB9.TIlmvCzFJaWagjot1M1jJvRx_I0nSbsg9uiyzicC9GY', 'https://s2.ax1x.com/2019/06/07/V0tI4s.png', null, '0', null, null, '2019-06-08 19:59:20', '2019-06-10 18:34:30', '1');
INSERT INTO `insun_ucenter_login` VALUES ('36', '75907375252', '41fbe51127116e65b8c2724049902944', '5edc3bfa-e340-6598-8b81-dc73df1935f9', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6IKW5Y2aIiwiaWF0IjoxNTU5OTk1Njg4LCJleHAiOjE1NjM1OTU2ODh9.wZTfrVBIaRwokhwiRfmk3FZItHE-n54LOCnzjY1x0Vc', 'https://s2.ax1x.com/2019/06/07/V0tI4s.png', null, '0', null, null, '2019-06-08 20:08:08', '2019-06-10 18:34:38', '1');

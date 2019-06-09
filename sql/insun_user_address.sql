-- ----------------------------
-- Table structure for insun_user_address
--sequelize-auto -h localhost -d insunapisvr -u root -x 168168 -p 3306 -t insun_user_address
-- ----------------------------
DROP TABLE IF EXISTS `insun_user_address`;
CREATE TABLE `insun_user_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL COMMENT '收件人姓名',
  `mobile` varchar(20) NOT NULL COMMENT '手机号',
  `province` varchar(20) DEFAULT NULL COMMENT '省',
  `city` varchar(20) DEFAULT NULL COMMENT '市',
  `country` varchar(20) DEFAULT NULL COMMENT '区',
  `detail` varchar(100) DEFAULT NULL COMMENT '详细地址',
  'isdefault' int(2) DEFAULT 0 COMMENT '是否默认(0->非, 1->默认)'
  `user_id` int(11) NOT NULL COMMENT '外键',
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  status int(2) DEFAULT 1 COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4  COMMENT='物流地址';
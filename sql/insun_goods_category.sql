-- ----------------------------
-- Table structure for insun_goods_category
 --sequelize-auto -h localhost -d insunapisvr -u root -x 168168 -p 3306 -t insun_goods_category
-- ----------------------------
DROP TABLE IF EXISTS `insun_goods_category`;
CREATE TABLE `insun_goods_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_category_name` varchar(50) NOT NULL COMMENT '分类名称',
  `order` int(11) DEFAULT 10 COMMENT '排序', 
  `topic_img_id` int(11) DEFAULT NULL COMMENT '外键，关联image表',
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  status int(2) DEFAULT 1 COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COMMENT='商品类目';
DROP TABLE IF EXISTS `insun_columns`;
CREATE TABLE `insun_columns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `columnname` varchar(200) NOT NULL COMMENT '栏目名称',
  `order` int(11) NOT NULL DEFAULT '10' COMMENT '排序',
  `parent_id` int(11) NOT NULL DEFAULT '0' COMMENT '上级栏目编号',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态(0-失效，1-正常)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='文档栏目列表';
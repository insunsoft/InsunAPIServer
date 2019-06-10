
DROP TABLE IF EXISTS insun_userlevel;

CREATE TABLE insun_userlevel(

`id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
`levelname` varchar(50) DEFAULT NULL UNIQUE COMMENT '真实姓名',
  `min_point` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '该级别最低积分',
  `max_point` int(11) unsigned NOT NULL DEFAULT 0 COMMENT '该级别最高积分',
`created_at` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
`status` int(2) DEFAULT 1 COMMENT '状态(0-时效，1-正常)',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4  COMMENT='会员级别表';




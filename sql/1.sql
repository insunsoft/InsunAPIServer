
DROP TABLE IF EXISTS insun_userlog;
CREATE TABLE insun_userlog(
`id` int(11)  NOT NULL AUTO_INCREMENT COMMENT '自增主键ID',
`user_id` int(11) NOT NULL COMMENT '外键，关联user表的自增ID',
`login_ip` varchar(200)  NOT NULL COMMENT '登录IP',
`api_url` varchar(2000)  NOT NULL COMMENT '访问API携带数据',
`memo` varchar(2000)  NOT NULL COMMENT '备注信息',
`created_at` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
`updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
`status` int(2) DEFAULT '1' COMMENT '状态(0-时效，1-正常)',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4  COMMENT='用户操作日志表';

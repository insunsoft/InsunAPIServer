  /* ----------------------------
  -- Table structure for  群组列表
  --sequelize-auto -h localhost -d insunapisvr -u root -x 168168 -p 3306 -t insun_groups
  -- ----------------------------
*/
DROP TABLE IF EXISTS `insun_groups`;
CREATE TABLE `insun_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `groupname` varchar(30) NOT NULL COMMENT '群组名称',
  `order` int(11) DEFAULT 10 COMMENT '排序', 
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  status int(2) DEFAULT 1 COMMENT '状态(0-时效，1-正常)',
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4   COMMENT='群组列表';


insert into insun_groups values(1,'党组成员',1,'1981-09-28','1981-09-28',1);
insert into insun_groups values(2,'局机关全体干部',1,'1981-05-01','1981-09-28',1);
insert into insun_groups values(3,'局机关股室长',1,'1981-06-09','1981-09-28',1);
insert into insun_groups values(4,'二级单位一把手',1,'1987-06-13','1981-09-28',1);
insert into insun_groups values(5,'卫健系统全体人员',1,'1987-06-13','1981-09-28',1);
insert into insun_groups values(6,'防疫专干',1,'1987-06-13','1981-09-28',1);
insert into insun_groups values(7,'妇幼专干',1,'1987-06-13','1981-09-28',1);
insert into insun_groups values(8,'儿保专干',1,'1987-06-13','1981-09-28',1);
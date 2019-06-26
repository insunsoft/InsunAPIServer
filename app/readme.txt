/* 
 ==================需求说明===========================

 底部tabbar采用中部凸显样式
 参考来源 https://github.com/han-guang-chuan/uni-app-tabber

 底部tabbar分为五个项目，依次分为
 1-首页，2-资讯。3-收发，4-休闲，5-我的
 主要连接五个tab页面。放置在/pages/tabbar
 
 1-首页 /pages/tabbar/index
 
 infomation
 
 
 
 
 
 */


DROP TABLE IF EXISTS `insun_users`;
CREATE TABLE `insun_users` (
  `userid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `companyid` mediumint(8) unsigned NOT NULL COMMENT '单位id',
  `pid` mediumint(8) NOT NULL COMMENT '父id',
  `username` char(20) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` char(32) NOT NULL DEFAULT '' COMMENT '密码',
  `nickname` char(20) NOT NULL DEFAULT '' COMMENT '昵称',
  `regdate` int(10) unsigned NOT NULL COMMENT '注册时间',
  `lastdate` int(10) unsigned NOT NULL COMMENT '最后一次登录时间',
  `regip` char(15) NOT NULL DEFAULT '' COMMENT '注册ip',
  `lastip` char(15) NOT NULL DEFAULT '' COMMENT '最后一次登录ip',
  `loginnum` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '登录次数',
  `email` char(32) NOT NULL DEFAULT '' COMMENT '邮箱',
  `mobile` char(11) NOT NULL DEFAULT '' COMMENT '手机号码',
  `islock` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否锁定',
  `vip` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否会员',
  `overduedate` int(10) unsigned NOT NULL COMMENT '账户过期时间',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态-用于软删除',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username` (`username`) USING BTREE,
  KEY `email` (`email`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
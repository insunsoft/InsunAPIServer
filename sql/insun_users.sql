  -- ----------------------------
  -- Table structure for  用户表
  --sequelize-auto -h localhost -d insunapisvr -u root -x 168168 -p 3306 -t insun_users
  -- ----------------------------
DROP TABLE IF EXISTS insun_users;

CREATE TABLE insun_users(

id int(11) NOT NULL AUTO_INCREMENT,

social_uid varchar(256) COMMENT '第三方登陆用户 ID',

social_token varchar(256) COMMENT '第三方登陆用户的令牌',

username varchar(50) DEFAULT NULL UNIQUE COMMENT '用户名',

nickname varchar(50) DEFAULT NULL COMMENT '用户昵称',

mobile varchar(50) DEFAULT NULL UNIQUE COMMENT '手机号',

email varchar(20) DEFAULT NULL COMMENT '邮箱',

password varchar(128) DEFAULT NULL COMMENT '密码',

uuid varchar(128) DEFAULT NULL UNIQUE COMMENT '客户端唯一标识号',

push_token varchar(128) DEFAULT NULL COMMENT '推送的令牌',

sex int(2) DEFAULT NULL COMMENT '性别(0->男, 1->女)',

source int(2) DEFAULT null COMMENT '用户注册来源(0->iPhone, 1->iPad, 2->Android, 3->微信, 4->H5, 5->网站)',

social_source int(11) DEFAULT 0 COMMENT '第三方登录来源(0->手机, 1->微信, 2->QQ)',

avatar varchar(128) DEFAULT NULL COMMENT '头像',

lng float DEFAULT '0.0' COMMENT '经度',

lat float DEFAULT '0.0' COMMENT '纬度',

province varchar(50) DEFAULT NULL COMMENT '省',

city varchar(50) DEFAULT NULL COMMENT '城市',

area varchar(50) DEFAULT NULL COMMENT '区',

created_at timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',

updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',

status int(2) DEFAULT 1 COMMENT '状态(0-时效，1-正常)',

PRIMARY KEY (`id`),
UNIQUE (`social_uid`, `social_source`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4  COMMENT='用户列表';


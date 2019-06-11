 /* jshint indent: 2 */



/* 




const db = require('../config/DBConn')
const sequelize  = db.sequelize
var Sequelize = require('sequelize')
//var uuid = require('../../util/InsunUUID')

var user = Sequelize.define('insun_users', 
  
  {
    id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loginname: {
      type: Sequelize.STRING(50),
      allowNull: true,
      comment: '登录名称-限制使用手机号码登录,只允许数字'
    },
    password: {
      type: Sequelize.STRING(128),
      allowNull: true,

      comment: '登录密码-加密之后存储,只允许字母和数字'     
    },
    uuid: {
      type: Sequelize.STRING(128),
      allowNull: true,
      comment: 'UUID-唯一编码'    
    },
    push_token: {
      type: Sequelize.STRING(200),
      allowNull: true,
      comment: 'token-授权'  
    },
    avatar: {
      type: Sequelize.STRING(200),
      allowNull: true,
      comment: '用户图像-相对或绝对路径'  
    },
    source: {
      type: Sequelize.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '2',
      comment: '用户注册来源(0->iPhone, 1->iPad, 2->Android, 3->微信, 4->H5, 5->网站)'  
    },
    social_source: {
      type: Sequelize.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '0',
      comment: '第三方登录来源(0->手机, 1->微信, 2->QQ)'  
    },
    social_uid: {
      type: Sequelize.STRING(256),
      allowNull: true,
      comment: '第三方登陆用户 ID'  
    },
    social_token: {
      type: Sequelize.STRING(256),
      allowNull: true,
      comment: '第三方登陆用户的令牌'  
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: Sequelize.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1',
      comment: '状态(0-失效 1-正常)'  
    }
  }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
  });



module.exports = user;  */
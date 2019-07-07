'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// | 用途: 用户数据模块
// | 路径: ./models/User.js
// | 使用: 接受controllers层调用
// | 备注：已完成
// +----------------------------------------------------------------------

module.exports = function (sequelize, DataTypes) {
  const Users =  sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loginname: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
      comment: '登录名称-限制使用手机号码登录,只允许数字'
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: '登录密码-加密之后存储,只允许字母和数字'
    },
    user_id: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: 'UUID-唯一编码'
    },
    push_token: {
      type: DataTypes.STRING(300),
      allowNull: true,
      comment: 'token-授权'
    },
    role_level: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '0',
      comment: '用户全县(0->普通, 1->发布, 2->管理, 3->超级管理)'
    },
    avatar: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: '用户图像-相对或绝对路径'
    },
    source: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '2',
      comment: '用户注册来源(0->iPhone, 1->iPad, 2->Android, 3->微信, 4->H5, 5->网站)'
    },
    social_source: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '0',
      comment: '第三方登录来源(0->手机, 1->微信, 2->QQ)'
    },
    social_uid: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: '第三方登陆用户 ID'
    },
    social_token: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: '第三方登陆用户的令牌'
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '真实用户名称'
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '网络昵称'
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: '邮箱地址'
    },
    qq: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: 'QQ号码'
    },
    identity_card_type: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      comment: '证件类型'
    },
    identity_card_no: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: '证件编号'
    },
    sex: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      comment: '性别'
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: '位置'
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0',
      comment: '位置'
    },
    user_point: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: '积分'
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '生日'
    },
    user_level: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      comment: '登记'
    },
    user_money: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00',
      comment: '钱包'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1',
      comment: '状态(0-失效 1-正常)'
    }
  }, {
      freezeTableName: true,
      timestamps: false,
      tableName: 'insun_ucenter_user'
    });
  Users.associate = function (models) {
     //用户对应多条积分记录
     Users.hasMany(models.Points, {
      foreignKey: 'user_id'
    }) 
    // associations can be defined here
    Users.belongsTo(models.Groups,{
      foreignKey: 'group_id'
    }) 
   

    /*   users.hasMany(models.orders, {
      foreignKey: 'user_id'
    })
    users.belongsToMany(models.goods, {
      // as:'',
      foreignKey: 'user_id',
      through: {
        model: models.carts
      }
    }) */

  };


  return Users;
};



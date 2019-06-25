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
    users.hasMany(models.Points, {
      foreignKey: 'user_id'
    })
    // associations can be defined here
    /* users.belongsTo(models.carts,{
      foreignKey: 'user_id'
    }) */
  //用户对应多条积分记录

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






/*
validate: {
  is: ["^[a-z]+$",'i'],     // 只允许字母
  is: /^[a-z]+$/i,          // 与上一个示例相同,使用了真正的正则表达式
  not: ["[a-z]",'i'],       // 不允许字母
  isEmail: true,            // 检查邮件格式 (foo@bar.com)
  isUrl: true,              // 检查连接格式 (http://foo.com)
  isIP: true,               // 检查 IPv4 (129.89.23.1) 或 IPv6 格式
  isIPv4: true,             // 检查 IPv4 (129.89.23.1) 格式
  isIPv6: true,             // 检查 IPv6 格式
  isAlpha: true,            // 只允许字母
  isAlphanumeric: true,     // 只允许使用字母数字
  isNumeric: true,          // 只允许数字
  isInt: true,              // 检查是否为有效整数
  isFloat: true,            // 检查是否为有效浮点数
  isDecimal: true,          // 检查是否为任意数字
  isLowercase: true,        // 检查是否为小写
  isUppercase: true,        // 检查是否为大写
  notNull: true,            // 不允许为空
  isNull: true,             // 只允许为空
  notEmpty: true,           // 不允许空字符串
  equals: 'specific value', // 只允许一个特定值
  contains: 'foo',          // 检查是否包含特定的子字符串
  notIn: [['foo', 'bar']],  // 检查是否值不是其中之一
  isIn: [['foo', 'bar']],   // 检查是否值是其中之一
  notContains: 'bar',       // 不允许包含特定的子字符串
  len: [2,10],              // 只允许长度在2到10之间的值
  isUUID: 4,                // 只允许uuids
  isDate: true,             // 只允许日期字符串
  isAfter: "2011-11-05",    // 只允许在特定日期之后的日期字符串
  isBefore: "2011-11-05",   // 只允许在特定日期之前的日期字符串
  max: 23,                  // 只允许值 <= 23
  min: 23,                  // 只允许值 >= 23
  isCreditCard: true,       // 检查有效的信用卡号码

  // 自定义验证器的示例:
  isEven(value) {
    if (parseInt(value) % 2 !== 0) {
      throw new Error('Only even values are allowed!');
    }
  } */
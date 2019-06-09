/* jshint indent: 2 */
const db = require('../config/db')
const sequelize  = db.sequelize
var Sequelize = require('sequelize')
//var uuid = require('../../util/InsunUUID')

var user = sequelize.define('insun_users', 
  
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    social_uid: {
      type: Sequelize.STRING(256),
      allowNull: true
    },
    social_token: {
      type: Sequelize.STRING(256),
      allowNull: true
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: true,
      unique: true
    },
    nickname: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    mobile: {
      type: Sequelize.STRING(50),
      allowNull: true,
      unique: true
    },
    email: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    password: {
      type: Sequelize.STRING(128),
      allowNull: true
    },
    uuid: {
      type: Sequelize.STRING(2000),
      allowNull: true,
      unique: true
    },
    push_token: {
      type: Sequelize.STRING(128),
      allowNull: true
    },
    sex: {
      type: Sequelize.INTEGER(2),
      allowNull: true
    },
    source: {
      type: Sequelize.INTEGER(2),
      allowNull: true
    },
    social_source: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    avatar: {
      type: Sequelize.STRING(128),
      allowNull: true
    },
    lng: {
      type: Sequelize.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    lat: {
      type: Sequelize.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    province: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    city: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    area: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: Sequelize.INTEGER(2),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        timestamps: false
  });



module.exports = user;
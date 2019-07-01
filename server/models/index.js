'use strict';
// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// | 用途: 批量挂载数据模型
// | 路径: ./models/index.js
// | 使用: 
// | 备注：已完成100%
// +----------------------------------------------------------------------
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config')//配置文件加载
const basename = path.basename(module.filename);
const DBConn = {};

let sequelize = new Sequelize(config.MySQLDB.DATABASE, config.MySQLDB.USERNAME, config.MySQLDB.PASSWORD, {
  host: config.MySQLDB.HOST,
  port: config.MySQLDB.PORT,
  dialect: config.server.db_type,
  dialectOptions: {
    charset: "utf8mb4",
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00' //东八时区
});

//遍历目录下文件，挂载数据模型
fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    //挂载数据模型
    DBConn[model.name] = model;
  });
//挂载关联模型
Object.keys(DBConn).forEach((modelName) => {
  if (DBConn[modelName].associate) {
    DBConn[modelName].associate(DBConn);
  }
});

//挂载对象
DBConn.sequelize = sequelize;
DBConn.Sequelize = Sequelize;
//这个地方疯狂挂载属性。===========
DBConn.database = config. MySQLDB.DATABASE;
DBConn.username = config. MySQLDB.USERNAME;
DBConn.password = config. MySQLDB.PASSWORD;
DBConn.host = config. MySQLDB.HOST;
DBConn.port = config. MySQLDB.PORT;
DBConn.dbtype = config.server.db_type;

module.exports = DBConn;















/**
 * 如果设置belongsTo在hasMany增加外键约束constraints: false是不好用的
 * 如果不设置belongsTo在hasMany增加外键约束constraints: false是好用的
 * 如果只设置hasMany没设置constraints: false默认是增加外键约束
 */
// TodoList.belongsTo(User)
// User.hasMany(TodoList, {
//   // as: 'User', // 使用as选项为关系数据指定别名
//   // foreignKey: 'user_id', // TodoList表中增加user_id外键。可以自己指定外键名字，不设置时系统默认
//   constraints: false // 不设置外键约束
// }) */
// 重新创建所有的表结构
// db.sync({force: true})
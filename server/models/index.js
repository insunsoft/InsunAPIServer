const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config')//配置文件加载
const basename = path.basename(module.filename);

const DBConn= {};

//let sequelize;
const sequelize = new Sequelize(config.database.DATABASE,config.database.USERNAME, config.database.PASSWORD, {
    host: config.database.HOST,
    port: config.database.PORT,
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


fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    DBConn[model.name] = model;
  });

Object.keys(DBConn).forEach((modelName) => {
  if (DBConn[modelName].associate) {
    DBConn[modelName].associate(DBConn);
  }
});

DBConn.sequelize = sequelize;
DBConn.Sequelize = Sequelize;
//这个地方疯狂加属性。
DBConn.database = config.database.DATABASE;
DBConn.username = config.database.USERNAME;
DBConn.password = config.database.PASSWORD;
DBConn.host = config.database.HOST;
DBConn.port = config.database.PORT;
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
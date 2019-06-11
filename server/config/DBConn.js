const Sequelize = require('sequelize');
const config = require('./Server')//配置文件加载
/**
 *
 * 配置数据库
 *
 * 第一个参数 database    数据库名字
 * 第二个参数 root      数据库名字
 * 第三个参数 password  数据库密码
 */

/* const DB = new Sequelize(config.database.DATABASE,config.database.USERNAME, config.database.PASSWORD, {
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
}); */

//module.exports = DBConn;

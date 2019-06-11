// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// +----------------------------------------------------------------------
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// +----------------------------------------------------------------------
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: 设置全局性配置参数
// +----------------------------------------------------------------------
// | 路径: \config\index.js
// +----------------------------------------------------------------------
// | 使用: const config = require('./config') index.js为默认名称
// +----------------------------------------------------------------------
// | 样例：config.server.API_server_port 获得设置的端口参数
// +----------------------------------------------------------------------
// | 备注：最后更新日期 2019-06-03
// +----------------------------------------------------------------------
var path = require('path');
// 通过NODE_ENV来设置环境变量，如果没有指定则默认为生产环境
var env = process.env.NODE_ENV || 'production';
env = env.toLowerCase();

// 载入配置文件
var file = path.resolve(__dirname,env);
console.error('加载config文件失败: [%s] %s', env, file);
try {
  var config = module.exports = require(file);
  console.log('正在加载config文件: [%s] %s', env, file);
} catch (err) {
  console.error('加载config文件失败: [%s] %s', env, file);
  throw err;
}











/* {
  "development": {
    "username": "root",
    "password": null,
    "database": "WeiAIStore2_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "seederStorage": "json",
    "seederStoragePath": "sequelizeData.json",
    "seederStorageTableName": "sequelize_data",
    "timezone":"+08:00"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "WeiAIStore2_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone":"+08:00"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "WeiAIStore2_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone":"+08:00"
  }
}
© 2019 GitHub, Inc.*/
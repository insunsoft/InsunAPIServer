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
const config = {
   //服务器参数配置
    server :{
        API_server_type: 'http://', // API服务器协议类型,包含"http://"或"https://"
        API_server_host: 'localhost', // API服务器暴露的域名地址,请勿添加"http://"
        API_server_port: '3000', // API服务器监听的端口号
        HTTP_server_type: 'http://', // HTTP服务器协议类型,包含"http://"或"https://"
        HTTP_server_host: 'www.insunsoft.com', // HTTP服务器地址,请勿添加"http://" （即前端调用使用的服务器地址，如果是APP请设置为 * ）
        HTTP_server_port: '65534', // HTTP服务器端口号
        System_country: 'zh-cn', // 所在国家的国家代码
        db_type: 'mysql' // 数据库类型
    },
    //数据库服务器参数配置
    database: {
        DATABASE: 'insunapisvr',//
        USERNAME: 'root',//
        PASSWORD: '168168',//
        PORT: '3306',//
        HOST: 'localhost',//
        prefix: 'insun_'//
    },
    appinfo:{
        app_name_en: 'HealthNX',//
        app_name_zh:'健康南县',//
        app_upload_url:'1111.apk',//
        app_version:'1.0.0',//
        app_key:'111111111111',//
        app_develop_cn:'殷商科技',//
        app_develop_en:'殷商科技'//
    },
    //安全性配置
    security:{
        secret:'1234567890',
        avatar:'https://s2.ax1x.com/2019/06/07/V0tI4s.png'//

    }
}
module.exports = config
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
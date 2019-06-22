//开发环境配置文件

module.exports = {
    //开发环境数据库服务器参数配置
    //服务器参数配置
    server: {
        API_server_type: 'http://', // API服务器协议类型,包含"http://"或"https://"
        API_server_host: 'localhost', // API服务器暴露的域名地址,请勿添加"http://"
        API_server_port: '3000', // API服务器监听的端口号
        Admin_server_type: 'http://', // 后台admin服务器协议类型,包含"http://"或"https://"
        Admin_server_host: 'localhost', // 后台admin服务器地址,请勿添加"http://" （即前端调用使用的服务器地址，如果是APP请设置为 * ）
        Admin_server_port: '8001', // 后台admin服务器端口号
        Home_server_type: 'http://', // 前端home服务器协议类型,包含"http://"或"https://"
        Home_server_host: 'localhost', // 前端home服务器地址,请勿添加"http://" （即前端调用使用的服务器地址，如果是APP请设置为 * ）
        Home_server_port: '80', // 前端home服务器端口号   
        System_country: 'zh-cn', // 所在国家的国家代码
        db_type: 'mysql' // 数据库类型
    },
    //数据库服务器参数配置
    database: {
        DATABASE: 'insunapiserver_development',//
        USERNAME: 'root',//
        PASSWORD: '168168',//
        PORT: '3306',//
        HOST: 'localhost',//
        prefix: 'insun_'//
    },
    appinfo: {
        app_name_en: 'HealthNX',//
        app_name_zh: '健康南县',//
        app_upload_url: '1111.apk',//
        app_version: '1.0.0',//
        app_key: '111111111111',//
        app_develop_cn: '殷商科技',//
        app_develop_en: 'insunsoft.com'//
    },
    //安全性配置
    security: {
        secret: '1234567890',
        expires: 36000,
        alg: 'HS256',
        avatar: 'https://s2.ax1x.com/2019/06/07/V0tI4s.png',
        resetpassword:'88888888'

    },
    //可以公开访问的动作
    publicAction: [
        '/api/',
        '/api/App.DBConn.Status',
        '/api/',
        '/api/'
    ]

}



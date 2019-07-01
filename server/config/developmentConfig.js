'use strict';
//开发环境配置文件
import path from 'path'

//服务器参数配置
export let server = {
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
    System_plugin_path: path.join(__dirname, './plugins'), // 插件路径
    db_type: 'mysql' // 数据库类型,可以是mongodb，或者xxx
}
//MySQL数据库服务器参数配置
export let MySQLDB = {
    DATABASE: 'insunapiserver_development',//数据库库名
    USERNAME: 'root',//数据库用户名
    PASSWORD: '168168',//密码
    PORT: '3306',//端口
    HOST: 'localhost',//主机
    prefix: 'insun_'//默认表前缀
}
export let MongoDB = {
    host: 'mongodb://localhost', // 服务器地址
    port: 27017, // 数据库端口号
    username: '', // 数据库用户名
    password: '', // 数据库密码
    database: 'tx', // 数据库名称
    prefix: 'api_' // 默认"api_"
}


//邮件服务器配置
export const SendEmail = {
    service: 'smtp.abcd.com', // SMTP服务提供商域名
    username: 'postmaster%40abcd.com', // 用户名/用户邮箱
    password: 'password', // 邮箱密码
    sender_address: '"XX平台 👥" <postmaster@abcd.com>'
}


export let appinfo = {
    app_name_en: 'HealthNX',//应用英文名称
    app_name_zh: '健康南县',//应用中文名称
    app_upload_url: '1111.apk',//安装包
    app_version: '1.0.0',//版本号
    app_key: '111111111111',//程序访问码
    app_develop_cn: '殷商科技',//开发公司
    app_develop_en: 'insunsoft.com'//开发公司英文名
    avatar: 'https://s2.ax1x.com/2019/06/07/V0tI4s.png',//用户默认图像
    resetpassword: '88888888',//管理修改其他用户密码的默认值
    PageCount: 10,////每页文章条数
}
//安全性配置
export let security = {
    secret: '1234567890',//jwt token秘钥
    expires: 3600000,//有效时间
    alg: 'HS256', //加密方式


}
//常量
constant = {
    IP_REG_EXP: /^((25[0-5]|2[0-4]\d|((1\d{2})|(1-9)?\d))\.){3}((25[0-5]|2[0-4]\d|((1\d{2})|(1-9)?\d)))$/ //ip正则

}
//可以公开访问的动作
export let publicAction = [
    '/api/',
    '/api/App.DBConn.Status'
]





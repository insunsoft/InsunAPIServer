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
 module.exports = config ;
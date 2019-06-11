// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// +----------------------------------------------------------------------
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// +----------------------------------------------------------------------
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: 设置全局性配置参数,依照环境参数加载不同的配置文件。
// +----------------------------------------------------------------------
// | 路径: \config\index.js
// +----------------------------------------------------------------------
// | 使用: const config = require('./server/config') index.js为默认名称
// +----------------------------------------------------------------------
// | 样例：config.server.API_server_port 获得设置的端口参数
// +----------------------------------------------------------------------
// | 备注：已完成==>最后更新日期 2019-06-11
// +----------------------------------------------------------------------

var development_env = require('./developmentConfig.js');
var test_env = require('./testConfig.js');
var production_env=require('./productionConfig.js');
console.log(`服务器端【${process.env.NODE_ENV}】==>正在加载config文件...测试读取应用名称：${development_env.appinfo.app_name_zh}` );
//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
module.exports = {
    development: development_env,
    test: test_env,
    production:production_env
}[process.env.NODE_ENV || 'development']
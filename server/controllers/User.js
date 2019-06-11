// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// +----------------------------------------------------------------------
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// +----------------------------------------------------------------------
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// +----------------------------------------------------------------------
// | 用途: 用户类控制器
// +----------------------------------------------------------------------
// | 路径: ./controllers/user.js
// +----------------------------------------------------------------------
// | 使用: node app.js 或者 npm run dev
// +----------------------------------------------------------------------
// | 样例：查看输出
// +----------------------------------------------------------------------
// | 备注：已完成
// +----------------------------------------------------------------------
const config = require('../config')//配置文件加载
const InsunFUN = require('../../util/InsunFUN')
//const UserLoginModel = require('../models/UserModel.js');
const Sequelize = require('sequelize')
const bodyparser = require('koa-bodyparser')
const Op = Sequelize.Op;
import {DBConn,DBConnHost}  from ('../config/DBConn')//配置文件加载
// +----------------------------------------------------------------------
// | 名称: App_User_Register
// +----------------------------------------------------------------------
// | 用途: 进行新用户注册，简单地创建一个基本的用户
// +----------------------------------------------------------------------
// | 使用: http://localhost:3000/api/App.User.Register
// +----------------------------------------------------------------------
// | 方式：请求方式GET/POST
// +----------------------------------------------------------------------
// | 参数：
//  * @param username 用户姓名
//  * @param password 登录密码
//  * @param mobile 手机号码
//  * @param data 返回数据
// +----------------------------------------------------------------------
// | 返回：JSON
// +----------------------------------------------------------------------
// | 样例：
// +----------------------------------------------------------------------
// | 备注：已完成
// +----------------------------------------------------------------------
exports.App_DBConn_Status = async (ctx, next) => {
    console.log('开始测试数据库连接......');
    await  DBConn.authenticate()
  .then(() => {
    ctx.body = InsunFUN.returnJson(1, '已成功建立连接。',DBConn.DBConnHost() )
    console.log('已成功建立连接。');
  })
  .catch(err => {
    ctx.body = InsunFUN.returnJson(1, '无法连接到数据库:', err )
    console.error('无法连接到数据库:', err);
  });
}
//.close()
/* 

exports.App_User_Register = async (ctx, next) => {
    try {
        var queryInfo = ctx.request.query
        //获得传入参数
        if (!queryInfo.username || !queryInfo.mobile) {
            ctx.body = InsunFUN.returnJson(1, '用户姓名、手机等参数不全,请重新输入!', queryInfo)
            return false
        };
        let result = await UserLoginModel.count({ where: { loginname: queryInfo.mobile } })
        // 返回数据库中是否有用该手机注册的用户
        //多条件用or方式 { where: { [Op.or]: [{ username: queryInfo.username }, { mobile: queryInfo.mobile }] }
        if (result > 0) {
            //有记录
            ctx.body = InsunFUN.returnJson(1, '该手机号码已经被注册。请更换后重新注册。', queryInfo)
            return false
        } else {
            //没有记录
            //在数组对象中产生一些数据，用于新增用户的准备.
            //注册的时候就生成一个token，防止用户注册后退出程序。
            queryInfo.push_token = InsunFUN.getToken(queryInfo.mobile, config.security.secret)
            //生成唯一ID
            queryInfo.uuid = InsunFUN.generateUUID();
            //明文密码予以加密
            queryInfo.password = InsunFUN.aesEncrypt(queryInfo.password, config.security.secret)
            //根据系统设置默认图像，用于前端显示
            queryInfo.avatar = config.security.avatar;
            
            try {
                //模块创建一个用户
                let newUser = await UserLoginModel.create(queryInfo)
                ctx.body = InsunFUN.returnJson(0, `您已成功注册为【${config.appinfo.app_name_zh}】用户！`, JSON.stringify(newUser));
            } catch (err) {
                //数据保存错误
                ctx.body = InsunFUN.returnJson(1, '数据保存错误,操作失败!', err.toString());
                throw new Error(err);
            }
        }
    } catch (e) {
        ctx.body = InsunFUN.returnJson(-1, '访问应用数据错误，请联系开发人员。', e.toString())
    }

}

// +----------------------------------------------------------------------
// | 名称: App_User_AlterPassword
// +----------------------------------------------------------------------
// | 用途: 用户修改登录密码
// +----------------------------------------------------------------------
// | 使用: http://localhost:3000/api/App.User.AlterPassword
// +----------------------------------------------------------------------
// | 方式：请求方式GET/POST
// +----------------------------------------------------------------------
// | 参数：
//  * @param uuid	字符串	必须		最小：32；最大：32	UUID，全局唯一用户ID，请参考，查看全部注册会员。
//  * @param token	字符串	必须		最小：64；最大：64	会话凭证
//  * @param old_password	字符串	必须		最小：32；最大：32	原密码，须md5后传递，保持全部小写
//  * @param new_password	字符串	必须		最小：32；最大：32	新密码，须md5后传递，保持全部小写
//  * @return
// +----------------------------------------------------------------------
// | 返回：  JSON
// +----------------------------------------------------------------------
// | 样例：
// +----------------------------------------------------------------------
// | 备注：
// +----------------------------------------------------------------------


exports.App_User_AlterPassword = async (ctx, next) => {
    try {
        var queryInfo = ctx.request.query
        //获得传入参数
        if (!queryInfo.uuid || !queryInfo.token) {
            ctx.body = InsunFUN.returnJson(400, '无法提供安全参数,操作失败!', queryInfo)
            return false
        };
        if (!queryInfo.username) {
            ctx.body = InsunFUN.returnJson(400, '用户参数提供不全,操作失败!', queryInfo)
            return false
        };

        if (!queryInfo.old_password || !queryInfo.new_password) {
            ctx.body = InsunFUN.returnJson(400, '密码参数提供不全,,请重新输入!', queryInfo)
            return false
        };
        let result = await UserLoginModel.findOne({ where: { uuid: queryInfo.uuid } })
        if (!result) {
            ctx.body = InsunFUN.returnJson(400, '系统无此用户', queryInfo)
            return false
        } else {
            //这里要判断授权！！！！！！！！！！
            //将原数据库密码解密
            var OldDBPassword = InsunFUN.aesDecrypt(result.password, config.security.secret)
            //比较，如果一致
            if (OldDBPassword === queryInfo.old_password) {
                //更新数据库的加密密码
                var NewDBPassword = InsunFUN.aesEncrypt(queryInfo.new_password, config.security.secret)
                var pram = { 'password': NewDBPassword };
                UserLoginModel.update(pram, { 'where': { 'uuid': queryInfo.uuid } })
                ctx.body = InsunFUN.returnJson(0, '更新密码成功', {});
            } else {
                ctx.body = InsunFUN.returnJson(400, '原有密码比对错误，请重新输入', {});
            }
        }
    } catch (e) {
        console.log('执行查询失败')
        ctx.body = InsunFUN.returnJson(-1, '访问应用数据错误，请联系开发人员。', e.toString())
    }

}


// +----------------------------------------------------------------------
// | 名称: App_User_Login
// +----------------------------------------------------------------------
// | 用途: 用户登录
// +----------------------------------------------------------------------
// | 使用: http://localhost:3000/api/App.User.Login
// +----------------------------------------------------------------------
// | 方式：请求方式GET/POST
// +----------------------------------------------------------------------
// | 参数：
//  * @param username	字符串	必须		最小：1；最大：50	用户名
//  * @param password	字符串	必须		最小：32；最大：32	密码，须md5后传递，保持全部小写
//  * @param 
// +----------------------------------------------------------------------
// | 返回：  JSON
// +----------------------------------------------------------------------
// | 样例：
// +----------------------------------------------------------------------
// | 备注：
// +----------------------------------------------------------------------

exports.App_User_Login= async (ctx, next) => {
    try {
        var queryInfo = ctx.request.query
        //获得传入参数
        if (!queryInfo.username || !queryInfo.password) {
            ctx.status = 200
            ctx.body = InsunFUN.returnJson(400, '用户登录信息提供不全', queryInfo)
            return false
        };
        let result = await UserLoginModel.findOne({ where: { username: queryInfo.username } })
        if (!result) {
            ctx.body = InsunFUN.returnJson(400, '系统无此用户', queryInfo)
            return false
        } else {
            var OldDBPassword = InsunFUN.aesDecrypt(result.password, config.security.secret)
            console.log('显示=>解密数据库密码：' + OldDBPassword);
            if (OldDBPassword === queryInfo.password) {
                console.log('判断=>等于');
                //取得token
                var tmpToken = InsunFUN.getToken(queryInfo.username, config.security.secret)
                console.log('显示=>Token：' + tmpToken);
                var pram = { 'push_token': tmpToken };
                //更新
                UserLoginModel.update(pram, { 'where': { 'uuid': result.uuid } })
                var rtnInfo = {}
                rtnInfo.uuid = result.uuid
                rtnInfo.token = tmpToken;
                ctx.body = InsunFUN.returnJson(200, '登录系统成功', JSON.stringify(rtnInfo));
            } else {
                console.log('判断=>不等于');
                ctx.body = InsunFUN.returnJson(400, '密码错误！', queryInfo)
            }

        }
    } catch (e) {
        console.log('执行查询失败')
        ctx.body = InsunFUN.returnJson(-1, '访问应用数据错误', e.toString())
    }

}

// +----------------------------------------------------------------------
// | 名称: App_User_Logout
// +----------------------------------------------------------------------
// | 用途: 用户退出
// +----------------------------------------------------------------------
// | 使用: http://localhost:3000/api/App.User.Logout
// +----------------------------------------------------------------------
// | 方式：请求方式GET/POST
// +----------------------------------------------------------------------
// | 参数：
//  * @param uuid	字符串	必须		最小：32；最大：32	UUID，全局唯一用户ID
//  * @param token	字符串	必须		最小：64；最大：64	会话凭证
//  * @return
// +----------------------------------------------------------------------
// | 返回：  JSON
// +----------------------------------------------------------------------
// | 样例：
// +----------------------------------------------------------------------
// | 备注：
// +----------------------------------------------------------------------


exports.App_User_Logout = async (ctx, next) => {
    try {
        var queryInfo = ctx.request.query
        console.log('显示=>获得传入参数' + JSON.stringify(queryInfo));

        if (!queryInfo.uuid || !queryInfo.token) {
            ctx.body = InsunFUN.returnJson(400, '用户登录信息提供不全', queryInfo)
            return false
        };
        let result = await UserLoginModel.findOne({ where: { uuid: queryInfo.uuid } })
        console.log('显示=>返回用户结果：' + JSON.stringify(result));
        if (!result) {
            ctx.body = InsunFUN.returnJson(400, '用户未注册', queryInfo)
            console.log('查询=>没有记录');
            return
        } else {
            var pram = { 'push_token': null };
            //更新
            UserLoginModel.update(pram, { 'where': { 'uuid': result.uuid } })
            ctx.body = InsunFUN.returnJson(0, '退出系统成功');
        }
    } catch (e) {
        console.log('执行查询失败')
        ctx.body = InsunFUN.returnJson(-1, '访问应用数据错误', e.toString())
    }
}




// +----------------------------------------------------------------------
// | 名称: App_User_Profile
// +----------------------------------------------------------------------
// | 用途: 用户获得自己的信息
// +----------------------------------------------------------------------
// | 使用: http://localhost:3000/api/App.User.Profile
// +----------------------------------------------------------------------
// | 方式：请求方式GET/POST
// +----------------------------------------------------------------------
// | 参数：
//  * @param uuid	字符串	必须		最小：32；最大：32	UUID，全局唯一用户ID
//  * @param token	字符串	必须		最小：64；最大：64	会话凭证
//  * @return
// +----------------------------------------------------------------------
// | 返回：  JSON
// +----------------------------------------------------------------------
// | 样例：
// +----------------------------------------------------------------------
// | 备注：
// +----------------------------------------------------------------------


exports.App_User_Profile = async (ctx, next) => {
    try {
        //获得参数
        var queryInfo = ctx.request.query
        if (!queryInfo.uuid || !queryInfo.token) {
            ctx.body = InsunFUN.returnJson(400, '安全参数提供不全,操作失败', queryInfo)
            return false
        };
        let result = await UserLoginModel.findOne({ where: { uuid: queryInfo.uuid } })
        if (!result) {
            ctx.body = InsunFUN.returnJson(400, '未找到该用户，请重新查找', queryInfo)
            return false
        } else {
            ctx.body = InsunFUN.returnJson(0, '获取用户信息成功', JSON.stringify(result));
        }
    } catch (e) {
        ctx.body = InsunFUN.returnJson(-1, '访问应用数据错误', e.toString())
    }
}

// +----------------------------------------------------------------------
// | 名称: App_User_Setstatus
// +----------------------------------------------------------------------
// | 用途: 设置用户是否有效
// +----------------------------------------------------------------------
// | 使用: http://localhost:3000/api/App.User.SetStatus
// +----------------------------------------------------------------------
// | 方式：请求方式GET/POST
// +----------------------------------------------------------------------
// | 参数：
//  * @param uuid	字符串	必须		最小：32；最大：32	UUID，全局唯一用户ID
//  * @param token	字符串	必须		最小：64；最大：64	会话凭证
//  * @param status	int 	必须		0-失效 1-有效 other-失效
//  * @return
// +----------------------------------------------------------------------
// | 返回：  JSON
// +----------------------------------------------------------------------
// | 样例：
// +----------------------------------------------------------------------
// | 备注：
// +----------------------------------------------------------------------


exports.App_User_SetStatus = async (ctx, next) => {
    try {
        //获得参数
        var queryInfo = ctx.request.query
        if (!queryInfo.uuid || !queryInfo.token) {
            ctx.body = InsunFUN.returnJson(400, '安全参数提供不全,操作失败', queryInfo)
            return false
        };
        if (!queryInfo.status) {
            ctx.body = InsunFUN.returnJson(400, '参数提供不全,操作失败', queryInfo)
            return false
        };
        let result = await UserLoginModel.findOne({ where: { uuid: queryInfo.uuid } })
        if (!result) {
            ctx.body = InsunFUN.returnJson(400, '未找到该用户，请重新查找', queryInfo)
            return false
        } else {
            if (queryInfo.status != 0 || queryInfo.status != 1) {
                //默认设为失效
                queryInfo.status = 0;
            }
            var pram = { 'status': status };
            //更新
            UserLoginModel.update(pram, { 'where': { 'uuid': result.uuid } })
            ctx.body = InsunFUN.returnJson(0, '设置用户状态成功');
        }
    } catch (e) {
        ctx.body = InsunFUN.returnJson(-1, '访问应用数据错误', e.toString())
    }
}
 */
//App.User.GetList111111111111



















// /*
// // login
// exports.UserLoginModel_API = async(ctx,next)=>{
//     let Info = ctx.request.query
//     console.log(Info)
//     if (!Info.user||!Info.password) {
//         ctx.status = 200
//         ctx.body = returnJson(-1,'参数不全')
//         return
//     }
//     let userObj = {}
//     userObj.user = Info.user
//     let userIp = ctx.request.ip.match(/\d+.\d+.\d+.\d+/)[0]
//     let logInfo = returnLog(Info.user,userIp,"登录系统")
//     try {
//         await UserLoginModel.find(userObj).exec()
//             .then((data) => {
//                 if (data.length == 1) {
//                     if(data[0].password==Info.password){
//                         // 日志服务
//                         let logRegister = new LogModel(logInfo)
//                         logRegister.save()
//                         const token = jwt.sign({
//                             user_id: data[0]._id,
//                         }, secret, {
//                             expiresIn: '12h' //过期时间设置为60妙。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
//                         });
//                         userObj.password = Info.password
//                         UserLoginModel.findOneAndUpdate(userObj,{token: token}).exec()
//                         ctx.body = returnJson(1,'登录成功',token)
//                     } else{
//                         ctx.body = returnJson(2,'密码错误')
//                     }
//                 } else {
//                     ctx.body = returnJson(2,'不存在用户名')
//                 }
//             })
//             .catch((e) => {
//                 ctx.body = returnJson(0,'发生错误',e.toString())
//             })
//     } catch(e) {
//         ctx.body = returnJson(0,'数据库错误',e.toString())
//     }
// }
// // update


// exports.USER_PRINT_API = async(ctx,next)=>{
//     let getParams = ctx.request.query;
//     try{
//         let data = await printUser(getParams)
//         let result = {}
//         let resData = []
//         data.data.forEach((item,i) => {
//             let obj = {}
//             obj.id = item._id
//             obj.time = FormatDate(item.joinTime,1)
//             obj.user = item.user
//             obj.email = item.email
//             obj.remark = item.remark
//             resData.push(obj)
//         })
//         result.count = data.length
//         result.list = resData
//         ctx.body = returnJson(1,'查询成功','',result)
//     }
//     catch(e) {
//         console.log(e)
//         ctx.body = returnJson(0,'查询出错',e.toString())
//     }
// }
// // delete_user
// exports.USER_DETELE_API = async(ctx,next)=>{
//     let getParams = ctx.request.query;
//     if (!getParams.id) {
//         ctx.status = 200
//         ctx.body = returnJson(-1,'参数不全')
//         return
//     }
//     try {
//         await UserLoginModel.findByIdAndRemove(getParams.id).exec()
//             .then((data) => {
//                 ctx.body = returnJson(1,'删除成功')
//             })
//             .catch((e) => {
//                 console.log(e)
//                 ctx.body = returnJson(0,'发生错误',e)
//             })
//     } catch(e) {
//         ctx.body = returnJson(0,'数据库错误',e.toString())
//     }
// }
// // PRINT_CONCERNEDUSER_API
// exports.PRINT_CONCERNEDUSER_API = async(ctx,next)=>{
//     let getParams = ctx.query
//     try {
//         let search = {}
//         if(getParams.user){
//             search.user = getParams.user
//         }
//         await concernedUser.find(search).exec()
//             .then((data) => {
//                 let resData = {
//                     count: data.length,
//                     list:data
//                 }
//                 ctx.body = returnJson(1,'查询成功','',resData)
//             })
//             .catch((e) => {
//                 ctx.body = returnJson(0,'发生错误','',e.toString())
//             })
//     } catch(e) {
//         ctx.body = returnJson(0,'数据库错误','',e.toString())
//     }
// }
// // delete_user
// exports.DELETE_CONCERNEDUSER_API = async(ctx,next)=>{
//     let getParams = ctx.request.query;
//     if (!getParams.id) {
//         ctx.status = 200
//         ctx.body = returnJson(-1,'参数不全')
//         return
//     }
//     try {
//         await concernedUser.findByIdAndRemove(getParams.id).exec()
//             .then((data) => {
//                 ctx.body = returnJson(1,'删除成功')
//             })
//             .catch((e) => {
//                 console.log(e)
//                 ctx.body = returnJson(0,'发生错误',e)
//             })
//     } catch(e) {
//         ctx.body = returnJson(0,'数据库错误',e.toString())
//     }
// }
// // edit_remark
// exports.EDIT_REMARK_API = async(ctx,next)=>{
//     let getParams = ctx.request.query;
//     if (!getParams.id) {
//         ctx.status = 200
//         ctx.body = returnJson(-1,'参数不全')
//         return
//     }
//     let userObj = new Object()
//     userObj.remark = getParams.remark
//     try {
//         await UserLoginModel.findByIdAndUpdate(getParams.id,userObj).exec()
//             .then((data) => {
//                 ctx.body = returnJson(1,'修改备注成功')
//             })
//             .catch((e) => {
//                 console.log(e)
//                 ctx.body = returnJson(0,'发生错误',e)
//             })
//     } catch(e) {
//         ctx.body = returnJson(0,'数据库错误',e.toString())
//     }
// }
// const printUser = async (info) => {
//     let count = parseInt(info.pageNum?info.pageNum:0)
//     // 分页
//     let skipNum
//     if (info.pageNum&&info.page) {
//         skipNum = (info.page-1)*info.pageNum
//     }
//     // 排序
//     let sortWay
//     if (info.time) {
//         sortWay =  {time:info.time}
//     } else{
//         sortWay = {time:-1}
//     }
//     let searchInfo = {}
//     if (info.name) {
//         searchInfo.user = info.name
//     }
//     if (info.email) {
//         searchInfo.email = info.email
//     }
//     if (info.remark) {
//         searchInfo.remark = info.remark
//     }
//     let length = await UserLoginModel.find(searchInfo).count()
//     let data = await UserLoginModel.find(searchInfo).limit(count).skip(skipNum).sort(sortWay).exec()
//     return {
//         length: length,
//         data: data
//     }
// }*/
// // 格式化时间
// const FormatDate = (strTime,type) => {
//     var date = new Date(strTime);
//     if (type == 1){
//         return date.Format("yyyy-MM-dd hh:mm:ss")
//     } else {
//         return date.Format("yyyy-MM-dd")
//     }
// }
// Date.prototype.Format = function (fmt) {
//     var o = {
//         "M+": this.getMonth() + 1, //月份
//         "d+": this.getDate(), //日
//         "h+": this.getHours(), //小时
//         "m+": this.getMinutes(), //分
//         "s+": this.getSeconds(), //秒
//         "q+": Math.floor((this.getMonth() + 3) / 3), //季度
//         "S": this.getMilliseconds() //毫秒
//     };
//     if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//     for (var k in o)
//         if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//     return fmt;
// }
//
//


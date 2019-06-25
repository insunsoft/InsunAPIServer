// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// | 用途: 用户类控制器
// | 路径: ./controllers/user.js
// | 使用: node app.js 或者 npm run dev
// | 样例：查看输出
// | 备注：已完成
// +----------------------------------------------------------------------
const DBConn = require('../models');
const Sequelize = DBConn.sequelize;
const Op = Sequelize.Op;
const Config = require('../config')//配置文件加载
const Insun = require('../units');

// | 用途: 根据配置文件访问Mysql数据库，用于测试 100%
exports.App_DBConn_Status = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_DBConn_Status
    // | 用途: 根据配置文件访问Mysql数据库，用于测试
    // | 使用: http://localhost:3000/api/App.DBConn.Status
    // | 方式：请求方式GET
    // | 参数：@param 无
    // | 返回：json
    // | 备注：已完成
    // +----------------------------------------------------------------------
    console.log(`服务器端【${process.env.NODE_ENV}】==>开始测试数据库连接.....`);
    await DBConn.sequelize.authenticate()
        .then(() => {
            let DBInfo = {}
            DBInfo.message = '运行环境==>' + process.env.NODE_ENV
            DBInfo.database = '数据库名称==>' + DBConn.database
            DBInfo.host = '主机名称==>' + DBConn.host
            ctx.status = 200
            ctx.body = Insun.ReturnUnit.returnSuccessJson('已成功建立连接。', DBInfo)

        })
        .catch(e => {
            ctx.body = Insun.ReturnUnit.returnErrorJson('无法连接到数据库:', e.toString())
            ctx.throw(500)
        });
}
// | 用途: 用户登录 返回Token 100%
exports.App_User_Login = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_User_Login
    // | 用途: 用户登录
    // | 使用: http://localhost:3000/api/App.User.Login
    // | 方式：请求方式GET/POST
    // | 参数：
    //  * @param loginname	字符串	必须		最小：1；最大：50	用户名
    //  * @param password	字符串	必须		最小：32；最大：32	密码，须md5后传递，保持全部小写
    //  * @param
    // +----------------------------------------------------------------------
    // | 备注：已完成100%
    // +----------------------------------------------------------------------   
    try {
        //获得传入参数
        let queryInfo = ctx.request.query
        //console.log('显示=>客户端传递参数:'+ JSON.stringify( queryInfo))
        if (!queryInfo.loginname || !queryInfo.password) {
            ctx.status = 400
            return ctx.body = await Insun.ReturnUnit.returnInfoJson(400, '用户登录-参数提供不全！', queryInfo)
        } else {
           
            let DBresult = await DBConn.Users.findOne({
                attributes: ['user_id', 'loginname', 'password', 'avatar', 'role_level', 'push_token'],
                where: {
                    loginname: queryInfo.loginname
                }
            })
            //console.log('显示=>服务端数据返回:'+ JSON.stringify(DBresult))
           
            if (!DBresult) {
                ctx.status = 400
                return ctx.body = await Insun.ReturnUnit.returnInfoJson(400, '用户登录-该手机号未注册！', queryInfo)
            } else {
                let OldDBPassword =  Insun.EncryptUnit.Decryptaes192(DBresult.password)
                //console.log('显示=>服务端加密密码:' + DBresult.password);
                //console.log('显示=>解密服务端密码:' + OldDBPassword)
                //console.log('显示=>客户端传入密码:' + queryInfo.password)
                if (queryInfo.password === OldDBPassword) {

                    //判断等于;
                    //取得token
                    let payload = {}
                    payload.loginname = DBresult.loginname
                    payload.user_id = DBresult.user_id
                    payload.role_level = DBresult.role_level
                    var tmpToken = await Insun.TokenUnit.generateToken(payload)
                    console.log('显示=>生成的Token:' + tmpToken);
                    var prams = { 'push_token': tmpToken };
                    //更新
                    await DBConn.Users.update(prams, { 'where': { 'user_id': DBresult.user_id } })
                    var rtnInfo = {}
                    rtnInfo.user_id = DBresult.user_id
                    rtnInfo.loginname = DBresult.loginname
                    rtnInfo.avatar = DBresult.avatar
                    rtnInfo.token = tmpToken;
                    ctx.status = 200
                    return ctx.body = await Insun.ReturnUnit.returnSuccessJson(200, '用户登录-成功！', rtnInfo);
                } else {
                    ctx.status = 400// console.log('判断=>不等于');
                    return ctx.body = await Insun.ReturnUnit.returnInfoJson(400,'用户登录-密码输入错误！', queryInfo)
                }
            }
        }
    } catch (e) {
        ctx.status = 500
        return ctx.body = await Insun.ReturnUnit.returnErrorJson(500,'用户登录-服务器访问错误！', e.toString())
    }
}
// | 用途: 根据手机号获得一个用户的信息
exports.App_User_OneInfo = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_User_OneInfo 
    // | 用途: 根据手机号获得一个用户的信息
    // | 使用: http://localhost:3000/api/App.User.OneInfo 
    // | 方式：请求方式GET/POST
    // | 参数：@param 无
    // | 返回：
    // | 样例：
    // | 备注：已完成100%
    // +----------------------------------------------------------------------
    try {
        //获得传入参数
        var queryInfo = ctx.request.query
        if (!queryInfo.mobile) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '用户姓名、手机等参数不全,请重新输入!', queryInfo)
            ctx.status = 400
            return
        };
        let result = await DBConn.Users.findOne({ where: { loginname: queryInfo.mobile } })
        // 返回数据库中是否有用该手机注册的用户
        if (!result) {
            //无记录
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '数据库中未找到该用户信息。', queryInfo)
            ctx.status = 400
            return
        } else {
            ctx.body = Insun.ReturnUnit.returnSuccessJson(200, '查询成功。', result)
            ctx.status = 200
            return true
        }
    } catch (e) {
        ctx.body = Insun.ReturnUnit.returnErrorJson(500, '访问应用数据错误，请联系开发人员。', e.toString())
        ctx.status = 500
        return
    }
}
// | 用途: 进行新用户注册，简单地创建一个基本的用户
exports.App_User_Register = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_User_Register
    // | 用途: 进行新用户注册，简单地创建一个基本的用户
    // | 使用: http://localhost:3000/api/App.User.Register
    // | 方式：请求方式GET/POST
    // | 参数：
    // | * @param loginname 手机号码
    // | * @param password 登录密码
    // | 返回：JSON
    // | 样例：
    // +----------------------------------------------------------------------
    // | 备注：完成100%
    // +----------------------------------------------------------------------   
    try {
        var queryInfo = ctx.request.query
        //获得传入参数
        if (!queryInfo.loginname || !queryInfo.password) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '手机、密码等参数不全,请重新输入!', queryInfo)
            return false
        };
        let result = await DBConn.Users.count({ where: { loginname: queryInfo.loginname } })
        // 返回数据库中是否有用该手机注册的用户
        if (result > 0) {
            //有记录
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '该手机号码已经被注册。请更换后重新注册。', queryInfo)
            return false
        } else {
            //没有记录
            //在数组对象中产生一些数据，用于新增用户的准备.
            queryInfo.push_token = ''
            //生成唯一ID
            queryInfo.uuid = Insun.StrUnit.generateUUID();
            //明文密码予以加密
            queryInfo.password = Insun.EncryptUnit.Encryptaes192(queryInfo.password, Config.security.secret)
            //根据系统设置默认图像，用于前端显示
            queryInfo.avatar = Config.security.avatar;
            queryInfo.role_level = 0//普通用户
            try {
                //模块创建一个用户
                let newUser = await DBConn.Users.create(queryInfo)
                ctx.body = Insun.ReturnUnit.returnSuccessJson(200, `您已成功注册为【${Config.appinfo.app_name_zh}】用户！`, newUser);
            } catch (err) {
                //数据保存错误
                ctx.body = Insun.ReturnUnit.returnErrorJson(400, '数据保存错误,操作失败!', err.toString());
                throw new Error(err);
            }
        }
    } catch (e) {
        ctx.body = Insun.ReturnUnit.returnErrorJson(500, '服务器访问应用数据错误，请联系开发人员。', e.toString())
    }

}
// | 用途: 用户修改自己登录密码
exports.App_User_AlterPassword = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_User_AlterPassword
    // | 用途: 用户修改登录密码
    // | 使用: http://localhost:3000/api/App.User.AlterPassword
    // | 方式：请求方式GET/POST
    // +----------------------------------------------------------------------
    // | 参数：
    //  * @param old_password	字符串	必须		
    //  * @param new_password	字符串	必须		
    //  * @return
    // | 备注：
    // +----------------------------------------------------------------------
    try {
        var queryInfo = ctx.request.query

        //获得传入参数token以及新旧密码
        if (!queryInfo.old_password || !queryInfo.new_password) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '密码参数提供不全,,请重新输入!', queryInfo)
            ctx.status = 400
            return false
        };
        if (!queryInfo.uuid) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '用户参数提供不全,,请重新输入!', queryInfo)
            ctx.status = 400
            return false
        };
        let result = await DBConn.Users.findOne({ where: { uuid: queryInfo.uuid } })
        if (!result) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '系统无此用户', queryInfo)
            ctx.status = 400
            return
        } else {
            //将原数据库密码解密
            var OldDBPassword = Insun.EncryptUnit.Decryptaes192(result.password, config.security.secret)
            //比较，如果一致
            if (OldDBPassword === queryInfo.old_password) {
                //更新数据库的加密密码
                var NewDBPassword = Insun.EncryptUnit.Encryptaes192(queryInfo.new_password, config.security.secret)
                var prams = { 'password': NewDBPassword };
                User.update(prams, { 'where': { 'uuid': queryInfo.uuid } })
                ctx.body = Insun.ReturnUnit.returnSuccessJson(200, '更新密码成功', {});
                ctx.status = 200
                return true
            } else {
                ctx.body = Insun.ReturnUnit.returnInfoJson(400, '原有密码比对错误，请重新输入', {});
                ctx.status = 400
                return
            }
        }
    } catch (e) {
        ctx.body = Insun.ReturnUnit.returnErrorJson(500, '访问应用数据错误，请联系开发人员。', e.toString())
        ctx.status = 500
        return
    }

}

// | 用途: 用户退出
exports.App_User_Logout = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_User_Logout
    // | 用途: 用户退出
    // | 使用: http://localhost:3000/api/App.User.Logout
    // | 方式：请求方式GET/POST
    // | 备注：
    // +----------------------------------------------------------------------   
    try {
        //  var token = ctx.request.header.authorization;
        //  console.log('显示=>获得头部传入token参数' + token);

        let payload = await Insun.TokenUnit.decodeToken(queryInfo.token)
        let Userinfo = {}
        Userinfo.uuid = payload.uuid,
            Userinfo.loginname = payload.loginname

        console.log('显示=>解码token' + JSON.stringify(Userinfo));
        ctx.body = Insun.ReturnUnit.returnSuccessJson('用户解锁', Userinfo)
        /* 
                let result = await DBConn.UserLogin.findOne({ where: { uuid: queryInfo.uuid } })
                console.log('显示=>返回用户结果：' + JSON.stringify(result));
                if (!result) {
                    ctx.body = Insun.ReturnUnit.returnInfoJson('用户未注册', queryInfo)
                    console.log('查询=>没有记录');
                    return
                } else {
                    var pram = { 'push_token': null };
                    //更新
                    DBConn.UserLogin.update(pram, { 'where': { 'uuid': result.uuid } })
                    ctx.body = Insun.ReturnUnit.returnSuccessJson( '退出系统成功');
                } */
    } catch (e) {
        console.log('服务端发生错误')
        ctx.body = Insun.ReturnUnit.returnErrorJson('服务器访问应用数据错误', e.toString())
    }
}



// | 用途: 用户获得自己所有的信息
exports.App_User_SelfInfo = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_User_SelfAllInfo
    // | 用途: 用户获得自己所有的信息
    // | 使用: http://localhost:3000/api/App.User.SelfAllInfo
    // | 方式：请求方式GET/POST
    // | 参数：
    //  * @param token	字符串	必须	会话凭证
    //  * @return
    // | 返回：  JSON
    // | 样例：
    // | 备注：完成
    // +----------------------------------------------------------------------
    try {
        //获得全局参数，属于Token传过来的值，一个包含loginname和uuid的对象
        let queryInfo = ctx.state.user
        //console.log(queryInfo)
        if (!queryInfo.uuid) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '获取参数错误，访问失败', {})
            ctx.status = 400
            return
        } else {
            let result = await DBConn.Users.findOne({ 'where': { uuid: queryInfo.uuid } })
            if (!result) {
                ctx.body = Insun.ReturnUnit.returnInfoJson(400, '未找到该用户，请重新查找', {})
                ctx.status = 400
                return
            } else {
                ctx.status = 200
                ctx.body = Insun.ReturnUnit.returnSuccessJson(200, '获取用户信息成功', result);
                return true
            }
        }
    } catch (e) {
        ctx.body = Insun.ReturnUnit.returnErrorJson(500, '访问应用数据错误', e.toString())
        ctx.status = 500
        return
    }
}
// | 用途: 设置用户是否有效
exports.App_User_SetStatus = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_User_SetStatus
    // | 用途: 设置用户是否有效
    // | 使用: http://localhost:3000/api/App.User.SetStatus
    // | 方式：请求方式GET/POST
    // +----------------------------------------------------------------------
    // | 参数：
    //  * @param uuid	字符串	必须		最小：32；最大：32	UUID，全局唯一用户ID
    //  * @param status	int 	必须		0-失效 1-有效 other-失效
    //  * @return
    // +----------------------------------------------------------------------
    // | 备注：
    // +----------------------------------------------------------------------
    try {
        //获得全局参数，属于Token传过来的值，一个包含loginname和uuid的对象
        let queryInfo = ctx.state.user
        //console.log(queryInfo)
        if (!queryInfo.uuid) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '获取参数错误，访问失败', {})
            ctx.status = 400
            return
        } else {
            let result = await DBConn.Users.findOne({ where: { uuid: queryInfo.uuid } })
            if (!result) {
                ctx.body = Insun.ReturnUnit.returnInfoJson(400, '未找到该用户，无法设置状态', queryInfo)
                ctx.status = 400
                return
            } else {
                if (queryInfo.status != 0 || queryInfo.status != 1) {
                    //默认设为失效
                    queryInfo.status = 0;
                }
                var prams = { 'status': status };
                //更新
                DBConn.Users.update(prams, { 'where': { 'uuid': result.uuid } })
                ctx.body = Insun.ReturnUnit.returnSuccessJson(200, '设置用户状态成功');
                ctx.status = 200
                return true
            }
        }
    } catch (e) {
        ctx.body = Insun.ReturnUnit.returnErrorJson(500, '访问应用数据错误', e.toString())
        ctx.status = 500
    }
}
// | 用途: 重置会员密码，不需要原来密码，但需要任意一位管理员登录态。
exports.App_User_ResetPasswordForAdmin = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_User_ResetPasswordForAdmin
    // | 用途: 重置会员密码，不需要原来密码，但需要任意一位管理员登录态。
    // | 使用: http://localhost:3000/api/App.User.ResetPasswordForAdmin
    // | 方式：请求方式GET/POST
    // | 参数：
    //  * @param uuid	字符串	必须		最小：32；最大：32	UUID，全局唯一用户ID
    //  * @param new_password	字符串	必须
    //  * @token
    // | 备注：完成
    // +----------------------------------------------------------------------   
    try {
        //获得参数进行有效性判断
        let queryInfo = ctx.request.query
        if (!queryInfo.uuid) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '参数提供不全,操作失败', queryInfo)
            ctx.status = 400
            return
        };
        let adminInfo = ctx.state.user
        //判断是否管理员操作
        if (adminInfo.role_level !== 3) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '非管理员角色无法执行该操作', queryInfo)
        } else {
            let result = await DBConn.User.findOne({ where: { uuid: queryInfo.uuid } })
            if (!result) {
                ctx.body = Insun.ReturnUnit.returnInfoJson(400, '未找到该用户，无法重置密码', queryInfo)
                ctx.status = 400
                return
            } else {
                tmppassword = Insun.EncryptUnit.Encryptaes192(Config.security.resetpassword, Config.security.secret)
                let prams = { 'password': tmppassword };
                //更新
                DBConn.Users.update(prams, { 'where': { 'uuid': queryInfo.uuid } })
                ctx.body = Insun.ReturnUnit.returnSuccessJson(200, '重置用户密码成功');
                ctx.status = 200
                return true
            }
        }
    } catch (e) {
        ctx.body = Insun.ReturnUnit.returnErrorJson(500, '访问应用数据错误', e.toString())
        ctx.status = 500
        return
    }
}



// | 用途: 增加积分 100%
exports.App_Point_Add = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_Point_Add
    // | 用途: 增加积分
    // | 使用: http://localhost:3000/api/App.Point.Add
    // | 方式：请求方式GET/POST
    // | 备注：
    // +----------------------------------------------------------------------   
    try {

        //获得参数进行有效性判断
        let queryInfo = ctx.request.query
        if (!queryInfo.user_id || !queryInfo.source || !queryInfo.refer_number || !queryInfo.change_point) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '参数提供不全！', queryInfo)
            ctx.status = 400
            return
        } else {
            try {
                //模块创建一个积分
                let newPoint = await DBConn.Point.create(queryInfo)
                ctx.body = Insun.ReturnUnit.returnSuccessJson(200, `积分添加成功！`, newPoint);
                ctx.status = 200
                return true
            } catch (err) {
                //数据保存错误
                ctx.body = Insun.ReturnUnit.returnErrorJson(400, '数据保存错误,操作失败!', err.toString());
                ctx.status = 500
                return
            }
        }
    } catch (e) {
        ctx.body = Insun.ReturnUnit.returnErrorJson('访问应用数据错误！', e.toString())
        ctx.status = 500
        return
    }
}

// |用途：统计某个用户的积分总数
exports.App_Point_count = async (ctx, next) => {
    // +----------------------------------------------------------------------
    // | 名称: App_Point_Add
    // | 用途: 增加积分
    // | 使用: http://localhost:3000/api/App.Point.Add
    // | 方式：请求方式GET/POST
    // | 备注：
    // +----------------------------------------------------------------------   
    try {

        //获得参数进行有效性判断
        let queryInfo = ctx.request.query
        if (!queryInfo.user_id) {
            ctx.body = Insun.ReturnUnit.returnInfoJson(400, '参数提供不全！', queryInfo)
            ctx.status = 400
            return
        } else {
            try {
                //模块创建一个积分
                let newPointCount = await DBConn.Point.find(queryInfo)
                ctx.body = Insun.ReturnUnit.returnSuccessJson(200, `积分添加成功！`, newPointCount);
                ctx.status = 200
                return true
            } catch (err) {
                //数据保存错误
                ctx.body = Insun.ReturnUnit.returnErrorJson(400, '数据保存错误,操作失败!', err.toString());
                ctx.status = 500
                return
            }
        }
    } catch (e) {
        ctx.body = Insun.ReturnUnit.returnErrorJson('访问应用数据错误！', e.toString())
        ctx.status = 500
        return
    }
}

















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


/* jshint indent: 2 */



module.exports = function (sequelize, DataTypes) {
  const UserLogin =  sequelize.define('UserLogin', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    loginname: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: '登录名称-限制使用手机号码登录,只允许数字'
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: true,

      comment: '登录密码-加密之后存储,只允许字母和数字'
    },
    uuid: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: 'UUID-唯一编码'
    },
    push_token: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: 'token-授权'
    },
    avatar: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: '用户图像-相对或绝对路径'
    },
    source: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '2',
      comment: '用户注册来源(0->iPhone, 1->iPad, 2->Android, 3->微信, 4->H5, 5->网站)'
    },
    social_source: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: true,
      defaultValue: '0',
      comment: '第三方登录来源(0->手机, 1->微信, 2->QQ)'
    },
    social_uid: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: '第三方登陆用户 ID'
    },
    social_token: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: '第三方登陆用户的令牌'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true,
      defaultValue: '1',
      comment: '状态(0-失效 1-正常)'
    }
  }, {
      freezeTableName: true,
      timestamps: false,
      tableName: 'insun_ucenter_login'
    });

   /*  UserLogin.associate = function(models) {
      // associations can be defined here
      UserLogin.belongsTo(models.UserInfo,{
        foreignKey: 'user_id'
      })  
    
      UserLogin.baseinfo =  UserLogin.hasOne(models.UserInfo, { as: 'audit', foreignKey: 'user_id' })
    } */
/*       UserLogin.hasMany(models.orders,{
        foreignKey: 'user_id'
      }) */
      // UserLogin.belongsToMany(models.goods,{
      //   // as:'',
      //   foreignKey:'user_id',
      //   through: {
      //     model: models.carts
      //   }
      
      // UserLogin.belongsTo(models.carts,{
       
      //   foreignKey:'user_id',
       
      // })
    //};


    return UserLogin ;
  }
/*
validate: {
  is: ["^[a-z]+$",'i'],     // 只允许字母
  is: /^[a-z]+$/i,          // 与上一个示例相同,使用了真正的正则表达式
  not: ["[a-z]",'i'],       // 不允许字母
  isEmail: true,            // 检查邮件格式 (foo@bar.com)
  isUrl: true,              // 检查连接格式 (http://foo.com)
  isIP: true,               // 检查 IPv4 (129.89.23.1) 或 IPv6 格式
  isIPv4: true,             // 检查 IPv4 (129.89.23.1) 格式
  isIPv6: true,             // 检查 IPv6 格式
  isAlpha: true,            // 只允许字母
  isAlphanumeric: true,     // 只允许使用字母数字
  isNumeric: true,          // 只允许数字
  isInt: true,              // 检查是否为有效整数
  isFloat: true,            // 检查是否为有效浮点数
  isDecimal: true,          // 检查是否为任意数字
  isLowercase: true,        // 检查是否为小写
  isUppercase: true,        // 检查是否为大写
  notNull: true,            // 不允许为空
  isNull: true,             // 只允许为空
  notEmpty: true,           // 不允许空字符串
  equals: 'specific value', // 只允许一个特定值
  contains: 'foo',          // 检查是否包含特定的子字符串
  notIn: [['foo', 'bar']],  // 检查是否值不是其中之一
  isIn: [['foo', 'bar']],   // 检查是否值是其中之一
  notContains: 'bar',       // 不允许包含特定的子字符串
  len: [2,10],              // 只允许长度在2到10之间的值
  isUUID: 4,                // 只允许uuids
  isDate: true,             // 只允许日期字符串
  isAfter: "2011-11-05",    // 只允许在特定日期之后的日期字符串
  isBefore: "2011-11-05",   // 只允许在特定日期之前的日期字符串
  max: 23,                  // 只允许值 <= 23
  min: 23,                  // 只允许值 >= 23
  isCreditCard: true,       // 检查有效的信用卡号码

  // 自定义验证器的示例:
  isEven(value) {
    if (parseInt(value) % 2 !== 0) {
      throw new Error('Only even values are allowed!');
    }
  } */
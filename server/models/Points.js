// +----------------------------------------------------------------------
// | 项目：InsunAPIServer
// | 版权：Copyright (c) 1974~2019 http://insunsoft.com All rights reserved.
// | 授权：Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// | 作者: insunsoft-濮堂.陈剑 <951241056@QQ.com>
// | 用途: 用户积分模块
// | 路径: ./models/Points.js
// | 使用: 接受controllers层调用
// | 备注：已完成
// +----------------------------------------------------------------------

module.exports = function(sequelize, DataTypes) {
  const Points= sequelize.define('Points', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(128).UNSIGNED,
      allowNull: false,
      comment: '外键，关联user表的UUID'
    },
    source: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      comment: '积分来源:0订单,1登录,2活动'
    },
    refer_number: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: '积分来源相关编号'
    },
    change_point: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      comment: '变更积分数'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      comment: '状态(0-失效 1-正常)'
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'insun_ucenter_point'
  });

  Points.associate = function (models) {
    // associations can be defined here
    /* users.belongsTo(models.carts,{
      foreignKey: 'user_id'
    }) */

   /*  users.hasMany(models.address, {
      foreignKey: 'user_id'
    })
    users.hasMany(models.orders, {
      foreignKey: 'user_id'
    })
    users.belongsToMany(models.goods, {
      // as:'',
      foreignKey: 'user_id',
      through: {
        model: models.carts
      }
    }) */

  };


  return Points;



};

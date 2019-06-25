/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Depts = sequelize.define('Depts', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    deptname: {
      type: DataTypes.STRING(80),
      allowNull: false,
      comment: '单位编号'
    },
    dept_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: 'UUID-唯一编码'
    },
    parent_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '0',
      comment: '上一级ID'
    },
    order: {
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '10',
      comment: '排序字段'
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
      type: DataTypes.INTEGER(2).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      comment: '状态(0-失效 1-正常)'
    }
  }, {
      freezeTableName: true,
      timestamps: false,
      tableName: 'insun_ucenter_dept'
    });


  Depts.associate = function (models) {
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


  return Depts;


};

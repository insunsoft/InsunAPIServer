/* jshint indent: 2 */
//群组表
module.exports = function (sequelize, DataTypes) {
  const Groups = sequelize.define('Groups', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    groupname: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: '群组名称'
    },
    group_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: 'UUID-唯一编码'
    },
    order: {
      type: DataTypes.INTEGER(11).UNSIGNED,
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
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      comment: '状态(0-失效 1-正常)'
    }
  }, {
      freezeTableName: true,
      timestamps: false,
      tableName: 'insun_ucenter_group'
    });

  Groups.associate = function (models) {
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


  return Groups;





};

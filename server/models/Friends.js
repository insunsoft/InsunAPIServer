/* jshint indent: 2 */
//朋友表
module.exports = function(sequelize, DataTypes) {
  const Friends =  sequelize.define('Friends', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    friend_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
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
      defaultValue: '1'
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'insun_ucenter_friend'
  });

  Friends.associate = function (models) {
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


  return Friends;

  
};

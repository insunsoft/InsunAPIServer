/* jshint indent: 2 */
//余额钱包记录
module.exports = function(sequelize, DataTypes) {
  const Balances=  sequelize.define('Balances', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    source: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    source_sn: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
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
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'insun_ucenter_balance'
  });

  Balances.associate = function (models) {
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


  return Balances;
  
};

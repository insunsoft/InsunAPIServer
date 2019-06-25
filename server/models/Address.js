/* jshint indent: 2 */
//地址表
module.exports = function(sequelize, DataTypes) {
  const Address = sequelize.define('Address', {
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
    zip: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false
    },
    recipientname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    recipientmobile: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    province: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    city: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    district: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    is_default: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'insun_ucenter_address'
  });


  Address .associate = function (models) {
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


  return Address;



};

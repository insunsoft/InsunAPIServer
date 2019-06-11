/* jshint indent: 2 */
const sequelize =require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('insun_ucenter_userinfo', {
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
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qq: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    identity_card_type: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    identity_card_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sex: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    user_point: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_level: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    user_money: {
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
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    freezeTableName: true,
    timestamps: false,
      tableName: 'insun_ucenter_userinfo'
    });
};

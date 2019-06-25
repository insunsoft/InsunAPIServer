/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insun_ucenter_message', {
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
    send_id: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    message_topic: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    message_content: {
      type: DataTypes.STRING(255),
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
    tableName: 'insun_ucenter_message'
  });
};

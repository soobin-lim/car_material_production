// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../../config/connection');

// class DailyProductionReport extends Model { }
module.exports = (sequelize, DataTypes) => {

const DailyProductionReport = sequelize.define(
  'DailyProductionReport',
  {
    material: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pac: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['JIS', 'JIT', 'ETC']],
          msg: "Type Must be JIS or JIT or ETC"
        },
      },
    },
    client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Shift: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['DAY', 'NIGHT']],
          msg: "Must be DAY or NIGHT"
        },
      },
    },
  },
  // {
  //   sequelize,
  //   freezeTableName: true,
  //   underscored: true,
  //   modelName: 'sap_and_kia_material',
  // }
);
return DailyProductionReport;
}

// return DailyProductionReport;

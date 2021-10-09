module.exports = (sequelize, DataTypes) => {
  const timecontrol = sequelize.define(
    'timecontrol',
    {
      line: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cause: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.DATE,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'kiamaterial',
      modelName: 'kiamaterial'
    }
  );
  return timecontrol;
}
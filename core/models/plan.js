"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plan.init(
    {
      title: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      color: DataTypes.STRING,
      details: DataTypes.STRING,
      remind_before: DataTypes.INTEGER,
      is_finish: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Plan",
      tableName: "plans",
    }
  );
  return Plan;
};

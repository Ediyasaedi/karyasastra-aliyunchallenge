"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Karya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Karya.belongsTo(models.Category, { foreignKey: "CategoryID" });
      Karya.belongsTo(models.User, { foreignKey: "UserID" });
      Karya.hasMany(models.Comment, { foreignKey: "KaryaID" });
    }
  }
  Karya.init(
    {
      content: DataTypes.STRING,
      is_banned: DataTypes.BOOLEAN,
      count_report: DataTypes.INTEGER,
      CategoryID: Sequelize.INTEGER,
      UserID: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Karya",
    }
  );
  return Karya;
};

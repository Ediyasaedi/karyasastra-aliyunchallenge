"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Karya, { foreignKey: "KaryaID" });
      Comment.belongsTo(models.User, { foreignKey: "UserID" });
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
      KaryaID: Sequelize.INTEGER,
      UserID: Sequelize.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};

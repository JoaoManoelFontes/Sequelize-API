const { Model, DataTypes } = require("sequelize");

module.exports = class Tag extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tags",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "tagId",
      through: "usertags",
      as: "user",
    });
  }
};

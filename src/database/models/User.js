const { Model, DataTypes } = require("sequelize");

module.exports = class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "userId", as: "addresses" });

    this.belongsToMany(models.Tag, {
      foreignKey: "userId",
      through: "usertags",
      as: "tags",
    });
  }
};

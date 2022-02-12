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
};

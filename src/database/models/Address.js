const { Model, DataTypes } = require("sequelize");

module.exports = class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }
};

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("addresses", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        alowNull: false,
      },
      zipcode: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        alowNull: false,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      street: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        alowNull: false,
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("addresses");
    console.log("table adresses sucessfully deleted!");
  },
};

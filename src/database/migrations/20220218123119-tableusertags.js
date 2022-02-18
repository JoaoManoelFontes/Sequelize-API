'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('usertags', {       
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.INTEGER,
        alowNull: false,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      tagId: {
        type: Sequelize.INTEGER,
        alowNull: false,
        references: { model: "tags", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt:{type:Sequelize.DATE, allowNull: false},
      updatedAt:{type:Sequelize.DATE, allowNull: false}
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('usertags');
    console.log("error in table users"); 
  }
};

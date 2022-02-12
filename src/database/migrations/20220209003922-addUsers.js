'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users', { 
      name: {type:Sequelize.STRING, allowNull: false},
      age:{type: Sequelize.INTEGER, allowNull: false},
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      createdAt:{type:Sequelize.DATE, allowNull: false},
      updatedAt:{type:Sequelize.DATE, allowNull: false}
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');
    console.log("error in table users"); 
  }
};

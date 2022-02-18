'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('tags', { 
      name: {type:Sequelize.STRING, allowNull: false},
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

    await queryInterface.dropTable('tags');
    console.log("table tags deleted!"); 
  }
};

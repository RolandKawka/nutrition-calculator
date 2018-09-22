'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
          allowNull: false,
        type: Sequelize.STRING
      },
      proteins: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      carbs: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fat: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      calories: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
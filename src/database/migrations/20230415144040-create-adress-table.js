"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("adresses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      state: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      district: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      house_number: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      phone: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("adresses");
  },
};

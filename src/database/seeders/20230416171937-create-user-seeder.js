const bcrypt = require("bcrypt");
("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const passwordHashed = await bcrypt.hash("123456", 10);
    await queryInterface.bulkInsert("users", [
      {
        first_name: "Admin",
        last_name: "User",
        birth: "1990-01-01",
        email: "admin@email.com",
        password: passwordHashed,
        role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {
      where: { email: "admin@email.com" },
    });
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("accounts", [
      
      {
        username: "Nisfun-banyak-bangetz-sekali",
        email: "nisfunbanyakemail@mail.com",
        password: "nisfun3478953",
        phone_number:"86734785536",
        status:"",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

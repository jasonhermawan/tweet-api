'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("tweets", [
      {
        userid: 1,
        content: "Hari ini saya pergi makan soto",
        image: "iniurl",
        date: new Date(),
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userid: 1,
        content: "Hari ini saya pergi minum esteh",
        image: "iniurl",
        date: new Date(),
        like: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userid: 2,
        content: "Hari ini saya pergi main bola",
        image: "iniurl",
        date: new Date(),
        like: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

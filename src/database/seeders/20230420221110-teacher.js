'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teachers', [
      {
        id: '8e4c65d0-abe9-405a-a2f4-5b71a2338cdd',
        names: 'Fabrice Mukunzi',
        email: 'fabmukunzi@gmail.com',
        password: 'pass',
        subjects:['Math'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        names: 'Bohneur Rumanzi',
        email: 'rumanzibohneur@gmail.com',
        password: 'pass',
        subjects:['SET'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};

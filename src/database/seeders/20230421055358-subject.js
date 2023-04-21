'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subjects', [
      {
        id: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        name: 'Math',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '872526ad-76be-4f44-b5d9-8032f0925c2d',
        name: 'Science',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Classes', [
      {
        id: '76432d88-a891-4c4f-9b8f-aca96513f47d',
        name: 'P1A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '872526ad-76be-4f44-b5d9-8032f0905c2d',
        name: 'P1B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '872526ad-76be-4f44-b5d9-8032f0925cbd',
        name: 'P2A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '872526ad-76be-4f44-b5d9-8032f0925c2a',
        name: 'P2B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};

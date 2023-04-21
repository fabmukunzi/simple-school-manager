'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        id: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        names: 'Fabrice Mukunzi',
        classe:'76432d88-a891-4c4f-9b8f-aca96513f47d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '872526ad-76be-4f44-b5d9-8032f0925c2d',
        names: 'Bohneur Rumanzi',
        classe:'76432d88-a891-4c4f-9b8f-aca96513f47d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '872526ad-76be-4f44-b5d9-8032f0925c3d',
        names: 'Kelly Ishimwe',
        classe:'872526ad-76be-4f44-b5d9-8032f0925cbd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '872526ad-76be-4f44-b5d9-8032f0925c4d',
        names: 'Emelyse Kelly',
        classe:'872526ad-76be-4f44-b5d9-8032f0925cbd',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '872526ad-76be-4f44-b5d9-8032f0925c5d',
        names: 'Oracle Isabwe',
        classe:'872526ad-76be-4f44-b5d9-8032f0905c2d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};

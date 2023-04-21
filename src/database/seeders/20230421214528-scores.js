'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Scores', [
      {
        id: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        subject: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        student:'76432d88-a891-4c4f-9b8f-aca96513f47d',
        work:'fd06eafd-3cdb-4335-aac8-8686c96d7345',
        marks:70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '58836112-d55b-4135-893b-059f5513e959',
        subject: 'acea4bd8-38e5-4799-a52b-a6dd9727ff51',
        student:'872526ad-76be-4f44-b5d9-8032f0925c2d',
        work:'8695a55e-3ca8-4984-a5ec-3bc2f6352992',
        marks:90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2de6de4b-af17-4940-b58a-c58eb880ba1d',
        subject: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        student:'872526ad-76be-4f44-b5d9-8032f0925c5d',
        work:'7e769543-0578-4094-bee7-847020b268ff',
        marks:30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'edc1eaab-ff03-4f66-b275-75d9472df76b',
        subject: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        student:'872526ad-76be-4f44-b5d9-8032f0925c4d',
        work:'faf5fb96-cd79-459a-9304-0fb667e71b73',
        marks:60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9a3931a0-ffa2-4947-8bf3-d37f8061a4fd',
        subject: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        student:'872526ad-76be-4f44-b5d9-8032f0925c3d',
        work:'8695a55e-3ca8-4984-a5ec-3bc2f6352992',
        marks:80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};

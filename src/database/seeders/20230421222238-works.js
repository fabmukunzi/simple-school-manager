'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Works', [
      {
        id: 'fd06eafd-3cdb-4335-aac8-8686c96d7345',
        name: 'exam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8695a55e-3ca8-4984-a5ec-3bc2f6352992',
        name: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7e769543-0578-4094-bee7-847020b268ff',
        name: 'quiz',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4813a82e-4f80-436a-a021-e2c544e64371',
        name: 'homework',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};

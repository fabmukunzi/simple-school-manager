'use strict';

/** @type {import('sequelize-cli').Migration} */
function cleanArray (arr) {
  return '{"' + arr.map(e => cleanEntry(e)).join('", "') + '"}';
}

function cleanEntry (obj) {
  return JSON.stringify(obj).replace(/"/g, '\\"');
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teachers', [
      {
        id: '8e4c65d0-abe9-405a-a2f4-5b71a2338cdd',
        names: 'Fabrice Mukunzi',
        email: 'fabmukunzi@gmail.com',
        password: 'pass',
        subjects:['76432d88-a891-4c4f-9b8f-aca96513f4dd'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '76432d88-a891-4c4f-9b8f-aca96513f4dd',
        names: 'Bohneur Rumanzi',
        email: 'rumanzibohneur@gmail.com',
        password: 'pass',
        subjects:['872526ad-76be-4f44-b5d9-8032f0925c2d'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {},
};

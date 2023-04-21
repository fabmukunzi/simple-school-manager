// import { Sequelize } from 'sequelize';
require('dotenv').config();

// module.exports ={
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": process.env.DATABASE,
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }},
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": process.env.DATABASE,
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "logging":false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": process.env.DATABASE,
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
// require('dotenv').config();

module.exports = {
  development: {
    // url: process.env.DEV_DATABASE_URL,
    database:'school-data',
    host:'localhost',
    password:null,
    dialect: 'postgres',
    // dialectOptions: {
    //   // ssl: {
    //   //   require: true,
    //   //   rejectUnauthorized: false,
    //   // },
    // },
    logging: false,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};


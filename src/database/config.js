import dotenv from 'dotenv';
import Sequelize from 'sequelize';
dotenv.config();

const db = new Sequelize(process.env.DATABASE, 'root', process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql',
});
export default db;

import express from 'express';
import router from './routes/index';
import dotenv from 'dotenv';
import cors from 'cors';

import { sequelize } from './database/models';
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
app.use('/', router);
sequelize
  .authenticate()
  .then((data) => {
    console.log(process.env.DEV_DATABASE_URL)
    console.log('Database connected successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to database:', err);
  });

//   Teachers{
//       id(uuid),
//       names(string)
//       email(string)
//       subjects(array(uuid))
//       classes(array(string))
//   }
//   Students{
//       id(uuid),
//       names(string),
//       email(string),
//       class(string),
//       subjects(array(uuid))
//   }
//   Subjects{
//       id(uuid),
//       name(string)
//   }
//   Scores{
//       id(uuid),
//       marks(integer)
//       subject(uuid)
//       student(uuid)
//   }

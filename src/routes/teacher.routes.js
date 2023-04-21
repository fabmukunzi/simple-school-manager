import express from 'express';
import { getSubjects, login } from '../controllers/teacher.controller';

const teacherRoutes = express.Router();

teacherRoutes.post('/login', login);
teacherRoutes.get('/:userId/subjects',getSubjects);

export default teacherRoutes;
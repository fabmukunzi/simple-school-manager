import express from 'express';
import { getClasses, getScores, getStudents, getSubjects, getWorks, login } from '../controllers/teacher.controller';

const teacherRoutes = express.Router();

teacherRoutes.post('/login', login);
teacherRoutes.get('/subjects',getSubjects);
teacherRoutes.get('/classes',getClasses)
teacherRoutes.get('/:classId/students',getStudents)
teacherRoutes.get('/scores',getScores)
teacherRoutes.get('/works',getWorks)

export default teacherRoutes;
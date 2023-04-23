import express from 'express';
import { addMarks, getClasses, getScores, getStudents, getSubjects, getWorks, login } from '../controllers/teacher.controller';
import { checkIfTeacherBelongsToSubject } from '../middlewares/teacher.middleware';

const teacherRoutes = express.Router();

teacherRoutes.post('/login', login);
teacherRoutes.get('/subjects',getSubjects);
teacherRoutes.get('/classes',getClasses)
teacherRoutes.get('/:classId/students',getStudents)
teacherRoutes.get('/scores',getScores)
teacherRoutes.get('/works',getWorks)
teacherRoutes.post('/addmarks',checkIfTeacherBelongsToSubject,addMarks)

export default teacherRoutes;
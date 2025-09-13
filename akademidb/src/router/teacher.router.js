import { createTeacher, getAllTeacher, getTeacherById } from '../controller/teacher.controller.js';
import express from "express"

const teacherRouter = express.Router();

teacherRouter.get("/",getAllTeacher);
teacherRouter.get(`/:idTeacher`,getTeacherById);
teacherRouter.post(`/newTeacher`,createTeacher);

export default teacherRouter;


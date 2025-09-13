import { createStudent, getAllStudent, getStudentById } from '../controller/student.controller.js';
import express from "express"

const studentRouter = express.Router();

studentRouter.get("/",getAllStudent);
studentRouter.get(`/:idStudent`,getStudentById);
studentRouter.post(`/newStudent`,createStudent);

export default studentRouter;



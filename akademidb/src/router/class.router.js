import { createClass, getAllClass, getClassById } from '../controller/class.controller.js';
import express from "express"

const classRouter = express.Router();

classRouter.get("/",getAllClass);
classRouter.get(`/:idClass`,getClassById);
classRouter.post(`/newClass`,createClass);

export default classRouter;



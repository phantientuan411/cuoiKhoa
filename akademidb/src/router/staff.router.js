import { createStaff, getAllStaff, getStaffById } from '../controller/staff.controller.js';
import express from "express"

const staffRouter = express.Router();

staffRouter.get("/",getAllStaff);
staffRouter.get(`/:idStaff`,getStaffById);
staffRouter.post(`/newStaff`,createStaff);

export default staffRouter;



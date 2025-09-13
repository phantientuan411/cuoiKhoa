import { createFood, getAllFood, getFoodById } from '../controller/food.controller.js';
import express from "express"

const foodRouter = express.Router();

foodRouter.get("/",getAllFood);
foodRouter.get(`/:idFood`,getFoodById);
foodRouter.post(`/newFood`,createFood);

export default foodRouter;



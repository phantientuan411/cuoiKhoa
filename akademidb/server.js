import express, { Router } from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import teachertRouter from './src/router/teacher.router.js';
import studentRouter from './src/router/student.router.js';
import classRouter from './src/router/class.router.js';
import foodRouter from './src/router/food.router.js';
import staffRouter from './src/router/staff.router.js';
import dotenv from 'dotenv'
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
dotenv.config({ path: '.env.local' });
const host = "localhost";
const port = 8001;
app.get(`/`, (req, res) => {
    res.send("hello")
})
app.use(`/student`, studentRouter);
app.use(`/teacher`, teachertRouter);
app.use(`/class`, classRouter);
app.use(`/food`, foodRouter);
app.use(`/staff`, staffRouter);
mongoose
    .connect(process.env.uri)
    .then((res) => {
        console.log(`connected to database ${mongoose.connection.db.databaseName} `);
        app.listen(port, host, () => {
            console.log(`Server running at http://${host}:${port}/`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
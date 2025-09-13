import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";
const teacherSchema = new Schema({
    IdTeacher: { type: String, require: true, unique: true },
    FullName: { type: String, require: true },
    NameLogin: { type: String, require: true, unique: true },
    Email: { type: String, require: true, unique: true },
    Password: { type: String, require: true },
    Adress:{ type: String,},
    PhoneNumber: { type: Number },
    DayOfBird:{type:Date},
    Age: { type: Number },
    Class:{type:String},
    Gender:{type:String, enum:["male","female",'orther']}
})
const TeacherModel = mongoose.model("teacher", teacherSchema, "teacher");
export default TeacherModel;
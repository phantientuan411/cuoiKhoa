import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";
const studentSchema =  new Schema({
    IdStudent: { type: String, require: true, unique: true },
    FullName: { type: String, require: true },
    NameLogin: { type: String, require: true, unique: true },
    Email: { type: String, require: true, unique: true },
    Password: { type: String, require: true },
    Adress:{ type: String,},
    PhoneNumber: { type: Number },
    Mom:{ type: String,},
    Dad:{ type: String,},
    DayOfBird:{type:Date},
    Age: { type: Number },
    Class:{type:String, ref:"class"},
    Gender:{type:String, enum:["male","female",'orther']}
})
const StudentModel = mongoose.model("student", studentSchema, "student");
export default StudentModel;
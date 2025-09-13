import mongoose, { Schema } from "mongoose";

import { v4 } from "uuid";
const classSchema = new Schema({
    classId:{type:String, required:true,unique: true},
    className:{type:String,required:true},
    teacher:{type:String,required: true},
    numbeStudent:{type:Number,required:true},
    student:{type:String,ref:'student',required:true}
})
const ClassModel = mongoose.model('class', classSchema,"class");
export default ClassModel;
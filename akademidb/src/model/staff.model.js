import mongoose, { Schema } from "mongoose";
const staffSchema = new Schema({    
    IdStaff: { type: String, require: true, unique: true },
    FullName: { type: String, require: true },
    NameLogin: { type: String, require: true, unique: true },
    Email: { type: String, require: true, unique: true },
    Password: { type: String, require: true },
    Adress:{ type: String,},
    PhoneNumber: { type: Number },
    DayOfBird:{type:Date},
    Age: { type: Number },
    Gender:{type:String, enum:["male","female",'orther']}
})
const StaffModel = mongoose.model("staff", staffSchema, "staff");
export default StaffModel;
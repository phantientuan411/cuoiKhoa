import mongoose, { Schema } from "mongoose";
const foodSchema = new Schema({
    FoodName:{type:String ,require:true ,unique:true},
    Ingredient:{type:String ,require:true ,unique:true},
    Review:{type:String ,require:true ,unique:true},
    Time:{type:String ,require:true ,enum:['breakfast', 'lunch', 'dinner']},

})
const FoodModel = mongoose.model("food",foodSchema);
export default FoodModel
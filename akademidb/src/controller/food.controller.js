import FoodModel from "../model/Food.model.js";


const getAllFood = async (req, res) => {
    try {
        const FoodData = await FoodModel.find();
        if (FoodData.length === 0) {
            return res.status(404).send({
                data: [],
                message: "data not found"
            })
        }
        res.status(200).send({
            data: FoodData,
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            data: [],
            message: error.message
        })
    }

}
const getFoodById = async (req, res) => {
    try {
        const FoodId = await FoodModel.findById({ IdFood: req.parrams.IdFood });
        if (!FoodId) {
            return res.status(404).send({
                data: [],
                message: "Food not found"
            })
        }
        res.status(200).send({
            data: FoodId,
            message: "success"
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
const createFood = async (req, res) => {
    try {
        const data = req.body;
        const findFood = await FoodModel.find({ FoodName: data.FoodName });
        const findIngredient = await FoodModel.find({ Ingredient: data.Ingredient });
        if(findFood || findIngredient){
            return res.status(404).send({
                message:`dist ${findFood.FoodName} already exist`,
            })
        }
        const newFood = await FoodModel.create(data);
        res.status(200).send("success");
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}
export {
    getAllFood,
    getFoodById,
    createFood
}
import StaffModel from "../model/Staff.model.js";


const getAllStaff = async (req, res) => {
    try {
        const StaffData = await StaffModel.find();
        console.log(StaffData);
        
        if (StaffData.length === 0) {
            return res.status(404).send({
                data: [],
                message: "data not found"
            })
        }
        res.status(200).send({
            data: StaffData,
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            data: [],
            message: error.message
        })
    }

}
const getStaffById = async (req, res) => {
    try {
        const StaffId = await StaffModel.findById({ IdStaff: req.parrams.IdStaff });
        if (!StaffId) {
            return res.status(404).send({
                data: [],
                message: "Staff not found"
            })
        }
        res.status(200).send({
            data: StaffId,
            message: "success"
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
const createStaff = async (req, res) => {
    try {
        const data = req.body;
        const findEmail = await StaffModel.findOne({ Email: data.Email });
        if (findEmail) {
            return res.status(400).send({
                message: "email aready exits",
            })
        }
        if (!data.IdStaff || !data.FullName || !data.NameLogin || !data.Email || !data.Password) {
            return res.status(400).send({
                message: " need fully inform",
            })
        }
        const newStaff = StaffModel.create(data);
        res.status(200).send({
            data: newStaff,
            message: "success"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export {
    getAllStaff,
    getStaffById,
    createStaff
}
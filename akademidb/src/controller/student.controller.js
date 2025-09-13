import StudentModel from "../model/student.model.js";


const getAllStudent = async (req, res) => {
    try {
        const studentData = await StudentModel.find();
        if (studentData.length === 0) {
            return res.status(404).send({
                data: [],
                message: "data not found"
            })
        }
        res.status(200).send({
            data: studentData,
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            data: [],
            message: error.message
        })
    }

}
const getStudentById = async (req, res) => {
    try {
        const studentId = await StudentModel.findById({ IdStudent: req.parrams.IdStudent });
        if (!studentId) {
            return res.status(404).send({
                data: [],
                message: "student not found"
            })
        }
        res.status(200).send({
            data: studentId,
            message: "success"
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
const createStudent = async (req, res) => {
    try {
        const data = req.body;
        const findEmail = await StudentModel.findOne({ Email: data.Email });
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
        const newStudent = StudentModel.create(data)
        res.status(200).send({
            data: newStudent,
            message: "success"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export {
    getAllStudent,
    getStudentById,
    createStudent
}
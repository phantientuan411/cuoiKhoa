import TeacherModel from "../model/teacher.model.js";


const getAllTeacher = async (req, res) => {
    try {
        const TeacherData = await TeacherModel.find();
        if (TeacherData.length === 0) {
            return res.status(404).send({
                data: [],
                message: "data not found"
            })
        }
        res.status(200).send({
            data: TeacherData,
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            data: [],
            message: error.message
        })
    }

}
const getTeacherById = async (req, res) => {
    try {
        const TeacherId = await TeacherModel.findById({ IdTeacher: req.parrams.IdTeacher });
        if (!TeacherId) {
            return res.status(404).send({
                data: [],
                message: "Teacher not found"
            })
        }
        res.status(200).send({
            data: TeacherId,
            message: "success"
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
const createTeacher = async (req, res) => {
    try {
        const data = req.body;
        const findEmail = await TeacherModel.find({ Email: data.Email });
        if (findEmail) {
            return res.status(400).send({
                message: "email aready exits",
            })
        }
        if (!data.Password || !data.Email || !data.FullName || !data.IdTeacher == []) {
            return res.status(400).send({
                message: " need fully inform",
            })
        }
        const newTeacher = TeacherModel.create(data)
        res.status(200).send({
            data: newTeacher,
            message: "success"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export {
    getAllTeacher,
    getTeacherById,
    createTeacher
}
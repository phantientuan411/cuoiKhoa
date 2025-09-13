import ClassModel from "../model/class.model.js";
import StudentModel from "../model/student.model.js";
import TeacherModel from "../model/teacher.model.js";
const getAllClass = async (req, res) => {
    try {
        const ClassData = await ClassModel.find();
        if (ClassData.length === 0) {
            return res.status(404).send({
                data: [],
                message: "data not found"
            })
        }
        res.status(200).send({
            data: ClassData,
            message: "success"
        })
    } catch (error) {
        res.status(500).send({
            data: [],
            message: error.message
        })
    }

}
const getClassById = async (req, res) => {
    try {
        const ClassId = await ClassModel.findById({ IdClass: req.parrams.IdClass });
        if (!ClassId) {
            return res.status(404).send({
                data: [],
                message: "Class not found"
            })
        }
        res.status(200).send({
            data: ClassId,
            message: "success"
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
const createClass = async (req, res) => {
    try {
        const data = req.body;
        const findClass = await ClassModel.find({ classId: data.classId });
        const checkTeacher = await TeacherModel.findOne({IdTeacher: data.teacher})
        const student = await ClassModel.find({ student: data.student });
        if(findClass){
            return res.status(404).send({
                message:`Class ${data.className} already exist`
            })
        }

        res.status(200).send({
            data:data,
            message:"success"
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export {
    getAllClass,
    getClassById,
    createClass
}
const Class = require('../models/classSchema');
const Student = require('../models/studentSchema');

const registerStudent = async (req, res) => {
    try {
        const { name, contact, gender, className, DOB, feesPaid } = req.body;

        const existingClass = await Class.findOne({ className });

        if (!existingClass) {
            return res.status(400).json({ error: 'Invalid className', message: 'The specified class does not exist' });
        }

        const newStudent = new Student({
            name,
            contact,
            gender,
            className: existingClass._id,
            DOB,
            feesPaid
        });

        const savedStudent = await newStudent.save();

        
        existingClass.studentList.push(savedStudent._id);
        await existingClass.save();


        res.status(201).json(savedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const getTotalFeesPaid = async (req, res) => {
    try {
    
        const allStudents = await Student.find();

        const totalFeesPaid = allStudents.reduce((acc, student) => acc + student.feesPaid, 0);

        res.status(200).json({ totalFeesPaid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = {registerStudent,getTotalFeesPaid};

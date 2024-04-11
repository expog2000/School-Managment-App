const Class = require('../models/classSchema');

const Teacher = require('../models/teacherSchema');


const registerTeacher = async (req, res) => {
    try {
        const { name, contact, gender, className, DOB, salary } = req.body;

        
        const existingClass = await Class.findOne({ className });

        if (!existingClass) {
            return res.status(400).json({ error: 'Invalid className', message: 'The specified class does not exist' });
        }

        const newteacher = new Teacher({
            name,
            contact,
            gender,
            className: existingClass._id,
            DOB,
            salary
        });

        const savedTeacher = await newteacher.save();


        res.status(201).json(savedTeacher);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getTotalSalary = async (req, res) => {
    try {
    
        const allTeachers = await Teacher.find();


        const totalSalary = allTeachers.reduce((acc, teacher) => acc + teacher.salary, 0);

        res.status(200).json({ totalSalary });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAllTeacher = async (req, res) => {
    try {
      
        const allTeacher = await Teacher.find();
        console.log("teacher",allTeacher)

        res.status(200).json({ teacher: allTeacher });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const teacherId = req.body.teacherId;
        console.log("id",teacherId)
        const foundTeacher = await Teacher.findById(teacherId); 

        if (!foundTeacher) {
            return res.status(404).json({ error: 'Teacher not found', message: 'The specified teacher does not exist' });
        }

       
        await Class.updateMany({ teacher: teacherId }, { $unset: { teacher: "" } });

        await Teacher.findByIdAndDelete(teacherId);

        res.status(200).json({ message: 'Teacher deleted successfully', teacher: foundTeacher });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {registerTeacher,getTotalSalary,getAllTeacher,deleteTeacher};

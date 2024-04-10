const express = require('express');
const Class = require('../models/classSchema');
const Teacher = require('../models/teacherSchema');
const Student=require('../models/studentSchema')

const router = express.Router();

const registerClass = async (req, res) => {
    try {
        const { className, year, studentFees } = req.body;

        const newClass = new Class({
            className,
            year,
            studentFees
        });

       
        const savedClass = await newClass.save();

        res.status(201).json(savedClass);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const getAllStudentsInClass = async (req, res) => {
    try {
     
        console.log("Query Parameters:", req.query);
        const { className } = req.query;
        console.log("className:", className);
        
        
        const foundClass = await Class.findOne({ className });

        
        if (!foundClass) {
            return res.status(404).json({ error: 'Class not found', message: 'The specified class does not exist' });
        }

        
        const studentIds = foundClass.studentList;

        const students = await Student.find({ _id: { $in: studentIds } });


        const studentDetails = students.map(student => ({
            name: student.name,
            gender: student.gender
        }));


        res.status(200).json(studentDetails);
    } catch (error) {
       
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const getAllClasses = async (req, res) => {
    try {
      
        const allClasses = await Class.find();
        console.log("class",allClasses)

        res.status(200).json({ classes: allClasses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteClass = async (req, res) => {
    try {
        const classId = req.body.classId;

       
        const deletedClass = await Class.findById(classId);

        if (!deletedClass) {
            return res.status(404).json({ error: 'Class not found', message: 'The specified class does not exist' });
        }

        await Student.updateMany({ className: deletedClass._id }, { $set: { className: null } });
        await Teacher.updateMany({ className: deletedClass._id }, { $set: { className: null } });

        await Class.findByIdAndDelete(classId);

        res.status(200).json(deletedClass);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = { registerClass, getAllStudentsInClass,deleteClass,getAllClasses };
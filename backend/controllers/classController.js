const express = require('express');
const Class = require('../models/classSchema');
const Teacher = require('../models/teacherSchema');

const router = express.Router();

const registerClass = async (req, res) => {
    try {
        const { className, year, studentFees } = req.body;

        // Check if the teacher exists
        // const existingTeacher = await Teacher.findById(teacher);

        // if (!existingTeacher) {
        //     return res.status(400).json({ error: 'Invalid teacherId', message: 'The specified teacher does not exist' });
        // }

        // Create a new class document
        const newClass = new Class({
            className,
            year,
            studentFees
        });

        // Save the class document to the database
        const savedClass = await newClass.save();

        // Return the saved class data as a response
        res.status(201).json(savedClass);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getClassWithStudents = async (req, res) => {
    try {
        // Find the class document by its ID
        const classId = req.params.classId; // Assuming classId is passed as a route parameter
        const foundClass = await Class.findById(classId).populate('studentList');

        // Check if the class exists
        if (!foundClass) {
            return res.status(404).json({ error: 'Class not found', message: 'The specified class does not exist' });
        }

        // Return the class document with populated studentList
        res.status(200).json(foundClass);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = registerClass ;
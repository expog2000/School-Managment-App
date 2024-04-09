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

module.exports = registerTeacher;

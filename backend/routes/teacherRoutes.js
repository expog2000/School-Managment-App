const express = require('express');

const {registerTeacher,getTotalSalary,getAllTeacher,deleteTeacher} = require('../controllers/TeacherController');

const router = express.Router();

router.post('/', registerTeacher);
router.get('/total-salary', getTotalSalary);
router.get('/teacher-list', getAllTeacher);
router.delete('/delete', deleteTeacher);

module.exports = router;



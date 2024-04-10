const express = require('express');

const {registerTeacher,getTotalSalary} = require('../controllers/TeacherController');

const router = express.Router();

router.post('/', registerTeacher);
router.get('/total-salary', getTotalSalary);

module.exports = router;



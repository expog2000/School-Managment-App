const express = require('express');
const {registerStudent,getTotalFeesPaid,getAllStudents,deleteStudent} = require('../controllers/studentController');

const router = express.Router();

router.post('/', registerStudent);
router.get('/total-fees',getTotalFeesPaid);
router.get('/student-list',getAllStudents);
router.delete('/delete',deleteStudent);



module.exports = router;



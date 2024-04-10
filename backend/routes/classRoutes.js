const express = require('express');
const {registerClass,getAllStudentsInClass,deleteClass,getAllClasses} = require('../controllers/classController');


const router = express.Router();

router.post('/', registerClass);

router.get('/student-list',getAllStudentsInClass)

router.get('/class-list',getAllClasses);

router.delete('/delete',deleteClass)

module.exports = router;

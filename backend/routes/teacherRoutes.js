const express = require('express');

const registerTeacher = require('../controllers/TeacherController');

const router = express.Router();

router.post('/', registerTeacher);

module.exports = router;



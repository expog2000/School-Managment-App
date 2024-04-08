const express = require('express');
const registerStudent = require('../controllers/studentController');

const router = express.Router();

// Define route for registering a student (POST request)
router.post('/', registerStudent);

module.exports = router;

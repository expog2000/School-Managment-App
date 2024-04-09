const express = require('express');
const registerClass = require('../controllers/classController');


const router = express.Router();

router.post('/', registerClass);

module.exports = router;

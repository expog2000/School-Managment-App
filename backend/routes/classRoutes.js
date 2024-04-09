const express = require('express');
const {registerClass,getAllStudentsInClass,deleteClass} = require('../controllers/classController');


const router = express.Router();

router.post('/', registerClass);

router.get('/list',getAllStudentsInClass)

router.delete('/delete',deleteClass)

module.exports = router;

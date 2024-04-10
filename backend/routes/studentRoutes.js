const express = require('express');
const {registerStudent,getTotalFeesPaid} = require('../controllers/studentController');

const router = express.Router();

router.post('/', registerStudent);
router.get('/total-fees',getTotalFeesPaid);

module.exports = router;



const express = require('express');
const globalAccess = require('../middlewares/auth');
const { upload } = require('../middlewares/multer');
const { verify, allEmployee, employee } = require('../controllers/employeeController');
const router = express.Router();
router.post('/verify', upload.any(), verify);
router.get('/employee/:employee_id', upload.any(), employee);
router.get('/allEmployee', allEmployee);;
module.exports = router;
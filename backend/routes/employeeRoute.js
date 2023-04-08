const express = require('express');
const globalAccess = require('../middlewares/auth');
const { upload } = require('../middlewares/multer');
const { verify } = require('../controllers/employeeController');
const router = express.Router();
router.post('/verify', upload.any(), verify);
module.exports = router;
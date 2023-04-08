const express = require('express');
const globalAccess = require('../middlewares/auth');
const { upload } = require('../middlewares/multer');
const { signup } = require('../controllers/adminController');
const router = express.Router();
router.post('/signup',signup)
module.exports = router;
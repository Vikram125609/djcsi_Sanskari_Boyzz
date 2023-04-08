const express = require('express');
const globalAccess = require('../middlewares/auth');
const { upload } = require('../middlewares/multer');
const { signup, flag } = require('../controllers/hrController');
const router = express.Router();
router.post('/signup', upload.any(), signup);
router.post('/feedback',flag);
module.exports = router;
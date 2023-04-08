const Admin = require('../models/adminModel');
const path = require('path')
const { sendSuccess, sendError } = require('../utils/apiResponse');
const { uploadImage } = require('../utils/uploadImage');
const { getToken } = require('../utils/getToken');

const signup = async (req, res, next) => {
    const { first_name, last_name, email } = req.body;

    const admin = new Admin({
        first_name: first_name,
        last_name: last_name,
        email: email,
    });

    await admin.save();

    const finalResponse = {
        admin: admin
    }
    return sendSuccess(res, 200, "Signup Successfully", finalResponse);
};

module.exports = { signup };
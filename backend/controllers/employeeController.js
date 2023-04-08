const Employee = require('../models/employeeModel');
const { sendSuccess, sendError } = require('../utils/apiResponse');
const { uploadImage } = require('../utils/uploadImage');
const { getToken } = require('../utils/getToken');

const signup = async (req, res, next) => {
    const { first_name, last_name, address, working_status } = req.body;
    return sendSuccess(res, 200, "Signup Successfully", finalResponse);
};
module.exports = { signup };
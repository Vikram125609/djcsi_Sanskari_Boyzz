const Hr = require('../models/hrModel');
const Flag = require('./../models/flagModel');
const Employee = require('../models/employeeModel');
const path = require('path')
const { sendSuccess, sendError } = require('../utils/apiResponse');
const { uploadImage } = require('../utils/uploadImage');
const { getToken } = require('../utils/getToken');

const signup = async (req, res, next) => {
    const { first_name, last_name, email, fcm, image, working_at } = req.body;

    const imagePath = path.join(__dirname, `../uploaded-images/${req.files[0].fieldname}-${req.files[0].originalname}`)
    const data = await uploadImage(imagePath);

    const hr = new Hr({
        first_name: first_name,
        last_name: last_name,
        email: email,
        fcm: fcm,
        image: data.url,
        working_at: working_at
    });

    await hr.save();

    const finalResponse = {
        hr: hr
    }
    return sendSuccess(res, 200, "Signup Successfully", finalResponse);
};

const flag = async (req, res, next) => {
    const { employee_id } = req.params;
    const { flag, hr_id } = req.body;

    console.log(employee_id);
    console.log(flag);
    console.log(hr_id);

    let employee = await Employee.findByIdAndUpdate(
        { _id: employee_id },
        { "flag": flag },
        { new: true, runValidators: true }
    );

    // Send Notification From Here
    
    const markFlag = new Flag({
        hr_id: hr_id,
        employee_id: employee_id,
        flag: flag
    })

    await markFlag.save();

    const finalRespnse = {
        employee: employee,
        markFlag: markFlag
    }

    return sendSuccess(res, 200, `Employee Marked With The ${flag}`, finalRespnse);
}
module.exports = { signup, flag };
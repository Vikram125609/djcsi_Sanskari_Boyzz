const Employee = require('../models/employeeModel');
const Admin = require('../models/adminModel');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const fs = require('fs');
const Formdata = require('form-data');
const axios = require('axios');
const path = require('path')
const { sendSuccess, sendError } = require('../utils/apiResponse');
const { uploadImage } = require('../utils/uploadImage');
const { getToken } = require('../utils/getToken');

const verify = async (req, res, next) => {

    var matched = true;

    const { first_name, last_name, address, working_status } = req.body;

    const imagePath1 = path.join(__dirname, `../uploaded-images/aadhar-${req.files[0].originalname}`);
    const imagePath2 = path.join(__dirname, `../uploaded-images/pancard-${req.files[1].originalname}`);
    const imagePath3 = path.join(__dirname, `../uploaded-images/person-${req.files[2].originalname}`);

    const url1 = await uploadImage(imagePath1);
    const url2 = await uploadImage(imagePath2);
    const url3 = await uploadImage(imagePath3);

    let form_data = new Formdata();

    const uniqueId = Math.floor((Math.random() * 1000000) + 1);

    form_data.append('aadhar', url1.url);
    form_data.append('pancard', url2.url);
    form_data.append('photo', url3.url);
    form_data.append('name', first_name);

    try {
        const response = await axios.post('http://192.168.43.101:5000/upload', form_data);
        if (String(response?.data) === "__Different") {
            matched = false;
        }
        console.log(response?.data);

    } catch (error) {
        console.log(error);
    }

    let aadhar_no;

    try {
        const form = new Formdata();
        form.append('files', fs.readFileSync(path.join(__dirname, `../uploaded-images/aadhar-${req.files[0].originalname}`)), path.join(__dirname, `../uploaded-images/aadhar-${req.files[0].originalname}`));

        const response = await axios.post(
            'https://nationalapi.docsumo.com/api/v1/national/extract/',
            form,
            {
                params: {
                    'side': 'front',
                    'save_data': 'false',
                    'return_redacted': 'false',
                    'fraud_check': 'true'
                },
                headers: {
                    ...form.getHeaders(),
                    'X-API-KEY': '8A9bHKifEJLjZgKt7j4uJElzofocYNeNdYEl93wBsGHS2IhNXbd6ZDKuwkAI'
                }
            }
        );

        if (response) {
            aadhar_no = response?.data?.data?.no?.value;
        }

    } catch (error) {
        console.log(error);
    }

    const employee = new Employee({
        aadhar_no: aadhar_no,
        first_name: first_name,
        last_name: last_name,
        address: address,
        working_status: working_status,
        aadhar: url1.url,
        pancard: url2.url,
        image: url3.url
    });

    console.log(matched);

    if (matched) {
        console.log('yaha par true');
        await employee.save();
        const finalResponse = {
            employee: employee
        }
        return sendSuccess(res, 200, "Signup Successfully", finalResponse);
    }
    else {
        console.log('yaha par false');
        await employee.save();
        const admin = await Admin.findByIdAndUpdate(
            { _id: "6431672a5d04f400022772b4" },
            { $push: { "unverified_user": employee._id } },
            { new: true, runValidators: true }
        );
        return sendError(res, 400, 'Images are not matched');
    }

};
module.exports = { verify };
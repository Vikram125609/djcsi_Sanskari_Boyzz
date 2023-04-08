const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: ['true', 'Please enter the first name ']
    },
    last_name: {
        type: String,
        required: ['true', 'Please enter the last name']
    },
    address: {
        type: String,
        default: ""
    },
    working_status: {
        type: String,
        default: ""
    },
    past_employers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hr'
        }
    ],
    // Yaha par feedback ka model aayega 
    feedback: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hr'
        }
    ],
    // Yaha par rating ka model aayega
    rating: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hr'
        }
    ],
    image: {
        type: String,
        default: ""
    },
    is_verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
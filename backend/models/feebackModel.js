const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    hr_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hr'
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    feedback: {
        type: String,
        default: ""
    }
})

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
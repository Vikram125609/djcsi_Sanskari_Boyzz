const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: ['true', 'Please enter the first name ']
    },
    last_name: {
        type: String,
        required: ['true', 'Please enter the last name']
    },
    email: {
        type: String,
        default: ""
    },

}, { timestamps: true })

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
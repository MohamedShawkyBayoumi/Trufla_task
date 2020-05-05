const mongoose = require('mongoose');

const Departments = mongoose.model('Departments', {
    name: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Departments;
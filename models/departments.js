const mongoose = require('mongoose');

const DepartmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        }
    ]
})

module.exports = mongoose.model('Departments', DepartmentsSchema);
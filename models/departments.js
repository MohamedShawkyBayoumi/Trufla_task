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

// DepartmentsSchema.virtual('products', {
//     ref: 'Products',
//     localField: '_id',
//     foreignField: 'department_id',
// });

module.exports = mongoose.model('Departments', DepartmentsSchema);
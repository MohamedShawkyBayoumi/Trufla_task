const mongoose = require('mongoose');

const Products = mongoose.model('Products', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Departments'
    }
})

module.exports = Products;
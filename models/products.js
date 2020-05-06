const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
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
    },
    promotions: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Promotions'
    }]
})

module.exports = mongoose.model('Products', ProductsSchema);
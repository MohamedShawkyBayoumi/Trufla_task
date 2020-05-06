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

ProductsSchema.virtual('products', {
    ref: 'Departments',
    localField: 'department_id',
    foreignField: '_id',
});

// ProductsSchema.virtual('promotions', {
//     ref: 'Promotions',
//     localField: 'promotion_id',
//     foreignField: '_id',
// });


module.exports = mongoose.model('Products', ProductsSchema);
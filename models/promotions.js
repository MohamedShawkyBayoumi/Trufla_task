const mongoose = require('mongoose');

const ProductsPromotions = mongoose.model('ProductsPromotions', {
    code: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    discount: {
        type: Boolean,
        required: true
    }
})

module.exports = ProductsPromotions;
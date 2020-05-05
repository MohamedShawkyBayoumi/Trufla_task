const mongoose = require('mongoose');

const ProductsPromotions = mongoose.model('ProductsPromotions', {
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Products'
    },
    promotion_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ProductsPromotions'
    },
})

module.exports = ProductsPromotions;
const mongoose = require('mongoose');

const Promotions = mongoose.model('Promotions', {
    code: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
})

module.exports = Promotions;
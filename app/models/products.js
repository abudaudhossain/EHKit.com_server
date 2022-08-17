const mongoose = require('mongoose')

const field = {
    token: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    minimumOrderQuantity: {
        type: Number
    },
    availableQuantity: {
        type: Number
    },
    featureToken: {
        type: String
    },
    categoryToken: {
        type: String
    },
    brand: {
        type: String
    },
    status:{
        type: String
    }
}

const appProductSchema = mongoose.Schema(field, { timestamps: true })
module.exports = mongoose.model('AppProduct', appProductSchema)
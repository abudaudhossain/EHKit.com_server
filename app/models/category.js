const mongoose = require('mongoose')

const field = {
    token: {
        type: String
    },
    featureToken: {
        type: String
    },
    userToken: {
        type: String
    },
    status: {
        type: String
    },
    title: {
        type: String
    },
    
    description: {
        type: String
    },
    route:{
        type: String
    },
    image: {
        type: String
    },
    
}

const appCategorySchema = mongoose.Schema(field, {timestamps: true})

module.exports= mongoose.model('AppCategory', appCategorySchema)
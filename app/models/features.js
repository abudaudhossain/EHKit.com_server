const mongoose = require('mongoose')

const field = {
    token: {
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

const appFeaturesSchema = (field, {timestamps: true})

module.exports= mongoose.model('appFeatures', appFeaturesSchema)
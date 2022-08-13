const mongoose = require('mongoose');

const field = {
    token: {
        type: String
    },
    name: {
        type:String
    },
    email:{
        type: String,
    },  
    phone:{
        type: String,
    },
    address:{
        type: String,
    },   
    image: {
        type: String,
    },
    status:{
        type: String
    },
    rule:{
        type: String
    }
}

const appUserProfileSchema = mongoose.Schema(field, {timestamps: true })

module.exports =mongoose.model("AppUserProfile", appUserProfileSchema) 
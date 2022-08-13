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
    ipAddress: {
        type: String
    }
}

const appAuthSessionSchema = (field, {timestamps: true})

module.exports= mongoose.model('appAuthSession', appAuthSessionSchema)
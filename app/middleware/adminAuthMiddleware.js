const handlers = require("../exceptions/handlers");
const ValidationError = require("../exceptions/ValidationError");
const JWT = require('jsonwebtoken');
const UnauthorizedError = require("../exceptions/UnauthorizedError");
const AppUserProfile = require("../models/userProfile")


module.exports = async (req, res, next) => {
    try {
        // console.log(req.headers )
        // json web token verification
        const { setAppUserToken } = req.body
        const users = await AppUserProfile.find({ token: setAppUserToken })
        if (users[0]?.rule !== 'admin') throw new UnauthorizedError("User Is wrong.Only Access Admin.👽👽👾👽👽👽");

        next()
    } catch (error) {
        console.log(error)
        handlers({
            'errorLog': {
                'location': req.originalUrl.split("/").join("::"),
                'query': `WELCOME TO WEBSITE BLOCK IN ADMIN MIDDLEWARE`,
                'details': `Error : ${error}`
            },
            error
        }, res)
    }
}
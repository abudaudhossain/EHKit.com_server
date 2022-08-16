const handlers = require("../exceptions/handlers");
const ValidationError = require("../exceptions/ValidationError");
const JWT = require('jsonwebtoken');
const UnauthorizedError = require("../exceptions/UnauthorizedError");
const AppUserProfile = require("../models/userProfile")
const AppAuthSession = require("../models/authSession")

module.exports = async (req, res, next) => {
    try {
        // console.log(req.headers )
        // json web token verification
        const JWToken = req.headers.authorization.split(" ")[1];

        let decoded = JWT.verify(JWToken, process.env.SECRET, (err, decoded) => {
            if (err) throw new UnauthorizedError("🤑🤑🤑👾👾jwt Is wrong.Please Login Now.👽👽👾👽👽👽");
            return decoded;
        });
        const { userToken, sessionToken } = decoded;
        const users = await AppUserProfile.find({ token: userToken })

        if (!users?.length > 0) throw new UnauthorizedError("User Is wrong.Please Create A new Account.👽👽👾👽👽👽");
        req.body.setAppUserToken = userToken;

        const session = await AppAuthSession.find({ token: sessionToken })
        // console.log(session, "user middleware")

        if (session[0]?.status !== 'active') throw new UnauthorizedError("User Session Is wrong.Please Login First.👽👽👾👽👽👽");
        console.log(session[0]?.status, "user middleware")

        next()
    } catch (error) {
        console.log(error)
        handlers({
            'errorLog': {
                'location': req.originalUrl.split("/").join("::"),
                'query': `WELCOME TO WEBSITE BLOCK IN MIDDLE`,
                'details': `Error : ${error}`
            },
            error
        }, res)
    }
}
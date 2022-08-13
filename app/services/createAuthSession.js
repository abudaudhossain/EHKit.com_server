const handlers = require("../exceptions/handlers");
const ValidationError = require("../exceptions/ValidationError");
const { getJWT } = require("../helpers/utils");
const { getToken } = require("../helpers/validation/helper");

const AppAuthSession = require('../models/authSession')

module.exports = async (userToken, ipAddress) => {
    try {

        const token = getToken("UserSession");
        const jwtToken = getJWT(userToken, token);
        const newAuthSession = new AppAuthSession({
            token,
            userToken,
            ipAddress,
            status: "active",
        })
        await newAuthSession.save()

        console.log("jwt", jwtToken);
        return jwtToken;
    } catch (error) {
        console.log(error)

    }
}
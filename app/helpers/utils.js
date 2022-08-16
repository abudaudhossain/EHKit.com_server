const JWT = require('jsonwebtoken')

module.exports = {
    getJWT: (userToken, sessionToken) => {
        return JWT.sign({ userToken, sessionToken }, process.env.SECRET);
    }
}
const handlers = require("../exceptions/handlers");
const NotAcceptableError = require("../exceptions/NotAcceptableError");
const nativeResponse = require("../helpers/nativeResponse");
const helper = require("../helpers/validation/helper");
const AppUserProfile = require("../models/userProfile")

module.exports = {
    updateUserProfile: async (req, res) => {
        let message = "User Profile Update Success"
        try {

            // @validation part
            const { setAppUserToken } = req.body;

            delete req.body.setAppUserToken;
            const updateProperties = Object.keys(req.body);
            if (updateProperties.indexOf("email") !== -1 || updateProperties.indexOf("token") !== -1 || updateProperties.indexOf("rule") !== -1) throw new NotAcceptableError("email can not update")

            const updateValue = Object.values(req.body);
            helper.isEmpty(updateValue);

            //@business
            const updateInfo = req.body;
            const updateUser = await AppUserProfile.findOneAndUpdate({ token: setAppUserToken }, updateInfo, { upsert: true, })


            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": message,
                "errorLog": "",
                "data": { user: updateInfo }
            }, 200, res)

        } catch (error) {
            console.log(error)
            handlers({
                'errorLog': {
                    'location': req.originalUrl.split("/").join("::"),
                    'query': `WELCOME TO WEBSITE BLOCK`,
                    'details': `Error : ${error}`
                },
                error
            }, res)
        }
    }
}
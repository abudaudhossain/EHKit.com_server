const handlers = require("../exceptions/handlers")
const nativeResponse = require("../helpers/nativeResponse")
const helper = require("../helpers/validation/helper")
const AppUserProfile = require("../models/userProfile")
const createAuthSession = require("../services/createAuthSession")

module.exports = {
    createUserAccount: async (req, res) => {
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        let message = "login Success";
        const { name, email, rule } = req.body
        try {
            //@ validation part
            //check email and name validated
            helper.objExit(["email", "name", "rule"], req.body)
            helper.isEmpty([name, email, rule]);
            let { phone } = req.body
            if (!phone) {
                phone = ""
            }

            //@ business part
            const userAccounts = await AppUserProfile.find({ email: email })
            let userAccount = userAccounts[0];

            if (userAccounts.length === 0) {
                const token = helper.getToken("UserPro")
                // console.log("token", token)
                const newAccount = new AppUserProfile({
                    token,
                    name,
                    email,
                    rule: rule,
                    phone,

                    status: "active"
                })
                await newAccount.save();
                message = "Account Create Success"
                userAccount = newAccount;
            }

            const jwToken = await createAuthSession(userAccount.token, ipAddress)
            const user = {
                name: userAccount.name,
                email: userAccount.email,
                rule: userAccount.rule,
                status: userAccount.status,
                jwt: jwToken
            }

            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": message,
                "errorLog": "",
                "data": { user }
            }, 200, res)

        } catch (error) {
            handlers({
                'errorLog': {
                    'location': req.originalUrl.split("/").join("::"),
                    'query': `WELCOME TO WEBSITE BLOCK`,
                    'details': `Error : ${error}`
                },
                error
            }, res)
        }
    },

    login: async (req, res) => {
        try {



            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": "your request is successful",
                "errorLog": "",
                "data": { data: "Login success" }
            }, 200, res)
        } catch (error) {
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
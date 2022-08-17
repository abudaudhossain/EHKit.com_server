const handlers = require("../exceptions/handlers");
const NotAcceptableError = require("../exceptions/NotAcceptableError");
const nativeResponse = require("../helpers/nativeResponse");
const helper = require("../helpers/validation/helper");
const AppUserProfile = require("../models/userProfile")
const AppProduct = require("../models/products");
const NotFoundError = require("../exceptions/NotFoundError");

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
    },

    addNewProduct: async (req, res) => {
        let message = "New Product add Success"
        const { title, description, image, price, minimumOrderQuantity, availableQuantity, featureToken, categoryToken, brand } = req.body
        try {
            //@ validation part
            //check email and name validated
            helper.objExit(['title', 'description', 'image', 'price', 'minimumOrderQuantity', 'availableQuantity', 'featureToken', 'categoryToken', 'brand'], req.body)
            helper.isEmpty([title, description, image, price, minimumOrderQuantity, availableQuantity, featureToken, categoryToken, brand]);

            //@ business part
            const token = helper.getToken("PRODUCT")
            // console.log("token", token)
            const newProduct = new AppProduct({
                token,
                title,
                image,
                brand,
                price,
                description,
                featureToken,
                categoryToken,
                availableQuantity,
                minimumOrderQuantity,

                status: "active"
            })
            await newProduct.save();


            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": message,
                "errorLog": "",
                "data": { product: newProduct }
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
    },

    updateProduct: async (req, res) => {
        let message = "Product Update Success"
        try {

            // @validation part
            const { productToken } = req.body;

            delete req.body.setAppUserToken;
            delete req.body.productToken;
            const updateProperties = Object.keys(req.body);
            if (updateProperties.indexOf("token") !== -1) throw new NotAcceptableError("Product Token can not update")

            const updateValue = Object.values(req.body);
            helper.isEmpty(updateValue);

            //@business
            const updateInfo = req.body;
            const updateProduct = await AppProduct.findOneAndUpdate({ token: productToken }, updateInfo, { upsert: true, })

            console.log(updateProduct, "Update prodict")

            if (!updateProduct) {
                message = "This Product can not Found. Add New Product In database😎😋"
            }


            nativeResponse({
                "dataState": "success",
                "responseStatus": "success",
                "message": message,
                "errorLog": "",
                "data": {
                    UpdateProduct: updateInfo,

                }
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
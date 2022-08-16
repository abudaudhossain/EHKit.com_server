const nativeResponse = require("../helpers/nativeResponse")
const NotAcceptableError = require("./NotAcceptableError")
const NotFoundError = require("./NotFoundError")
const UnauthorizedError = require("./UnauthorizedError")
const ValidationError = require("./ValidationError")

module.exports = (v, res) => {
    if (v.error instanceof NotFoundError) {
        nativeResponse({
            "dataState": "error",
            "responseStatus": "error",
            "message": "Please Try again",
            "errorLog": v.errorLog,
            "data": {}
        }, 404, res)
    }
    else if (v.error instanceof ValidationError) {
        nativeResponse({
            "dataState": "error",
            "responseStatus": "error",
            "message": "Please Try again",
            "errorLog": v.errorLog,
            "data": {}
        }, 400, res)
    }
    else if (v.error instanceof UnauthorizedError) {
        nativeResponse({
            "dataState": "error",
            "responseStatus": "Unauthorized",
            "message": "Please Try again",
            "errorLog": v.errorLog,
            "data": {}
        }, 401, res)
    }
    else if (v.error instanceof NotAcceptableError) {
        nativeResponse({
            "dataState": "error",
            "responseStatus": "Unauthorized",
            "message": "Please Try again",
            "errorLog": v.errorLog,
            "data": {}
        }, 406, res)
    }
    else {
        nativeResponse({
            "dataState": "error",
            "responseStatus": "error",
            "message": "Please Try again",
            "errorLog": v.errorLog,
            "data": {}
        }, 500, res)
    }

}


// if (error instanceof NotFoundError) {
//     res.status(404).send({
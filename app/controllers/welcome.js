const nativeResponse = require("../helpers/nativeResponse")

module.exports = {
    welcome: (req, res) =>{
       nativeResponse({
        "dataState": "success",
        "responseStatus":"success",
        "message": "your request is successful",
        "errorLog": "",
        "data": ["welcome to our server"]
       },200, res)
    }
}
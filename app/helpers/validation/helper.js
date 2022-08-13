const NotFoundError = require("../../exceptions/NotFoundError");
const ValidationError = require("../../exceptions/ValidationError");


const numberSubToken = () => {
    const otp = Math.floor(Math.random() * 100000).toString();
    if (otp.length > 4) {
        return otp;
    } else {
        return numberSubToken();
    }
}


module.exports = {
    objExit: (keys, obj) => {
        // console.log(obj)
        for (let i = 0; i < keys.length; i++) {
            if (!obj.hasOwnProperty(keys[i])) throw new NotFoundError(`${keys[i]} is key required`)
        }

        return true;
    },
    isEmpty(values) {
        for (let i = 0; i < values.length; i++) {
            if (values[i].length === 0) throw new ValidationError("Required Property Should Be not empty ")
        }

        return true;
    },
    getToken: (content) => {

        const getRandomIndex = () => {
            const index = Math.floor(Math.random() * 100);
            if (index < 52) {
                return index;
            } else {
                return getRandomIndex();
            }
        }

        const stringSubToken = () => {
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            let stToken = "";
            for (let i = 0; i < 5; i++) {
                stToken += characters[getRandomIndex()];
            }
            return stToken;
        }

        return numberSubToken() + stringSubToken() + content + stringSubToken() + numberSubToken()
    },
}
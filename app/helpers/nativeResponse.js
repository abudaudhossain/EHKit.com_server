module.exports = (v, status = 200, res) => {
    console.log(v)
    res.status(status).json({
        "responseTimeUTC": new Date().toUTCString(),
        "responseTimeLocal": new Date(),
        "responseStatus": v.responseStatus,
        "dataState": v.dataState,
        "message": v.message,
        "errorLog": v.errorLog,
        "data": v.data
    })
}

const {session} = require('electron')

defaultToken= {
    USER: 'lx',
    GROUPID: 1,
    PERMISSIONS: {
        DEBUG: 4,
        DEBUG_IO: 4,
        DEBUG_FILEDBUS: 4,
        CALIBRATION: 4,
        PROFILE: 4,
        ALARM: 4,
        AUTH_GROUP: 4,
        FTP: 4,
        DEV_BUS: 4,
        DEV_CONFIG: 4,
        DEV_CONTROL: 4,
        RECORDS: 4,
        JOB: 4,
        SELPSET: 4,
        SELJOB: 4
    },
    TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJfaWQiOjEsInVzZXJfbmFtZSI6Imx4IiwiZ3JvdXBfaWQiOjEsImdyb3VwX25hbWUiOiJzdSJ9LCJleHAiOjIwMDU4OTM5MzN9.G8PiGrzQbM61LqhgPs9-2EA66dXRrcwB0R8kEtKM07M'
}

function setdefaultToken(url) {
// 查询所有 cookies。
    session.defaultSession.cookies.get({})
        .then((cookies) => {
            console.log(cookies)
        }).catch((error) => {
        console.log(error)
    })

    // 设置一个 cookie，使用设置的名称；
// 如果存在，则会覆盖原先 cookie.
    const cookie = {url: url, name: 'Access-Token', value: JSON.stringify(defaultToken)}
    session.defaultSession.cookies.set(cookie)
        .then(() => {
            // success
        }, (error) => {
            console.error(error)
        })
};


module.exports.setdefaultToken= setdefaultToken

module.exports.defaultToken =defaultToken
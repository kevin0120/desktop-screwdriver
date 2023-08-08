const {fetchCurrentController} = require("../../shared/data/baseConfig");
const {getHttpClient} = require('../config/setting')



async function usersAndGroupsSyncApi() {
    try {
        const result = await getHttpClient()({
            url: 'auth/group/lst',
            method: "get",
        })
        let status = 0
        fetchCurrentController().users.groups = {}
        for (const item of result.data) {
            fetchCurrentController().users.groups[item.group_id] = item
            const result1 = await getHttpClient()({
                url: `auth/group/modules/lst?group_id=${item.group_id}`,
                method: "get",
            })
            if (result1.status) {
                status = result.status
                continue
            }
            fetchCurrentController().users.groups[item.group_id].permission = {
                modules: result1.data.modules
            }
        }

        const result2 = await getHttpClient()({
            url: 'auth/user/lst',
            method: "get",
        })
        if (result2.status) {
            status = result2.status
        }
        fetchCurrentController().users.users = {}
        for (const item of result2.data) {
            fetchCurrentController().users.users[item.user_id] = item
        }
        return status
    } catch (e) {
        return 404
    }
}


module.exports = {
    usersAndGroupsSyncApi
}
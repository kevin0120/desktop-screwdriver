const {fetchCurrentController} = require("../../shared/data/baseConfig");
const {getHttpClient} = require('../config/setting')


async function groupsUpdateApi() {
    try {
        const result = await getHttpClient()({
            url: 'auth/group/lst',
            method: "get",
        })
        let status = 0
        if (result.status) {
            status = result.status
        }
        const values = Object.values(fetchCurrentController().users.groups).map(item => item.group_name);
        const needToDelete = result.data.filter((item) => {
            return !values.includes(item.group_name)

        })
        const needToAdd = Object.values(fetchCurrentController().users.groups).filter((item) => {
            for (const r of result.data) {
                if (r.group_name === item.group_name) {
                    return false
                }
            }
            return true
        })
        for (const add of needToAdd) {
            const result1 = await getHttpClient()({
                url: 'auth/group/add',
                method: "post",
                data: {
                    group_name: add.group_name,
                    group_desc: add.group_desc
                }
            })
            if (result1.status) {
                status = result1.status
            }
        }
        for (const del of needToDelete) {
            const result2 = await getHttpClient()({
                url: `auth/group/del?group_id=${del.group_id}`,
                method: "get",
            })
            if (result2.status) {
                status = result2.status
            }
        }

        const result3 = await getHttpClient()({
            url: 'auth/group/lst',
            method: "get",
        })

        for (const modify of result3.data) {
            const m = Object.values(fetchCurrentController().users.groups).filter(item => item.group_name === modify.group_name)
            if (m.length === 0) {
                continue
            }
            const result4 = await getHttpClient()({
                url: 'auth/modules/right/mod',
                method: "post",
                data: {
                    group_id: modify.group_id,
                    reload: false,
                    modules: m[0].permission.modules
                }
            })
            if (result4.status) {
                status = result4.status
            }
        }
        return status
    } catch (e) {
        return 404
    }
}

async function usersUpdateApi() {

    try {
        const result = await getHttpClient()({
            url: 'auth/user/lst',
            method: "get",
        })
        let status = 0
        if (result.status) {
            status = result.status
        }
        const values = Object.values(fetchCurrentController().users.users).map(item => item.user_name);

        const needToDelete = result.data.filter((item) => {
            return !values.includes(item.user_name)

        })
        const needToAdd = Object.values(fetchCurrentController().users.users).filter((item) => {
            for (const r of result.data) {
                if (r.user_name === item.user_name) {
                    return false
                }
            }
            return true
        })
        for (const add of needToAdd) {
            let id = add.group_id
            for (const r of result.data) {
                if (r.user_name === add.user_name) {
                    id = r.group_id
                }
            }
            const result1 = await getHttpClient()({
                url: 'auth/user/add',
                method: "post",
                data: {
                    group_id: id,
                    pwd: add.hasOwnProperty('pwd') ? add.pwd : add.user_name,
                    user: add.user_name,
                    user_key: add.user_key,
                    workNum: 0
                }
            })
            if (result1.status) {
                status = result1.status
            }
        }

        for (const del of needToDelete) {
            const result2 = await getHttpClient()({
                url: `auth/user/del?user_id=${del.user_id}`,
                method: "get",
            })
            if (result2.status) {
                status = result2.status
            }
        }

        const result3 = await getHttpClient()({
            url: 'auth/user/lst',
            method: "get",
        })
        if (result3.status) {
            status = result3.status
        }
        const result4 = await getHttpClient()({
            url: 'auth/group/lst',
            method: "get",
        })
        if (result4.status) {
            status = result4.status
        }

        for (const modify of result3.data) {
            let id = 0
            let group_name = ""
            let user_key = ""
            for (const user of Object.values(fetchCurrentController().users.users)) {
                if (user.user_name === modify.user_name) {
                    group_name = user.group_name
                    user_key = user.user_key
                    break
                }
            }
            for (const group of result4.data) {
                if (group.group_name === group_name) {
                    id = group.group_id
                    break
                }
            }
            const result5 = await getHttpClient()({
                url: 'auth/user/mod',
                method: "post",
                data: {
                    email: "None",
                    user_id: modify.user_id,
                    user_name: modify.user_name,
                    group_id: id,
                    user_key: user_key,
                }
            })

            if (result5.status) {
                status = result5.status
            }
        }
        return status
    } catch (e) {
        return 404
    }
}

module.exports = {
    groupsUpdateApi,
    usersUpdateApi
}
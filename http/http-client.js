const {groupsUpdateApi, usersUpdateApi} = require('./update/updateUsersAndGroups')
const {psetsUpdateApi, jobsUpdateApi} = require('./update/updatePsetsAndJobs')
const {
    devCfgBaseInfoSetApi,
    devCfgCtrlSrcSetApi,
    devCfgNetOpSetApi,
    devCfgSerialSet,
    busSnCfgDownload,
    busIoCfgDownloadApi,
    busFieldbusCfgDownloadApi,
} = require('./update/updateConfigs')

const {usersAndGroupsSyncApi} = require('./sync/syncUsersAndGroups')
const {psetsSyncApi, jobsSyncApi} = require('./sync/syncPsetsAndJobs')
const {
    devVerApi,
    devCfgBaseInfoGetApi,
    devCfgCtrlSrcGetApi,
    devCfgNetOpGetApi,
    devCfgSerialRs232,
    busSnCfgUpload,
    busIoCfgUploadApi,
    busFieldbusCfgUploadApi,
    getRemoteWsApi
} = require('./sync/syncConfigs')


//同步工艺包括pset和job
async function profilesSyncApi() {
    try {
        let status = await psetsSyncApi()
        const status1 = await jobsSyncApi()
        if (status1) {
            status = status1
        }
        return {status: status}
    } catch (e) {
        return {status: 404}
    }
}


// 更新用户和权限
async function usersAndGroupsUpdateApi(pwd) {
    try {
        let status = await groupsUpdateApi();
        const status2 = await usersUpdateApi(pwd);
        if (status2) {
            status = status2
        }

        return {status: status}
    } catch (e) {
        return {status: 404}
    }
}

// 更新工艺pset和job
async function profilesUpdateApi() {
    try {
        const res = await psetsUpdateApi()
        const res2 = await jobsUpdateApi()
        let status = res.status
        if (res2.status) {
            status = res2.status
        }
        return {
            status: status,
            data: []
        }
    } catch (e) {
        // console.log(e.err)
        return {
            status: 404,
            data: []
        }
    }
}


async function syncAndUpdateByDialogApi(funcList, pwd) {
    let L = []
    for (const l of funcList) {
        switch (l) {
            case "更新用户及权限":
                L.push(usersAndGroupsUpdateApi(pwd))
                break
            case "更新工艺":
                L.push(profilesUpdateApi())
                break
            case "更新IO配置":
                L.push(busIoCfgDownloadApi())
                break
            case "更新总线配置":
                L.push(busFieldbusCfgDownloadApi())
                break
            case "更新系统配置":
                L.push(devCfgBaseInfoSetApi())
                L.push(busSnCfgDownload())
                L.push(devCfgCtrlSrcSetApi())
                L.push(devCfgSerialSet())
                break
            case "同步用户及权限":
                L.push(usersAndGroupsSyncApi())
                break
            case "同步工艺":
                L.push(profilesSyncApi())
                break
            case "同步IO配置":
                L.push(busIoCfgUploadApi())
                break
            case "同步总线配置":
                L.push(busFieldbusCfgUploadApi())
                break
            case "同步系统配置":
                L.push(getRemoteWsApi())
                L.push(devVerApi())
                L.push(devCfgBaseInfoGetApi())
                L.push(devCfgCtrlSrcGetApi())
                L.push(devCfgNetOpGetApi())
                L.push(devCfgSerialRs232())
                L.push(busSnCfgUpload())
                break
        }
    }
    try {
        const result = await Promise.all(L)
        if (funcList.includes("更新系统配置")) {
            devCfgNetOpSetApi()
        }
        return result
    } catch (e) {
        // console.log(e.err)
        return [{
            status: 404,
            data: []
        }]
    }
}


module.exports = {
    syncAndUpdateByDialogApi,
}
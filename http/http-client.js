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
        return status
    } catch (e) {
        return 404
    }
}


//同步系统配置
async function configsSyncApi() {
    try {
        const results = await Promise.all([getRemoteWsApi(), devVerApi(), devCfgBaseInfoGetApi(), devCfgCtrlSrcGetApi(),
            devCfgNetOpGetApi(), devCfgSerialRs232(), busSnCfgUpload()])

        if (results.every((value) => value === 0)) {
            return 0
        }
        return 404
    } catch (e) {
        return 404
    }
}

//同步所有配置
async function allSyncApi() {
    try {
        const results = await Promise.all([getRemoteWsApi(), usersAndGroupsSyncApi(), profilesSyncApi(), busIoCfgUploadApi(), busFieldbusCfgUploadApi(), devVerApi(),
            devCfgBaseInfoGetApi(), devCfgCtrlSrcGetApi(), devCfgNetOpGetApi(), devCfgSerialRs232(), busSnCfgUpload()])
        if (results.every((value) => value === 0)) {
            return 0
        }
        return 404
    } catch (e) {
        return 404
    }
}

// 更新用户和权限
async function usersAndGroupsUpdateApi() {
    try {
        let status = await groupsUpdateApi();
        const status2 = await usersUpdateApi();
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

// 更新系统配置 ps op的配置需要单独最后启用因为它会导致网卡重启
async function updateSystemConfigsApi() {
    try {
        return await Promise.all([devCfgBaseInfoSetApi(), busSnCfgDownload(), devCfgCtrlSrcSetApi(), devCfgSerialSet()])

    } catch (e) {
        // console.log(e.err)
        return [{
            status: 404,
            data: []
        }]
    }
}


// 更新所有配置 ps op的配置需要单独最后启用因为它会导致网卡重启
async function updateAllApi() {
    try {
        return await Promise.all([usersAndGroupsUpdateApi(), profilesUpdateApi(), busIoCfgDownloadApi(),
            busFieldbusCfgDownloadApi(), devCfgBaseInfoSetApi(), busSnCfgDownload(), devCfgCtrlSrcSetApi(), devCfgSerialSet()])
    } catch (e) {
        // console.log(e.err)
        return [{
            status: 404,
            data: []
        }]
    }
}

module.exports = {

    usersAndGroupsSyncApi,
    profilesSyncApi,
    busIoCfgUploadApi,
    busFieldbusCfgUploadApi,
    configsSyncApi,
    allSyncApi,


    usersAndGroupsUpdateApi,
    profilesUpdateApi,

    busIoCfgDownloadApi,
    busFieldbusCfgDownloadApi,
    updateSystemConfigsApi,
    updateAllApi,
    devCfgNetOpSetApi,

    getRemoteWsApi,
}
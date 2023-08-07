const {fetchCurrentController, saveCurrentController} = require("../shared/data/baseConfig");
const {getHttpClient} = require('./config/setting')
const {groupsUpdateApi, usersUpdateApi} = require('./update/usersAndGroups')
const {psetsUpdateApi} = require('./update/psetsAndJobs')
const {
    devCfgBaseInfoSetApi,
    devCfgCtrlSrcSetApi,
    devCfgNetOpSetApi,
    devCfgSerialSet,
    busSnCfgDownload,
    busIoCfgDownloadApi,
    busFieldbusCfgDownloadApi,
} = require('./update/updateConfigs')


async function devVerApi() {
    try {
        const result = await getHttpClient()({
            url: "dev/ver",
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.dev.ver = result.data
            saveCurrentController('config')
        }
        return result.status
    } catch (e) {
        return 404
    }
}

async function devCfgBaseInfoGetApi() {
    try {
        const result = await getHttpClient()({
            url: "dev/cfg/base/info",
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.dev.cfg_base_info = result.data;
            fetchCurrentController().config.ws.sensor_max = result.data.max_torque;
            fetchCurrentController().config.ws.speed_max = result.data.max_speed;
            // saveCurrentController('config')
        }
        return result.status
    } catch (e) {
        return 404
    }
}

async function devCfgCtrlSrcGetApi() {
    try {
        const result = await getHttpClient()({
            url: "dev/cfg/ctrl/src",
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.dev.cfg_ctrl_src = result.data
            // saveCurrentController('config')
        }
        return result.status
    } catch (e) {
        return 404
    }
}


async function devCfgNetOpGetApi() {
    try {
        const result = await getHttpClient()({
            url: "dev/cfg/net/op",
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.dev.cfg_net_op = result.data
            // saveCurrentController('config')
        }
        return result.status
    } catch (e) {
        return 404
    }
}

async function devCfgSerialRs232() {
    try {
        const result = await getHttpClient()({
            url: "/dev/cfg/serial/rs232",
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.dev.cfg_serial_rs232 = result.data
            // saveCurrentController('config')
        }
        return result.status
    } catch (e) {
        return 404
    }
}


async function busSnCfgUpload() {
    try {
        const result = await getHttpClient()({
            url: "/bus/sn/cfg/upload",
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.bus.sn_ctrl_upload = result.data
            // saveCurrentController('config')
        }
        return result.status
    } catch (e) {
        return 404
    }
}


async function busIoCfgUploadApi() {
    try {
        const result = await getHttpClient()({
            url: 'bus/io/cfg/upload',
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.bus.io_cfg_upload = result.data
            // saveCurrentController('config')
        }
        return result.status
    } catch (e) {
        return 404
    }
}

async function busFieldbusCfgUploadApi() {
    try {
        const result = await getHttpClient()({
            url: 'bus/fieldbus/cfg/upload',
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.bus.fieldbus_cfg_upload = result.data
            // saveCurrentController('config')
        }
        return result.status
    } catch (e) {
        return 404
    }
}

async function profilesSyncApi() {
    try {
        const result = await getHttpClient()({
            url: 'pf/cur/lst',
            method: "get",
        })
        let status = 0
        fetchCurrentController().profiles.psets = {}
        for (const item of result.data) {
            fetchCurrentController().profiles.psets[item.pset] = item
            const result1 = await getHttpClient()({
                url: `pf/cur/pset?id=${item.pset}`,
                method: "get",
            })
            if (result1.status) {
                status = result.status
                continue
            }
            fetchCurrentController().profiles.psets[item.pset].details = result1.data
        }
        return status
    } catch (e) {
        return 404
    }
}


async function usersSyncApi() {
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
        return await psetsUpdateApi()
    } catch (e) {
        // console.log(e.err)
        return {
            status: 404,
            data: []
        }
    }
}


module.exports = {
    devVerApi,
    devCfgBaseInfoGetApi,
    devCfgCtrlSrcGetApi,
    devCfgNetOpGetApi,
    devCfgSerialRs232,
    busSnCfgUpload,
    busIoCfgUploadApi,
    busFieldbusCfgUploadApi,

    profilesSyncApi,
    usersSyncApi,


    usersAndGroupsUpdateApi,
    profilesUpdateApi,
    busIoCfgDownloadApi,
    busFieldbusCfgDownloadApi,

    devCfgBaseInfoSetApi,
    devCfgCtrlSrcSetApi,
    devCfgNetOpSetApi,
    devCfgSerialSet,
    busSnCfgDownload,
}
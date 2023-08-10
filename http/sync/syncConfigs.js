
const {fetchCurrentController} = require("../../shared/data/baseConfig");
const {getHttpClient} = require('../config/setting')


async function getRemoteWsApi() {
    try {
        const result = await getHttpClient()({
            url: "auth/sync/ws",
            method: "get",
        })
        if (result.status === 0) {
            if (!result.data.offline){
                fetchCurrentController().config.ws = result.data
            }
            // saveCurrentController('config')
        }
        return 0
    } catch (e) {
        return 0
    }
}



async function devVerApi() {
    try {
        const result = await getHttpClient()({
            url: "dev/ver",
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().config.dev.ver = result.data
            // saveCurrentController('config')
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

module.exports = {
    devVerApi,
    devCfgBaseInfoGetApi,
    devCfgCtrlSrcGetApi,
    devCfgNetOpGetApi,
    devCfgSerialRs232,
    busSnCfgUpload,
    busIoCfgUploadApi,
    busFieldbusCfgUploadApi,

    getRemoteWsApi
}
const {fetchCurrentController, saveCurrentController, getcurrentController} = require("../shared/data/baseConfig");

const {getHttpClient} = require('./config/setting')

function devCfgBaseInfoSetApi() {
    return getHttpClient()({
        url: "dev/cfg/base/info/set",
        method: "post",
        data: {
            device_id: fetchCurrentController().dev.cfg_base_info.device_id,
            device_name: fetchCurrentController().dev.cfg_base_info.device_name
        }
    })
}

function devCfgCtrlSrcSetApi() {
    return getHttpClient()({
        url: "dev/cfg/ctrl/src/set",
        method: "post",
        data: fetchCurrentController().dev.cfg_ctrl_src
    })
}


function devCfgNetOpSetApi() {
    return getHttpClient()({
        url: "dev/cfg/net/op/set",
        method: "post",
        data: fetchCurrentController().dev.cfg_net_op
    })
}

function devCfgSerialSet() {
    return getHttpClient()({
        url: "dev/cfg/serial/set",
        method: "post",
        data: fetchCurrentController().dev.cfg_serial_rs232
    })
}

function busSnCfgDownload() {
    return getHttpClient()({
        url: "bus/sn/cfg/download",
        method: "post",
        data: fetchCurrentController().bus.sn_ctrl_upload
    })
}

function busIoCfgDownloadApi() {
    return getHttpClient()({
        url: 'bus/io/cfg/download',
        method: 'post',
        data: fetchCurrentController().bus.io_cfg_upload
    })
}

function busFieldbusCfgDownloadApi() {
    return getHttpClient()({
        url: 'bus/filedbus/cfg/download',
        method: 'post',
        data: fetchCurrentController().bus.fieldbus_cfg_upload
    })
}


async function devVerApi() {
    try {
        const result = await getHttpClient()({
            url: "dev/ver",
            method: "get",
        })
        if (result.status === 0) {
            fetchCurrentController().dev.ver = result.data
            saveCurrentController()
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
            fetchCurrentController().dev.cfg_base_info = result.data;
            fetchCurrentController().ws.sensor_max = result.data.max_torque;
            fetchCurrentController().ws.speed_max = result.data.max_speed;
            saveCurrentController()
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
            fetchCurrentController().dev.cfg_ctrl_src = result.data
            saveCurrentController()
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
            fetchCurrentController().dev.cfg_net_op = result.data
            saveCurrentController()
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
            fetchCurrentController().dev.cfg_serial_rs232 = result.data
            saveCurrentController()
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
            fetchCurrentController().bus.sn_ctrl_upload = result.data
            saveCurrentController()
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
            fetchCurrentController().bus.io_cfg_upload = result.data
            saveCurrentController()
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
            fetchCurrentController().bus.fieldbus_cfg_upload = result.data
            saveCurrentController()
        }
        return result.status
    } catch (e) {
        return 404
    }
}


module.exports = {
    devCfgBaseInfoSetApi,
    devCfgCtrlSrcSetApi,
    devCfgNetOpSetApi,
    devCfgSerialSet,
    busSnCfgDownload,
    busIoCfgDownloadApi,
    busFieldbusCfgDownloadApi,


    devVerApi,
    devCfgBaseInfoGetApi,
    devCfgCtrlSrcGetApi,
    devCfgNetOpGetApi,
    devCfgSerialRs232,
    busSnCfgUpload,

    busIoCfgUploadApi,
    busFieldbusCfgUploadApi,

}
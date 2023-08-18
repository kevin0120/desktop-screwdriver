const {fetchCurrentController} = require("../../shared/data/baseConfig");
const {getHttpClient} = require('../config/setting')


function devCfgBaseInfoSetApi() {
    return getHttpClient()({
        url: "dev/cfg/base/info/set",
        method: "post",
        data: {
            device_id: fetchCurrentController().config.dev.cfg_base_info.device_id,
            device_name: fetchCurrentController().config.dev.cfg_base_info.device_name
        }
    })
}

function devCfgCtrlSrcSetApi() {
    return getHttpClient()({
        url: "dev/cfg/ctrl/src/set",
        method: "post",
        data: fetchCurrentController().config.dev.cfg_ctrl_src
    })
}


function devCfgNetOpSetApi() {
    getHttpClient()({
        url: "dev/cfg/net/op/set",
        method: "post",
        data: fetchCurrentController().config.dev.cfg_net_op
    })
}

function devCfgSerialSet() {
    return getHttpClient()({
        url: "dev/cfg/serial/set",
        method: "post",
        data: fetchCurrentController().config.dev.cfg_serial_rs232
    })
}

function busSnCfgDownload() {
    return getHttpClient()({
        url: "bus/sn/cfg/download",
        method: "post",
        data: fetchCurrentController().config.bus.sn_ctrl_upload
    })
}

function busIoCfgDownloadApi() {
    return getHttpClient()({
        url: 'bus/io/cfg/download',
        method: 'post',
        data: fetchCurrentController().config.bus.io_cfg_upload
    })
}

function busFieldbusCfgDownloadApi() {
    return getHttpClient()({
        url: 'bus/filedbus/cfg/download',
        method: 'post',
        data: fetchCurrentController().config.bus.fieldbus_cfg_upload
    })
}


module.exports = {
    devCfgBaseInfoSetApi,
    devCfgCtrlSrcSetApi,
    devCfgNetOpSetApi,
    devCfgSerialSet,
    busSnCfgDownload,
    busIoCfgDownloadApi,
    busFieldbusCfgDownloadApi
}
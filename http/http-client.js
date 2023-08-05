const {fetchCurrentController, saveCurrentController} = require("../shared/data/baseConfig");

const {getHttpClient} = require('./config/setting')

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
    return getHttpClient()({
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

async function profilesUpdateApi() {
    try {
        const result = await getHttpClient()({
            url: 'pf/cur/lst',
            method: "get",
        })
        let data = {
            data: [],
            status: 0
        }
        let remoetPset = result.data.map((item) => {
            return item.pset
        })
        for (let pset in fetchCurrentController().profiles.psets) {
            if (fetchCurrentController().profiles.psets.hasOwnProperty(pset)) {
                let index = remoetPset.indexOf(parseInt(pset))
                if (index !== -1) {
                    remoetPset.splice(index, 1);
                    // 只需要保存pset
                } else {
                    //需要 先新建再保存pset
                    const result1 = await getHttpClient()({
                        url: 'pf/add',
                        method: "post",
                        data: fetchCurrentController().profiles.psets[pset].details
                    })
                    if (result1.status) {
                        data.status = result1.status
                        data.data.push(pset)
                    }
                }
                const result2 = await getHttpClient()({
                    url: 'pf/mod',
                    method: "post",
                    data: fetchCurrentController().profiles.psets[pset].details
                })
                if (result2.status) {
                    data.status = result2.status
                    data.data.push(pset)
                }
            }
        }
        for (const item of remoetPset) {
            fetchCurrentController().profiles.psets[item.pset] = item
            const result3 = await getHttpClient()({
                url: `pf/del?pset=${item}`,
                method: "post",
            })
            if (result3.status) {
                status = result.status
                data.data.push(item)
            }
        }
        return data
    } catch (e) {
        // console.log(e.err)
        return {
            status: 404,
            data: []
        }
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

    profilesSyncApi,
    profilesUpdateApi
}
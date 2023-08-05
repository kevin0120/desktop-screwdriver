const {defaultBYDConfigs} = require("../../shared/config/defaultControllers");
const {fetchCurrentController, saveCurrentController, getcurrentController} = require("../../shared/data/baseConfig");
// 导入原生的axios
const axios = require('axios')

const {defaultToken} = require('../../shared/config/defaultToken')

function settingHandleHttp(app) {
    app.get('/api/dev/cfg/base/info', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().config.dev.cfg_base_info
        });
    });
    app.get('/api/dev/ver', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().config.dev.ver
        });
    });
    app.post('/api/dev/cfg/base/info/set', (req, res) => {
        fetchCurrentController().config.dev.cfg_base_info.device_id = req.body.device_id
        fetchCurrentController().config.dev.cfg_base_info.device_name = req.body.device_name
        saveCurrentController('config')
        res.send({
            status: 0,
            description: ""
        });
    });


    app.get('/api/dev/cfg/ctrl/src', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().config.dev.cfg_ctrl_src
        });
    });

    app.post('/api/dev/cfg/ctrl/src/set', (req, res) => {
        fetchCurrentController().config.dev.cfg_ctrl_src = req.body
        saveCurrentController('config')
        res.send({
            status: 0,
            description: "",
        });
    });


    app.get('/api/bus/io/cfg/upload', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().config.bus.io_cfg_upload
        });
    });
    app.post('/api/bus/io/cfg/download', (req, res) => {
        fetchCurrentController().config.bus.io_cfg_upload = req.body
        saveCurrentController('config')
        res.send({
            status: 0,
            description: "",
        });
    });


    app.get('/api/bus/fieldbus/cfg/upload', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().config.bus.fieldbus_cfg_upload
        });
    });
    app.post('/api/bus/fieldbus/cfg/download', (req, res) => {
        fetchCurrentController().config.bus.fieldbus_cfg_upload = req.body
        saveCurrentController('config')
        res.send({
            status: 0,
            description: "",
        });
    });


    app.get('/api/dev/cfg/net/op', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().config.dev.cfg_net_op
        });
    });
    app.post('/api/dev/cfg/net/op/set', (req, res) => {
        fetchCurrentController().config.dev.cfg_net_op = req.body
        saveCurrentController('config')
        res.send({
            status: 0,
            description: "",

        });
    });


    app.get('/api/dev/cfg/serial/rs232', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().config.dev.cfg_serial_rs232
        });
    });

    app.post('/api/dev/cfg/serial/set', (req, res) => {
        fetchCurrentController().config.dev.cfg_serial_rs232 = req.body
        saveCurrentController('config')
        res.send({
            status: 0,
            description: "",

        });
    });


    app.get('/api/bus/sn/cfg/upload', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().config.bus.sn_ctrl_upload
        });
    });
    app.post('/api/bus/sn/cfg/download', (req, res) => {
        fetchCurrentController().config.bus.sn_ctrl_upload = req.body
        saveCurrentController('config')
        res.send({
            status: 0,
            description: "",

        });
    });

    // 工艺列表
    app.get('/api/pf/cur/lst', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: Object.values(fetchCurrentController().profiles.psets)
        });
    });
    // 工艺详情
    app.get('/api/pf/cur/pset', (req, res) => {
        let pset = parseInt(req.query.id)
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().profiles.psets[pset].details
        });
    });
    // 工艺保存
    app.post('/api/pf/mod', (req, res) => {
        let pset = req.body.Profile.Pset
        fetchCurrentController().profiles.psets[pset].details = req.body
        saveCurrentController('profiles')
        res.send({
            status: 0,
            description: ""
        });
    });

    // 工艺删除
    app.post('/api/pf/del', (req, res) => {
        let pset = req.query.pset
        delete fetchCurrentController().profiles.psets[pset]
        saveCurrentController('profiles')
        res.send({
            status: 0,
            description: ""
        });
    });
    // 工艺新建
    app.post('/api/pf/add', (req, res) => {
        let pset = req.body.Profile.Pset
        fetchCurrentController().profiles.psets[pset] = {
            name: req.body.Profile.Name,
            pset: req.body.Profile.Pset,
            mode: req.body.Profile.Mode,
            details: req.body
        }
        saveCurrentController('profiles')
        res.send({
            status: 0,
            description: ""
        });
    });
}

function settingHandleWs(wss) {
    // 监听 WebSocket 连接事件
    wss.on('connection', (ws, req) => {
        console.log('WebSocket connected', req.url);
        let config = fetchCurrentController().config
        switch (req.url) {
            case '/websocket/gstatus':
                // ws.send(config.ws)
                setInterval(() => {
                    config.ws.heartbit = new Date().getTime()
                    config.ws.enablesrc = config.dev.cfg_ctrl_src.power_enable
                    config.ws.job_enable = config.dev.cfg_ctrl_src.job_enable
                    config.ws.job_pset_mode = config.dev.cfg_ctrl_src.job_pset_mode
                    config.ws.job_src = config.dev.cfg_ctrl_src.job_src
                    config.ws.psetsrc = config.dev.cfg_ctrl_src.pset
                    config.ws.pset = 0
                    config.ws.toolsrc = config.dev.cfg_ctrl_src.tool_run

                    ws.send(JSON.stringify(config.ws))
                }, 200)

                break;
            default:
                console.log(` url: ${req.url}`);
        }
    });
}

function getHttpClient() {

    let client = axios.create({
        baseURL: `http://${getcurrentController().ip}/api`,
        timeout: 2000,// 请求超时时间
        headers: {
            'Content-Type': 'application/json', // 设置请求头
            'Authorization': defaultToken.TOKEN ? defaultToken.TOKEN : ""
        },
    })
    const errorHandler = (error) => {
        if (error.response) {
            return Promise.reject({
                err: error.response.data ? error.response.data.toString() : '',
                code: error.response.status
            })
        }
        // console.log("error.response ", error.toString() );
        return Promise.reject({
            err: error.response ? error.response.data.description : error.toJSON(),
            code: error.response ? error.response.status : '999'
        })
    }
    // 响应拦截器
    client.interceptors.response.use((response) => {
        return response.data
    }, errorHandler)
    return client
}

module.exports.settingHandleWs = settingHandleWs
module.exports.settingHandleHttp = settingHandleHttp
module.exports.getHttpClient = getHttpClient
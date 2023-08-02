const {defaultBYDConfigs} = require("../../shared/config/defaultControllers");
const {fetchCurrentController, saveCurrentController} = require("../../shared/data/baseConfig");

function settingHandleHttp(app) {
    app.get('/api/dev/cfg/base/info', (req, res) => {
        let config = fetchCurrentController()

        res.send({
            status: 0,
            description: "",
            data: config.dev.cfg_base_info
        });
    });
    app.get('/api/dev/ver', (req, res) => {
        let config = fetchCurrentController()
        res.send({
            status: 0,
            description: "",
            data: config.dev.ver
        });
    });

    app.post('/api/dev/cfg/base/info/set', (req, res) => {
        let config = fetchCurrentController()
        config.dev.cfg_base_info.device_id = req.body.device_id
        config.dev.cfg_base_info.device_name = req.body.device_name
        saveCurrentController()
        res.send({
            status: 0,
            description: ""
        });
    });


    app.get('/api/dev/cfg/ctrl/src', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: defaultBYDConfigs.dev.cfg_ctrl_src
        });
    });

    app.post('/api/dev/cfg/ctrl/src/set', (req, res) => {
        defaultBYDConfigs.dev.cfg_ctrl_src = req.body
        res.send({
            status: 0,
            description: "",
        });
    });


    app.get('/api/bus/io/cfg/upload', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: defaultBYDConfigs.bus.io_cfg_upload
        });
    });
    app.post('/api/bus/io/cfg/download', (req, res) => {
        defaultBYDConfigs.bus.io_cfg_upload = req.body
        res.send({
            status: 0,
            description: "",
        });
    });


    app.get('/api/bus/fieldbus/cfg/upload', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: defaultBYDConfigs.bus.fieldbus_cfg_upload
        });
    });
    app.post('/api/bus/fieldbus/cfg/download', (req, res) => {
        defaultBYDConfigs.bus.fieldbus_cfg_upload = req.body
        res.send({
            status: 0,
            description: "",
        });
    });


    app.get('/api/dev/cfg/net/op', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: defaultBYDConfigs.dev.cfg_net_op
        });
    });
    app.post('/api/dev/cfg/net/op/set', (req, res) => {
        defaultBYDConfigs.dev.cfg_net_op = req.body
        res.send({
            status: 0,
            description: "",

        });
    });


    app.get('/api/dev/cfg/serial/rs232', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: defaultBYDConfigs.dev.cfg_serial_rs232
        });
    });

    app.post('/api/dev/cfg/serial/set', (req, res) => {
        defaultBYDConfigs.dev.cfg_serial_rs232 = req.body
        res.send({
            status: 0,
            description: "",

        });
    });


    app.get('/api/bus/sn/cfg/upload', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: defaultBYDConfigs.bus.sn_ctrl_upload
        });
    });
    app.post('/api/bus/sn/cfg/download', (req, res) => {
        defaultBYDConfigs.bus.sn_ctrl_upload = req.body
        res.send({
            status: 0,
            description: "",

        });
    });
}

function settingHandleWs(wss) {
    // 监听 WebSocket 连接事件
    wss.on('connection', (ws, req) => {
        console.log('WebSocket connected');
        console.log(req.url);
        let config = fetchCurrentController()
        switch (req.url) {
            case '/websocket/gstatus':
                // ws.send(config.ws)
                setInterval(() => {
                    config.ws.heartbit=new Date().getTime()
                    ws.send(JSON.stringify(config.ws))
                }, 200)

                break;
            default:
                console.log(` url: ${req.url}`);
        }
    });
}

module.exports.settingHandleWs = settingHandleWs
module.exports.settingHandleHttp = settingHandleHttp
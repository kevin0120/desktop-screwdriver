const defaultBYD = require("../../shared/config/defaultControllers");
const {fetchCurrentController, saveCurrentController, getcurrentController} = require("../../shared/data/baseConfig");
// 导入原生的axios
const axios = require('axios')

const {defaultToken} = require('../../shared/config/defaultToken')

function getCurrentId(name) {
    switch (name) {
        case "user":
            const list = Object.keys(fetchCurrentController().users.users).map(key => parseInt(key))
            return list.length === 0 ? 0 : Math.max(...list)
        case "group":
            const list1 = Object.keys(fetchCurrentController().users.groups).map(key => parseInt(key))
            return list1.length === 0 ? 0 : Math.max(...list1)
    }
}


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
    app.post('/api/bus/filedbus/cfg/download', (req, res) => {
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


    // 用户列表
    app.get('/api/auth/user/lst', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: Object.values(fetchCurrentController().users.users)
        });
    });

    // 用户修改
    app.post('/api/auth/user/mod', (req, res) => {

        fetchCurrentController().users.users[req.body.user_id].email = req.body.email
        fetchCurrentController().users.users[req.body.user_id].group_id = req.body.group_id
        fetchCurrentController().users.users[req.body.user_id].group_name = fetchCurrentController().users.groups[req.body.group_id].group_name
        fetchCurrentController().users.users[req.body.user_id].user_name = req.body.user_name
        saveCurrentController('users')
        res.send({
            status: 0,
            description: "",
        });
    });
    // 用户组列表
    app.get('/api/auth/group/lst', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: Object.values(fetchCurrentController().users.groups)
        });
    });

    // 用户组权限列表
    app.get('/api/auth/group/modules/lst', (req, res) => {
        id = req.query.group_id
        res.send({
            status: 0,
            description: "",
            data: {
                id: id,
                modules: fetchCurrentController().users.groups[id].permission.modules,
                len: fetchCurrentController().users.groups[id].permission.modules.length
            }
        })
    });
    // 用户组权限列表
    app.post('/api/auth/modules/right/mod', (req, res) => {
        id = req.body.group_id
        fetchCurrentController().users.groups[id].permission.modules = req.body.modules
        res.send({
            status: 0,
            description: "",
        });
    });

    // 用户组新建
    app.post('/api/auth/group/add', (req, res) => {
        id = getCurrentId("group") + 1
        fetchCurrentController().users.groups[id] = {
            group_id: id,
            group_name: req.body.group_name,
            group_desc: req.body.group_desc,
            status: 1,
            permission: {
                modules: defaultBYD.defaultBYDUsers.groups["8"].permission.modules
            }
        }
        saveCurrentController('users')
        res.send({
            status: 0,
            description: "",
        });
    });

    // 用户组删除
    app.get('/api/auth/group/del', (req, res) => {
        id = req.query.group_id
        delete fetchCurrentController().users.groups[id]
        for (let user in fetchCurrentController().users.users) {
            if (fetchCurrentController().users.users[user].group_id === parseInt(id)) {
                delete fetchCurrentController().users.users[user]
            }
        }
        saveCurrentController('users')
        res.send({
            status: 0,
            description: "",
        });
    });


    // 用户删除
    app.get('/api/auth/user/del', (req, res) => {
        id = req.query.user_id
        delete fetchCurrentController().users.users[id]
        saveCurrentController('users')
        res.send({
            status: 0,
            description: "",
        });
    });


    // 用户新建
    app.post('/api/auth/user/add', (req, res) => {
        id = getCurrentId("user") + 1
        fetchCurrentController().users.users[id] = {
            email: "None",
            group_id: req.body.group_id,
            group_name: fetchCurrentController().users.groups[req.body.group_id].group_name,
            status: 1,
            tel: null,
            user_id: id,
            user_name: req.body.user,
            pwd: req.body.pwd,
        }
        saveCurrentController('users')
        res.send({
            status: 0,
            description: "",
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
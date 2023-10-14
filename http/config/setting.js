const defaultBYD = require("../../shared/config/defaultControllers");
const {fetchCurrentController, saveCurrentController, getcurrentController, getWorkDirectory} = require("../../shared/data/baseConfig");
// 导入原生的axios
const axios = require('axios')
const fs = require('fs');
const fse = require('fs-extra');
const csv = require('csv-parser');
const path = require('path');
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

let uiMap = {
    lang: "zhCn",
    angle: "°",
    torque: "N.m",
    angle_speed: "rpm",
    UI: "{\"chart_tab\":1}"
}

function settingHandleHttp(app) {
    app.post('/api/dev/ui/map/set', (req, res) => {
        uiMap[req.body.key] = req.body.val
        res.send({
            status: 0,
            description: "",
            data: "ok"
        });
    });
    app.get('/api/dev/ui/map', (req, res) => {

        res.send({
            status: 0,
            description: "",
            data: uiMap[req.query.key]
        });
    });
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
        if (getcurrentController()) {
            res.send({
                status: 0,
                description: "",
                data: Object.values(fetchCurrentController().profiles.psets)
            });
        } else {
            res.send({
                status: 0,
                description: "",
                data: []
            });
        }

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


    // job工艺列表
    app.get('/api/pf/cur/joblst', (req, res) => {
        res.send({
            status: 0,
            description: "",
            data: Object.values(fetchCurrentController().profiles.jobs)
        });
    });
    // job工艺详情
    app.get('/api/pf/cur/job', (req, res) => {
        let job = parseInt(req.query.id)
        res.send({
            status: 0,
            description: "",
            data: fetchCurrentController().profiles.jobs[job].details
        });
    });
    // job工艺保存
    app.post('/api/pf/jobmod', (req, res) => {
        let job = req.body.Profile.JobId
        fetchCurrentController().profiles.jobs[job] = {
            name: req.body.Profile.Name,
            job: req.body.Profile.JobId,
            mode: req.body.Profile.Mode,
            desc: req.body.Profile.Descr,
            details: req.body
        }
        saveCurrentController('profiles')
        res.send({
            status: 0,
            description: ""
        });
    });

    // job工艺删除
    app.post('/api/pf/jobdel', (req, res) => {
        let job = req.query.job
        delete fetchCurrentController().profiles.jobs[job]
        saveCurrentController('profiles')
        res.send({
            status: 0,
            description: ""
        });
    });
    // // 工艺新建
    // app.post('/api/pf/add', (req, res) => {
    //     let pset = req.body.Profile.Pset
    //     fetchCurrentController().profiles.psets[pset] = {
    //         name: req.body.Profile.Name,
    //         pset: req.body.Profile.Pset,
    //         mode: req.body.Profile.Mode,
    //         details: req.body
    //     }
    //     saveCurrentController('profiles')
    //     res.send({
    //         status: 0,
    //         description: ""
    //     });
    // });


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
        fetchCurrentController().users.users[req.body.user_id].user_key = req.body.user_key
        fetchCurrentController().users.users[req.body.user_id].user_password = req.body.user_password ? req.body.user_password : fetchCurrentController().users.users[req.body.user_id].user_password

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
            user_key: req.body.user_key,
            user_password: req.body.pwd,
        }
        saveCurrentController('users')
        res.send({
            status: 0,
            description: "",
        });
    });

    // 判断某一行数据是否符合查询条件
    function isMatch(row, query) {
        for (const column in query) {
            switch (column) {
                case "is_ok":
                    if (parseInt(row.is_ok) !== query.is_ok) {
                        return false
                    }
                    break
                case "time_start":
                    if (row.created_time < query.time_start) {
                        return false
                    }
                    break
                case "time_end":
                    if (row.created_time > query.time_end) {
                        return false
                    }
                    break
                case "pset":
                    if (parseInt(row.pset) !== query.pset) {
                        return false
                    }
                    break
                case "code":
                    if (row.code !== query.code) {
                        return false
                    }
                    break
                default:
                    break
            }
        }
        return true;
    }

    // 查询历史结果和曲线
    app.post('/api/pdata/result/his', (req, res) => {
        let his = []
        // 读取和查询 CSV 文件
        const p = path.resolve(getWorkDirectory(), 'data', 'result.csv')
        if (!fs.existsSync(p)) {
            res.send({
                status: 0,
                description: "",
                data: his
            });
            return
        }
        const stream = fs.createReadStream(p, 'utf-8')
            .pipe(csv());
        stream.on('data', (row) => {
            // 对每一行数据进行查询判断
            if (isMatch(row, req.body)) {
                row.result = JSON.parse(row.result)
                his.push(row)
            }
            if (his.length > req.body.numcurve) {
                // 达到指定行数后停止读取
                stream.pause();
                console.log('select pause!');
                his = his.slice(0, req.body.numcurve)
                res.send({
                    status: 0,
                    description: "",
                    data: his
                });
            }
        });
        stream.on('error', (err) => {
            console.error(err);
        });
        stream.on('end', () => {
            console.log('select end!');
            res.send({
                status: 0,
                description: "",
                data: his
            });
        });

    });


    // 查询历史结果和曲线
    app.get('/api/pdata/his/curve', (req, res) => {
        let pdid = parseInt(req.query.pdid)
        // 读取和查询 CSV 文件
        // const p = path.resolve(getWorkDirectory(), 'data/curves', '760020.csv')
        const p = path.resolve(getWorkDirectory(), 'data/curves', `${pdid}.csv`)
        if (!fs.existsSync(p)) {
            res.send({
                status: 0,
                description: "",
                data: ""
            });
            return
        }
        let times = []
        let positions = []
        let sensor_vals = []
        let speeds = []
        fs.createReadStream(p)
            .pipe(csv())
            .on('data', (row) => {
                times.push(parseFloat(row.times))
                positions.push(parseFloat(row.positions))
                sensor_vals.push(parseFloat(row.sensor_vals))
                speeds.push(parseFloat(row.speeds))
            })
            .on('end', () => {
                console.log('查询结束');
                let curves = sensor_vals.concat(positions).concat(times).concat(speeds)
                const buffer = Buffer.alloc(curves.length * 4 + 4);
                buffer.writeInt32LE(times.length, 0)
                // 将每个浮点数依次写入 Buffer，每个浮点数占4个字节
                for (let i = 0; i < curves.length; i++) {
                    buffer.writeFloatLE(curves[i], i * 4 + 4);
                }

                res.send(buffer);
            });
    });

}


async function deleteLocalResults() {
    try {
        if (fs.existsSync(path.resolve(getWorkDirectory(), 'data'))) {
            await fse.remove(path.resolve(getWorkDirectory(), 'data'))
        }

        getWorkDirectory()
        console.log('success!')
    } catch (err) {
        getWorkDirectory()
        console.error(err)
    }
}

async function getRemoteWsApi() {
    try {
        const result = await getHttpClient()({
            url: "auth/sync/ws",
            method: "get",
        })
        if (result.status === 0) {
            if (!result.data.offline) {
                fetchCurrentController().config.ws = result.data
                saveCurrentController('config')
            }
            // saveCurrentController('config')
        }
        return 0
    } catch (e) {
        return 0
    }
}

function settingHandleWs(wss) {
    // 监听 WebSocket 连接事件
    wss.on('connection', (ws, req) => {
        console.log('WebSocket connected', req.url);
        if (!getcurrentController()) {
            setInterval(() => {
                ws.send(JSON.stringify({
                    heartbit: new Date().getTime(),
                    offline:0,
                }))
            }, 200)
            return
        }
        let config = fetchCurrentController().config
        switch (req.url) {
            case '/websocket/gstatus':
                // ws.send(config.ws)
                getRemoteWsApi().then(
                    () => console.log("wbsocket 连接")
                )
                setInterval(() => {
                    config.ws.heartbit = new Date().getTime()
                    config.ws.enablesrc = config.dev.cfg_ctrl_src.power_enable
                    config.ws.job_enable = config.dev.cfg_ctrl_src.job_enable
                    config.ws.job_pset_mode = config.dev.cfg_ctrl_src.job_pset_mode
                    config.ws.job_src = config.dev.cfg_ctrl_src.job_src
                    config.ws.psetsrc = config.dev.cfg_ctrl_src.pset
                    config.ws.pset = 0
                    config.ws.toolsrc = config.dev.cfg_ctrl_src.tool_run
                    config.ws.ac_run = false
                    config.ws.busy = false
                    config.ws.tool_busy = false
                    config.ws.ac_run = false
                    config.ws.offline = 0
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
        baseURL: `http://${getcurrentController().ipAddress}/api`,
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
module.exports.deleteLocalResults = deleteLocalResults
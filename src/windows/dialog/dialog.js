const ProgressBar = require('electron-progressbar');
const {dialog} = require('electron')
const httpClient = require('../../../http/http-client')
let mainWindow

function setDialogWindow(window) {
    mainWindow = window

}

function showDialog(info) {
    const options = {
        type: 'info',
        title: info,
        message: typeof info === 'string' && info.startsWith("update") ? '确定要进行  更新远程配置  的操作吗?' : typeof info === 'string' && info.startsWith("sync") ? '确定要进行  同步本地离线配置  的操作吗?' : "",
        buttons: ['Cancel', 'OK']
    };

    dialog.showMessageBox(mainWindow, options).then((response) => {
        let ind;
        let bar;
        if (response.response === 1) {
            bar = createProgressBar();
            setTimeout(()=>{
                bar.close()
            },10000)
            bar.value = 0
            switch (info) {
                case "updateUsers":
                    break
                case "updateProfiles":
                    break
                case "updateIO":
                    httpClient.busIoCfgDownloadApi().then((result) => {
                            if (result.status == 0) {
                                ind = setInterval(() => {
                                    bar.value = bar.value + 5;
                                    if (bar.value >= 100) {
                                        clearInterval(ind)
                                        bar.close()
                                    }
                                }, 100)
                            } else {
                                console.log(result)
                                bar.close()
                            }
                        }
                    ).catch(err => {
                        bar.close()
                        console.error('123456:', err);
                    });
                    break
                case "updateFieldBus":
                    httpClient.busFieldbusCfgDownloadApi().then((result) => {
                            if (result.status == 0) {
                                ind = setInterval(() => {
                                    bar.value = bar.value + 5;
                                    if (bar.value >= 100) {
                                        clearInterval(ind)
                                        bar.close()
                                    }
                                }, 100)
                            } else {
                                console.log(result)
                                bar.close()
                            }
                        }
                    ).catch(err => {
                        bar.close()
                        console.error('123456:', err);
                    });
                    break
                case "updateSystemConfigs":
                case "updateAllConfigs":
                    Promise.all([httpClient.devCfgBaseInfoSetApi(), httpClient.busSnCfgDownload(), httpClient.devCfgCtrlSrcSetApi(), httpClient.devCfgSerialSet()])
                        .then((result) => {
                                if (result.every((value) => value.status === 0)) {
                                    //op协议能重启网卡
                                    httpClient.devCfgNetOpSetApi()
                                    ind = setInterval(() => {
                                        bar.value = bar.value + 5;
                                        if (bar.value >= 100) {
                                            clearInterval(ind)
                                            bar.close()
                                        }
                                    }, 100)
                                } else {
                                    console.log(result)
                                    bar.close()
                                }
                            }
                        ).catch(err => {
                        bar.close()
                        console.error('123456:', err);
                    });
                    break
                case "syncUsers":
                    break
                case "syncProfiles":
                    break
                case "syncIO":
                    httpClient.busIoCfgUploadApi().then((status) => {
                            if (status === 0) {
                                ind = setInterval(() => {
                                    bar.value = bar.value + 5;
                                    if (bar.value >= 100) {
                                        clearInterval(ind)
                                        bar.close()
                                    }
                                }, 100)
                            } else {
                                // console.log(result)
                                bar.close()
                            }
                        }
                    ).catch(err => {
                        bar.close()
                        console.error('123456:', err);
                    });
                    break
                case "syncFieldBus":
                    break
                case "syncSystemConfigs":
                    break
                case "syncAllConfigs":
                    break
                default:
                    break
            }
            // 用户点击了确定按钮，执行后续操作
            // 在这里添加您想要执行的代码
        } else {
            // 用户点击了取消按钮，忽略操作
        }
    });
}

function createProgressBar() {
    return new ProgressBar({
        text: '加载中...',
        detail: '请稍候',
        indeterminate: false, // 设置为确定进度模式
        browserWindow: {
            // parent: mainWindow,
            webPreferences: {
                nodeIntegration: true // 如果需要在进度条使用 Node.js API，则设置为 true
            }
        },
        style: {
            text: {}, // 文本样式
            detail: {}, // 详细信息样式
            bar: {}, // 进度条样
            value: {} // 进度值样式
        }
    })
}


module.exports = {
    setDialogWindow,
    showDialog
}
;
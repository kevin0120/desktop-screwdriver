const ProgressBar = require('electron-progressbar');
const {dialog} = require('electron')
const httpClient = require('../../../http/http-client')
const {deleteLocalResults} = require("../../../http/config/setting");
const {saveCurrentController} = require("../../../shared/data/baseConfig");

const {selectFolder,setDialogWindow1} = require("./fileOperation");

let mainWindow

function setDialogWindow(window) {
    mainWindow = window
    setDialogWindow1(window)
}

function showErrorDialog() {
// 弹出错误框
    dialog.showMessageBox({
        type: 'error',
        title: '错误',
        message: '发生了一个错误。',
        buttons: ['确定']
    }).then(r => console.log("EEEe"));
}


function showDialog(info) {
    const options = info.includes("更新用户及权限") ? {
        type: 'question',
        title: "leetx",
        message: `确定要进行  ${info}  的操作吗?`,
        checkboxLabel: '用户密码',
        checkboxChecked: true,  // 默认勾选某些选项
        buttons: ['Cancel', 'OK']
    } : {
        type: 'question',
        title: "leetx",
        message: `确定要进行  ${info}  的操作吗?`,
        buttons: ['Cancel', 'OK']
    };

    dialog.showMessageBox(mainWindow, options).then((response) => {
        let ind;
        let bar;
        if (response.response === 1) {
            bar = createProgressBar();
            // setTimeout(() => {
            //     bar.close()
            // }, 10000)
            bar.value = 0


            if (info.includes("删除本地结果曲线")){
                deleteLocalResults().then(() => {
                        ind = setInterval(() => {
                            bar.value = bar.value + 5;
                            if (bar.value >= 100) {
                                clearInterval(ind)
                                bar.close()
                            }
                        }, 100)
                    }
                )
                return
            }

            if (info.includes("本地导入结果曲线")){
                selectFolder().then(() => {
                        ind = setInterval(() => {
                            bar.value = bar.value + 5;
                            if (bar.value >= 100) {
                                clearInterval(ind)
                                bar.close()
                            }
                        }, 100)
                    }
                )
                return
            }
            // 用户点击了确定按钮，执行后续操作
            // 在这里添加您想要执行的代码
            httpClient.syncAndUpdateByDialogApi(info, response.checkboxChecked).then((result) => {
                    if (result.every((value) => value.status === 0)) {
                        ind = setInterval(() => {
                            bar.value = bar.value + 5;
                            if (bar.value >= 100) {
                                clearInterval(ind)
                                bar.close()
                            }
                        }, 100)
                    } else {
                        bar.close()
                        showErrorDialog()
                    }
                }
            ).catch(err => {
                bar.close()
                console.error('123456:', err);
            }).then(() => {
                saveCurrentController("all")
            });
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
const {app, BrowserWindow, dialog, Menu, screen} = require('electron')
const path = require('path')
const configs = require("../../shared/config");

const ProgressBar = require('electron-progressbar');
let project = {}
if (!process.env.Project_Entrance) {
    project = configs.projects[configs.project]
} else if (configs.projects.hasOwnProperty(process.env.Project_Entrance)) {
    project = configs.projects[process.env.Project_Entrance]
} else {
    project = {}
}
let ip
function createchildWindow(mainWindow) {
    // 获取主显示器的屏幕大小
    screenWidth = screen.getPrimaryDisplay();
    const childWindow = new BrowserWindow({
        icon: path.join(app.getAppPath(), 'resources/leetx.jpg'),
        width: 600,
        height: 1280,
        parent: mainWindow,
        modal: false,
        show: false
    });
    // 创建子窗口菜单模
    const childMenuTemplate = Menu.buildFromTemplate([
        {
            label: '设备管理',
            submenu: [
                {
                    label: '刷新',
                    accelerator: 'CmdOrCtrl+F5',
                    click: () => childWindow.webContents.reload(),
                }
            ]
        }
    ])

    childWindow.setPosition(mainWindow.getBounds().width + mainWindow.getBounds().x - 15, mainWindow.getBounds().y)
    childWindow.setSize(mainWindow.getBounds().width, mainWindow.getBounds().height, true)

    childWindow.setMenu(childMenuTemplate)
    // 加载第个页面
    childWindow.loadURL(project.connectChild);

    childWindow.setTitle('                                                          在线远程设备');

    mainWindow.removeAllListeners('move');
    mainWindow.removeAllListeners('resize');
    // 监听窗口移动事件
    mainWindow.on('move', () => {
        if (childWindow.isDestroyed()) {
            return
        }
        childWindow.setPosition(mainWindow.getBounds().width + mainWindow.getBounds().x - 15, mainWindow.getBounds().y)
        // console.log('窗口移动了');
    });
    // 监听窗口移动事件
    mainWindow.on('resize', () => {
        if (childWindow.isDestroyed()) {
            return
        }
        childWindow.setSize(mainWindow.getBounds().width, mainWindow.getBounds().height, true)
    });

    childWindow.setPosition(mainWindow.getBounds().width + mainWindow.getBounds().x - 15, mainWindow.getBounds().y)
    // 当页面加载完成后，执行刷新操作
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.setTitle('                                                   离线本地设备  ' + ip.deviceId + '/' + ip.controllerName + '@' + '127.0.0.1');
        mainWindow.webContents.reload();
        mainWindow.webContents.removeAllListeners('did-finish-load');
        if (!childWindow.isDestroyed()) {
            childWindow.show();
            childWindow.webContents.reload();
        }

    });

    // 当页面加载完成后，执行刷新操作
    childWindow.webContents.on('did-finish-load', () => {
        childWindow.setTitle('                                                  在线远程设备'+ '@' + ip.ipAddress);
    });
    // 当页面加载完成后，执行刷新操作
    mainWindow.webContents.on('did-fail-load', () => {
        mainWindow.webContents.reload();
    });
    // 当页面加载完成后，执行刷新操作
    childWindow.webContents.on('did-fail-load', () => {
        childWindow.loadURL("http://127.0.0.1:30003/404");
    });

    return childWindow
}

let mainWindow

function showDialog() {
    const options = {
        type: 'info',
        title: 'Confirmation',
        message: 'Are you sure you want to proceed?',
        buttons: ['Cancel', 'OK']
    };

    dialog.showMessageBox(mainWindow, options).then((response) => {
        let ind;
        let bar;
        if (response.response === 1) {
            bar = createProgressBar();
            bar.value = 0
            ind = setInterval(() => {
                bar.value = bar.value + 5;
                if (bar.value >= 100) {
                    clearInterval(ind)
                    bar.close()
                }
            }, 100)
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
            parent: mainWindow,
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


function createsettingWindow(ip1) {
    ip =ip1
    // 获取主显示器的屏幕大小
    let screenWidth = screen.getPrimaryDisplay();
    // Create the browser windows.
    mainWindow = new BrowserWindow({
        icon: path.join(app.getAppPath(), 'resources/icon.png'),
        width: 600,
        height: 1280,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    mainWindow.setPosition(screenWidth.size.width / 2 - mainWindow.getBounds().width, mainWindow.getBounds().y)
    let childWindow = createchildWindow(mainWindow);
    const parentMenuTemplate = Menu.buildFromTemplate([
        {
            label: "本地>>>远程",
            submenu: [
                {
                    click: () => showDialog(),
                    label: '更新用户及权限',
                },
                {
                    click: () => showDialog(),
                    label: '更新工艺配置',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: '更新IO配置',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', 1),
                    label: '更新总线配置',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: '更新系统配置',
                },
                {type: 'separator'}, // 添加横线
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: '更新全部配置',
                }
            ]
        },
        {
            type: 'separator'
        },
        {
            label: "远程>>>本地",
            submenu: [
                {
                    click: showDialog,
                    label: '同步用户及权限',
                },
                {
                    click: showDialog,
                    label: '同步工艺配置',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: '同步IO配置',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', 1),
                    label: '同步总线配置',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: '同步系统配置',
                },
                {type: 'separator'}, // 添加横线
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: '同步全部配置',
                }
            ]
        },
        {
            type: 'separator'
        },
        {
            label: "拧紧结果和曲线",
            submenu: [
                {
                    click: () => showDialog(),
                    label: '在线导入最新100条结果曲线',
                },
                {
                    label: '本地导入结果曲线',
                },
                {
                    label: '删除本地结果曲线',
                }
            ]
        },
        {
            type: 'separator'
        },
        {
            label: "设备管理",
            submenu: [
                {
                    click: () => mainWindow.webContents.reload(),
                    label: '刷新',
                    accelerator: 'CmdOrCtrl+F5',
                },
                {
                    click: () => {
                        if (childWindow.isDestroyed()) {
                            childWindow = createchildWindow(mainWindow);
                            childWindow.show();
                        }

                    },
                    label: '打开远程设备',
                },
                {
                    click: () => {
                        if (!childWindow.isDestroyed()) {
                            childWindow.close();
                        }

                    },
                    label: '关闭远程设备',
                }
            ]
        },
    ])
    mainWindow.setMenu(parentMenuTemplate)
    if (project.openDevTools) {
        mainWindow.webContents.openDevTools()
    }
    mainWindow.setFullScreen(project.setFullScreen);
    // Open the DevTools.
    mainWindow.loadURL(project.connect);
    mainWindow.setTitle('                                                   离线本地设备  ' + ip.deviceId + '/' + ip.controllerName + '@' + ip.ipAddress);
    childWindow.setTitle('                                                   离线本地设备  ' + ip.deviceId + '/' + ip.controllerName + '@' + ip.ipAddress);

    return mainWindow
}

module.exports = createsettingWindow;



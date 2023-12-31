const {app, BrowserWindow, Menu, screen, shell} = require('electron')
const path = require('path')
const {getHomeDirectory} = require("../../shared/data/baseConfig");
const {setDialogWindow, showDialog} = require("./dialog/dialog");
const {getcurrentController, clearcurrentController} = require("../../shared/data/baseConfig");
const {setdefaultToken} = require("../../shared/config");
let mainWindow
let childWindow

function isAlive(window) {
    if (!window || (window && window.isDestroyed())) {
        return false
    }
    return true
}


function editdWindows() {
    mainWindow.loadURL("http://127.0.0.1:30003/setup/setbase").then(() => {
            mainWindow.setMenu(MenuTemplate2);
        }
    );
}


const MenuTemplate1 = Menu.buildFromTemplate([
    {
        label: "设备管理",
        submenu: [
            {
                label: "打开工作目录",
                click: () => {
                    shell.openPath(getHomeDirectory()).then(() => {
                        console.log('Folder opened successfully');
                    }).catch(err => {
                        console.error('Error opening folder:', err);
                    });
                },
            },
            {
                label: "开发者工具",
                click: () => {
                    mainWindow.webContents.openDevTools(); // 打开开发者工具
                },
            },
            {
                label: "刷新",
                click: () => {
                    mainWindow.loadURL("http://127.0.0.1:30003/manage").then(
                        mainWindow.setMenu(MenuTemplate1)
                    );
                },
            },
            {
                type: 'separator'
            },
        ]
    },
])

const MenuTemplate2 = Menu.buildFromTemplate([
    {
        label: "本地>>>远程",
        id: '本地>>>远程', // 唯一的ID
        submenu: [
            {
                // click: () => showDialog("updateUsers"),
                label: '更新用户及权限',
                type: "checkbox",
                checked: true,
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    let w = MenuTemplate2.getMenuItemById('本地>>>远程')
                    w.submenu.popup({
                        x: 0,
                        y: 0,
                    });

                }
            },
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("updateProfiles"),
                label: '更新工艺',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    let w = MenuTemplate2.getMenuItemById('本地>>>远程')
                    w.submenu.popup({
                        x: 0,
                        y: 0,
                    });

                }
            },
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("updateIO"),
                label: '更新IO配置',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    let w = MenuTemplate2.getMenuItemById('本地>>>远程')
                    w.submenu.popup({
                        x: 0,
                        y: 0,
                    });

                }
            },
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("updateFieldBus"),
                label: '更新总线配置',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    let w = MenuTemplate2.getMenuItemById('本地>>>远程')
                    w.submenu.popup({
                        x: 0,
                        y: 0,
                    });

                }
            },
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("updateSystemConfigs"),
                label: '更新系统配置',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    let w = MenuTemplate2.getMenuItemById('本地>>>远程')
                    w.submenu.popup({
                        x: 0,
                        y: 0,
                    });

                }
            },
            {type: 'separator'}, // 添加横线
            {
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    let func1 = MenuTemplate2.getMenuItemById('本地>>>远程').submenu.items.filter((item) => item.checked).map((item) => item.label);
                    showDialog(func1, "本地>>>远程")
                },
                // click: () => showDialog("updateAllConfigs"),
                label: '开始更新',
            }

        ]
    },
    {
        type: 'separator'
    },
    {
        label: "远程>>>本地",
        id: '远程>>>本地', // 唯一的ID
        submenu: [
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("syncUsers"),
                label: '同步用户及权限',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    MenuTemplate2.getMenuItemById('远程>>>本地').submenu.popup({
                        x: 100,
                        y: 0,
                    });
                }
            },
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("syncProfiles"),
                label: '同步工艺',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    MenuTemplate2.getMenuItemById('远程>>>本地').submenu.popup({
                        x: 100,
                        y: 0,
                    });
                }
            },
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("syncIO"),
                label: '同步IO配置',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    MenuTemplate2.getMenuItemById('远程>>>本地').submenu.popup({
                        x: 100,
                        y: 0,
                    });
                }
            },
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("syncFieldBus"),
                label: '同步总线配置',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    MenuTemplate2.getMenuItemById('远程>>>本地').submenu.popup({
                        x: 100,
                        y: 0,
                    });
                }
            },
            {
                type: "checkbox",
                checked: true,
                // click: () => showDialog("syncSystemConfigs"),
                label: '同步系统配置',
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    MenuTemplate2.getMenuItemById('远程>>>本地').submenu.popup({
                        x: 100,
                        y: 0,
                    });
                }
            },
            {type: 'separator'}, // 添加横线
            {
                click: (menuItem, browserWindow, event) => {
                    // 处理菜单项的点击事件
                    let func1 = MenuTemplate2.getMenuItemById('远程>>>本地').submenu.items.filter((item) => item.checked).map((item) => item.label);
                    showDialog(func1, "远程>>>本地")
                },
                label: '开始同步',
            }
        ]
    },
    {
        type: 'separator'
    },
    {
        label: "拧紧结果和曲线",
        submenu:
            [
                {
                    click: () => showDialog(['在线导入最新200条结果曲线']),
                    label: '在线导入最新200条结果曲线',
                },
                {
                    click: () => showDialog(['本地导入结果曲线']),
                    label: '本地导入结果曲线',
                },
                {
                    click: () => showDialog(['删除本地结果曲线']),
                    label: '删除本地结果曲线',
                }
            ]
    },
    {
        type: 'separator'
    },
    {
        label: "设备管理",
        submenu:
            [
                {
                    click: () => {
                        mainWindow.loadURL("http://127.0.0.1:30003/manage").then(() => {
                                clearcurrentController();
                                mainWindow.setMenu(MenuTemplate1)
                            }
                        )
                    },
                    label: '返回设备主页',
                    // icon:path.join(app.getAppPath(), 'resources', 'icon.ico')
                },
                {
                    label: "开发者工具",
                    click: () => {
                        mainWindow.webContents.openDevTools(); // 打开开发者工具
                    },
                },
                {
                    label: "刷新",
                    click: () => {
                        mainWindow.loadURL("http://127.0.0.1:30003/setup/setbase").then(
                        );
                    },
                },
                {
                    type: 'separator'
                },
                {
                    click: () => {
                        if ((!isAlive(childWindow))) {
                            childWindow = createchildWindow(mainWindow);
                            childWindow.show();
                        }

                    },
                    label: '打开远程设备',
                },
                {
                    click: () => {
                        if (isAlive(childWindow)) {
                            childWindow.close();
                        }

                    },
                    label: '关闭远程设备',
                }
            ]
    }
])

function createchildWindow(mainWindow) {
    setdefaultToken(`http://${getcurrentController().ipAddress}`)
    childWindow = new BrowserWindow({
        icon: path.join(app.getAppPath(), 'resources/leetx.jpg'),
        width: 1280,
        height: 800,
        parent: mainWindow,
        modal: false,
        show: false
    });
    // childWindow.webContents.openDevTools()
    // 创建子窗口菜单模
    const childMenuTemplate = Menu.buildFromTemplate([
        {
            label: '设备管理',
            submenu: [
                {
                    label: '刷新',
                    accelerator: 'CmdOrCtrl+F5',
                    click: () => childWindow.loadURL(`http://${getcurrentController().ipAddress}`),
                }
            ]
        }
    ])

    childWindow.setPosition(Math.round(mainWindow.getBounds().width + mainWindow.getBounds().x - 15), Math.round(mainWindow.getBounds().y))
    childWindow.setSize(Math.round(mainWindow.getBounds().width), Math.round(mainWindow.getBounds().height), true)

    childWindow.setMenu(childMenuTemplate)
    // 加载第个页面
    childWindow.loadURL(`http://${getcurrentController().ipAddress}`);
    mainWindow.removeAllListeners('move');
    mainWindow.removeAllListeners('resize');
    // 监听窗口移动事件
    mainWindow.on('move', () => {
        if (childWindow.isDestroyed()) {
            return
        }
        childWindow.setPosition(Math.round(mainWindow.getBounds().width + mainWindow.getBounds().x - 15), Math.round(mainWindow.getBounds().y))
    });
    // 监听窗口移动事件
    mainWindow.on('resize', () => {
        if (childWindow.isDestroyed()) {
            return
        }
        childWindow.setSize(Math.round(mainWindow.getBounds().width), Math.round(mainWindow.getBounds().height), true)
    });
    // childWindow.webContents.openDevTools()
    childWindow.setPosition(Math.round(mainWindow.getBounds().width + mainWindow.getBounds().x - 15), Math.round(mainWindow.getBounds().y))

    // 当页面加载完成后，执行刷新操作
    childWindow.webContents.on('did-finish-load', () => {
        childWindow.setTitle(`                                       在线远程设备${getcurrentController().deviceId}@${getcurrentController().controllerName}@${getcurrentController().ipAddress}`);
    });

    // 当页面加载完成后，执行刷新操作
    childWindow.webContents.on('did-fail-load', () => {
        childWindow.loadURL("http://127.0.0.1:30003/404")
    });

    return childWindow
}

function createmainWindow() {
    getHomeDirectory()
    // 获取主显示器的屏幕大小
    let screenWidth = screen.getPrimaryDisplay();
    // Create the browser windows.
    mainWindow = new BrowserWindow({
        icon: path.join(app.getAppPath(), 'resources/icon.png'),
        width: Math.round(screenWidth.size.height/1.6),
        height: Math.round(screenWidth.size.height),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    setDialogWindow(mainWindow)
    mainWindow.setPosition(Math.round(screenWidth.size.width / 2 - mainWindow.getBounds().width), Math.round(mainWindow.getBounds().y))
    // childWindow = createchildWindow(mainWindow);

    mainWindow.setMenu(MenuTemplate1)
    mainWindow.loadURL("http://127.0.0.1:30003/manage").then(() => {
            mainWindow.setMenu(MenuTemplate1);
            clearcurrentController()
        }
    )
    // 当页面加载完成后，执行刷新操作
    mainWindow.webContents.on('did-finish-load', () => {
        setdefaultToken("http://127.0.0.1");
        if (getcurrentController()) {
            mainWindow.setTitle(`                                  离线本地设备${getcurrentController().deviceId}@${getcurrentController().controllerName}@${getcurrentController().ipAddress}`)
        } else {
            mainWindow.setTitle('                                                              设备管理');
        }
    });

    return mainWindow
}

function reloadWindows() {
    if (isAlive(childWindow)) {
        childWindow.close()
        childWindow = createchildWindow(mainWindow);
        childWindow.show();
    }
    if (isAlive(mainWindow)) {
        mainWindow.webContents.reload()
    }
}


module.exports = {createmainWindow, reloadWindows, editdWindows};


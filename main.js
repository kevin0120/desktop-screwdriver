// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog, Menu, screen} = require('electron')
// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();
const path = require('path')
const fs = require('fs')

const killProcessesByName = require("./backend/manager");
const configs = require("./shared/config");
const {fork, spawn} = require('child_process')
const httpServer = fork('./http/http-server.js')
let project = {}
if (!process.env.Project_Entrance) {
    project = configs.projects[configs.project]
} else if (configs.projects.hasOwnProperty(process.env.Project_Entrance)) {
    project = configs.projects[process.env.Project_Entrance]
} else {
    project = {}
}


let screenWidth = 800;


function createchildWindow(mainWindow) {
    // 获取主显示器的屏幕大小
    screenWidth = screen.getPrimaryDisplay();
    const childWindow = new BrowserWindow({
        icon: path.join(__dirname, 'resources/leetx.jpg'),
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

    childWindow.setMenu(childMenuTemplate)
    // 加载第个页面
    childWindow.loadURL(project.connectChild);

    childWindow.setTitle('                                                          在线远程设备');

    // 监听窗口移动事件
    mainWindow.on('move', () => {
        if (childWindow.isDestroyed()) {
            return
        }
        childWindow.setPosition(mainWindow.getBounds().width + mainWindow.getBounds().x - 15, mainWindow.getBounds().y)
        childWindow.setSize(mainWindow.getBounds().width, mainWindow.getBounds().height, true)
        // console.log('窗口移动了');
    });

    childWindow.setPosition(mainWindow.getBounds().width + mainWindow.getBounds().x - 15, mainWindow.getBounds().y)
    // app.setName("Hello Vue")
    // 模式 3：主进程到渲染器进程

    // 当页面加载完成后，执行刷新操作
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.setTitle('                                                          离线本地设备');
        mainWindow.webContents.reload();
        mainWindow.webContents.removeAllListeners('did-finish-load');
        if (!childWindow.isDestroyed()) {
            childWindow.show();
            childWindow.webContents.reload();
        }

    });

    // 当页面加载完成后，执行刷新操作
    childWindow.webContents.on('did-finish-load', () => {
        childWindow.setTitle('                                                          在线远程设备');
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

function createWindow() {

    // Create the browser window.
    const mainWindow = new BrowserWindow({
        icon: path.join(__dirname, 'resources/icon.png'),
        width: 600,
        height: 1280,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.setPosition(screenWidth.size.width / 2 - mainWindow.getBounds().width, mainWindow.getBounds().y)
    let childWindow = createchildWindow(mainWindow);
    const parentMenuTemplate = Menu.buildFromTemplate([
        {
            label: "本地>>>远程",
            submenu: [
                {
                    click: () => mainWindow.webContents.send('update-counter', 1),
                    label: '更新用户及权限',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
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
                { type: 'separator' }, // 添加横线
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
                    click: () => mainWindow.webContents.send('update-counter', 1),
                    label: '同步用户及权限',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
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
                { type: 'separator' }, // 添加横线
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
        {
            type: 'separator'
        },
        {
            label: "拧紧结果和曲线",
            submenu: [
                {
                    // click: () => mainWindow.webContents.reload(),
                    label: '在线导入最新100条结果曲线',
                },
                {
                    // click: () => {
                    //     if (!childWindow.isDestroyed()) {
                    //         childWindow.close();
                    //     }
                    //
                    // },
                    label: '本地导入结果曲线',
                },
                {
                    label: '删除本地结果曲线',
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
    mainWindow.setTitle('                                                          离线本地设备');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

function handleSetTitle(event, title) {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    // console.log(win,title)
    win.setTitle(title)
}

async function handleFileOpen() {
    const {canceled, filePaths} = await dialog.showOpenDialog()
    if (canceled) {

    } else {
        return filePaths[0]
    }
}

let childProcess
app.on('ready', function () {
    // 启动三方程序
    //当前应用的目录
    try {
        const appPath = app.isPackaged ? path.dirname(app.getPath('exe')) : app.getAppPath();
        if (!fs.existsSync(path.resolve(appPath, 'backend'))) {
            fs.mkdirSync(path.resolve(appPath, 'backend'));
        }
        if (!fs.existsSync(path.resolve(appPath, 'backend/screwdriverapi'))) {
            fs.mkdirSync(path.resolve(appPath, 'backend/screwdriverapi'));
        }
        if (!fs.existsSync(path.resolve(appPath, 'backend/screwdriverapi/config'))) {
            fs.mkdirSync(path.resolve(appPath, 'backend/screwdriverapi/config'));
            fs.cpSync(path.resolve(__dirname, 'backend/screwdriverapi/config'), path.resolve(appPath, 'backend/screwdriverapi/config'), {recursive: true})
        }

        process.chdir(path.resolve(appPath, 'backend/screwdriverapi'));
        childProcess = spawn(path.resolve(__dirname, 'backend/screwdriverapi', 'screwdriverapi.exe'));
    } catch (e) {
        console.error(e.message);
        app.quit()
    }
    // 获取主显示器的屏幕大小
    screenWidth = screen.getPrimaryDisplay();

    // 模式 1：渲染器进程到主进程（单向）
    ipcMain.on('set-title', handleSetTitle)
    // 模式 2：渲染器进程到主进程（双向）
    ipcMain.handle('dialog:openFile', handleFileOpen)
    // 模式 3：主进程到渲染器进程
    ipcMain.on('counter-value', (_event, value) => {
        console.log(value) // will print value to Node console
    })
    createWindow()
});

app.on('before-quit', function () {
    killProcessesByName('screwdriverapi.exe')
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {

    httpServer.kill();
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

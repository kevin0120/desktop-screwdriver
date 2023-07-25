// Modules to control application life and create native browser windows
const {app, BrowserWindow, ipcMain, dialog, Menu, screen} = require('electron')
// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();

const createsettingWindow = require("./src/windows/settingWindow");

const createcontrolWindow = require("./src/windows/controlWindow");

const {killProcessesByName, initBackend} = require("./src/manager");
const configs = require("./shared/config");

const httpServer = require('./http/http-server.js')
let project = {}
if (!process.env.Project_Entrance) {
    project = configs.projects[configs.project]
} else if (configs.projects.hasOwnProperty(process.env.Project_Entrance)) {
    project = configs.projects[process.env.Project_Entrance]
} else {
    project = {}
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

// function handleSetTitle(event, title) {
//     const webContents = event.sender
//     const win = BrowserWindow.fromWebContents(webContents)
//     // console.log(win,title)
//     win.setTitle(title)
// }
//
// async function handleFileOpen() {
//     const {canceled, filePaths} = await dialog.showOpenDialog()
//     if (canceled) {
//
//     } else {
//         return filePaths[0]
//     }
// }
let mainWindow

app.on('ready', function () {
    // 启动三方程序
    //当前应用的目录
    initBackend()


    // // 模式 1：渲染器进程到主进程（单向）
    // ipcMain.on('set-title', handleSetTitle)
    // // 模式 2：渲染器进程到主进程（双向）
    // ipcMain.handle('dialog:openFile', handleFileOpen)
    // // 模式 3：主进程到渲染器进程
    // ipcMain.on('counter-value', (_event, value) => {
    //     console.log(value) // will print value to Node console
    // })
    // 模式 1：渲染器进程到主进程（单向）
    ipcMain.on('openController', (event, ip) => {
        if (mainWindow == null || (mainWindow && mainWindow.isDestroyed())) {
            mainWindow = createsettingWindow(ip)
        }

    })
    // 模式 3：主进程到渲染器进程
    ipcMain.on('closeController', (ip) => {
        if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.close();
        }
    })
    createcontrolWindow()
});

app.on('before-quit', function () {
    killProcessesByName('screwdriverapi.exe')
})

app.on('activate', function () {
    // On macOS it's common to re-create a windows in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createsettingWindow()
})
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('windows-all-closed', function () {

    httpServer.kill();
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

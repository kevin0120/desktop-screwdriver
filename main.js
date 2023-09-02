// Modules to control application life and create native browser windows
const {app, BrowserWindow, ipcMain} = require('electron')
// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();
const {createmainWindow, reloadWindows, editdWindows} = require("./src/windows/createWindow");
const {killProcessesByName} = require("./src/manager");
const {setdefaultToken} = require("./shared/config");
const {editDeviceBackend} = require("./shared/data/baseConfig");

const upd = require("./udp/udp");

const devicesConfig = require("./shared/data/devicesConfig");
const httpServer = require('./http/http-server')
// const path = require('path')
//
// if (process.env.NODE_ENV === 'development') {
//     require('electron-reload')(__dirname, {
//         electron: require(`'${path.join(__dirname, 'node_modules', '.bin', 'electron')}'`)
// });
// }
const {session} = require('electron');

app.on('ready', function () {
    // 获取默认会话
// 获取默认的会话对象
    const defaultSession = session.defaultSession;
// 清除缓存
    defaultSession.clearCache().then(r => console.log("成功清除缓存"));
    setdefaultToken("http://127.0.0.1")
    // // 启动三方程序
    // //当前应用的目录
    // initBackend()
    // getWorkDirectory()
    // 模式 1：渲染器进程到主进程（单向）
    // ipcMain.on('setCurrentController', (event, ip) => {
    //     setcurrentController({
    //         device_name: ip.controllerName,
    //         device_id: parseInt(ip.deviceId),
    //         ip: ip.ipAddress,
    //     })
    //     reloadWindows()
    // })
    // 模式 3：主进程到渲染器进程
    // ipcMain.on('getController', (event) => {
    //     event.returnValue = getcurrentController()
    // })


    // 模式 3：主进程到渲染器进程
    ipcMain.on('addDeviceBackend', (event, device) => {
        event.returnValue = devicesConfig.addOrEditDeviceBackend(device)
    })
    // 模式 3：主进程到渲染器进程
    ipcMain.on('copyDeviceBackend', (event, device, copyId) => {
        event.returnValue = devicesConfig.copyDeviceBackend(device, copyId)
    })
    // 模式 3：主进程到渲染器进程
    ipcMain.on('delDeviceBackend', (event, deviceId) => {
        event.returnValue = devicesConfig.delDeviceBackend(deviceId)
    })
    // 模式 3：主进程到渲染器进程
    ipcMain.on('syncDevicesBackend', (event, devices) => {
        event.returnValue = devicesConfig.syncDevicesBackend(devices)
    })
    // 模式 3：主进程到渲染器进程
    ipcMain.on('getDevicesBackend', (event) => {
        event.returnValue = devicesConfig.getDevicesBackend()
    })

    // 模式 3：主进程到渲染器进程
    ipcMain.on('scanDeviceBackend', (event) => {
        upd.broadcastUdp((devices) => {
            event.returnValue = devices
        })
    })


    // 模式 3：主进程到渲染器进程
    ipcMain.on('editDeviceBackend', (event, device) => {
        editDeviceBackend(device)
        reloadWindows()
        editdWindows()
    })

    createmainWindow()
});

app.on('before-quit', function () {
    killProcessesByName('screwdriverapi.exe')
})

app.on('activate', function () {
    // On macOS it's common to re-create a windows in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createmainWindow()
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

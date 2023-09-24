const settings = require('electron-settings');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const {app} = require('electron')
const defaultBYD = require('../config/defaultControllers')

// // 模式 3：主进程到渲染器进程
// ipcMain.on('editDeviceBackend', (event) => {
//     event.returnValue = [{
//         ipAddress: "192.168.20.145",
//         deviceId: 9,
//         controllerName: "Line1-0.1",
//         ID: 1,
//     }]
// })

function addOrEditDeviceBackend(device) {
    let c = fetchController(device.ID)
    c.config.dev.cfg_base_info.device_name = device.controllerName
    c.config.dev.cfg_base_info.device_id = device.deviceId
    c.config.dev.cfg_net_op.ip = device.ipAddress
    c.config.id = device.ID
    saveController(c)
    return 0
}

function copyDeviceBackend(device, copyId) {
    let c = fetchController(copyId)
    c.config.id = device.ID
    saveController(c)
    return 0
}


function delDeviceBackend(deviceId) {
    let dir = getWorkDirectory(deviceId)
    settings.setPath(dir);
    fse.removeSync(dir);
    return 0
}

function syncDevicesBackend(devices) {
    const obj =JSON.parse(devices)
    settings.setPath(path.resolve(appPath, 'data','devices.json'));
    settings.deleteAll();
    settings.setAll(obj, {prettify: true});
    obj.forEach(
        (device)=>{
            addOrEditDeviceBackend(device)
    })
    return 0
}

function getDevicesBackend() {
    settings.setPath(path.resolve(appPath, 'data','devices.json'));

    if (Object.keys(settings.getAll()).length === 0) {
        return []
    }
    const devices =settings.getAll()
    devices.forEach((device)=>{
        let c = fetchController(device.ID)
        device.controllerName=c.config.dev.cfg_base_info.device_name
        device.deviceId =c.config.dev.cfg_base_info.device_id
        device.ipAddress=c.config.dev.cfg_net_op.ip

    })
    syncDevicesBackend(JSON.stringify(devices))
    return devices
}



const appPath = app.isPackaged ? path.dirname(app.getPath('exe')) : app.getAppPath();


function getWorkDirectory(deviceId) {
    switch (process.platform) {
        case 'linux':
        case 'win32':
            const dir = path.resolve(appPath, 'data', `${deviceId}`)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {recursive: true});
            }
            if (!fs.existsSync(path.resolve(dir, 'data', 'curves'))) {
                fs.mkdirSync(path.resolve(dir, 'data', 'curves'), {recursive: true});
            }
            return dir;
    }
}


function fetchController(deviceId) {
    let CurrentController = {
        config: {},
        profiles: {},
        users: {}
    }
    switch (process.platform) {
        case 'linux':
        case 'win32':
            settings.setPath(path.join(getWorkDirectory(deviceId), 'config.json'));

            // if (
            //     process.env.NODE_ENV === 'development' ||
            //     process.env.DEBUG_PROD === 'true'
            // ) {
            //     settings.deleteAll();
            // }
            if (Object.keys(settings.getAll()).length === 0) {
                settings.setAll(defaultBYD.defaultBYDConfigs, {prettify: true});
            }
            if (Object.keys(CurrentController.config).length === 0) {
                CurrentController.config = settings.getAll();
            }


            settings.setPath(path.join(getWorkDirectory(deviceId), 'users.json'));
            // if (
            //     process.env.NODE_ENV === 'development' ||
            //     process.env.DEBUG_PROD === 'true'
            // ) {
            //     settings.deleteAll();
            // }

            if (Object.keys(settings.getAll()).length === 0) {
                settings.setAll(defaultBYD.defaultBYDUsers, {prettify: true});
            }
            if (Object.keys(CurrentController.users).length === 0) {
                CurrentController.users = settings.getAll();
            }

            settings.setPath(path.join(getWorkDirectory(deviceId), 'profiles.json'));
            // if (
            //     process.env.NODE_ENV === 'development' ||
            //     process.env.DEBUG_PROD === 'true'
            // ) {
            //     settings.deleteAll();
            // }

            if (Object.keys(settings.getAll()).length === 0) {
                settings.setAll(defaultBYD.defaultBYDProfiles, {prettify: true});
            }
            if (Object.keys(CurrentController.profiles).length === 0) {
                CurrentController.profiles = settings.getAll();
            }
            return CurrentController;
    }
}

function saveController(c) {
    switch (process.platform) {
        case 'linux':
        case 'win32':
            settings.setPath(path.join(getWorkDirectory(c.config.id), 'config.json'));
            settings.setAll(c.config, {prettify: true});
            settings.setPath(path.join(getWorkDirectory(c.config.id), 'users.json'));
            settings.setAll(c.users, {prettify: true});
            settings.setPath(path.join(getWorkDirectory(c.config.id), 'profiles.json'));
            settings.setAll(c.profiles, {prettify: true});
            break
    }
    return c;
}

module.exports ={
    addOrEditDeviceBackend,
    copyDeviceBackend,
    delDeviceBackend,
    syncDevicesBackend,
    getDevicesBackend,
}
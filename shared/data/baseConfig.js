const settings = require('electron-settings');
const path = require('path');
const fs = require('fs');
const {app} = require('electron')
const {defaultBYDConfigs} = require('../config/defaultControllers')


let currentController = {
    device_name: "Line1-0.9",
    device_id: 9,
    ip: "192.168.20.145",
}


const appPath = app.isPackaged ? path.dirname(app.getPath('exe')) : app.getAppPath();

function getWorkDirectory() {
    switch (process.platform) {
        case 'linux':
        case 'win32':
            const dir = path.resolve(appPath, 'data', `${currentController.device_id}@${currentController.device_name}@${currentController.ip}`)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {recursive: true});
            }
            return dir;
    }
}

let CurrentController

function fetchCurrentController() {
    switch (process.platform) {
        case 'linux':
        case 'win32':
            settings.setPath(path.join(getWorkDirectory(), 'config.json'));

            if ((
                process.env.NODE_ENV === 'development' ||
                process.env.DEBUG_PROD === 'true'
            ) && (!CurrentController)) {
                settings.deleteAll();
            }

            if (Object.keys(settings.getAll()).length === 0) {
                settings.setAll(defaultBYDConfigs, {prettify: true});
            }

            CurrentController = settings.getAll();
            return CurrentController;
    }
}


function saveCurrentController() {
    switch (process.platform) {
        case 'linux':
        case 'win32':
            settings.setPath(path.join(getWorkDirectory(), 'config.json'));
            settings.setAll(CurrentController, {prettify: true});
            return CurrentController;
    }
}

module.exports.fetchCurrentController = fetchCurrentController;
module.exports.saveCurrentController = saveCurrentController;

const settings = require('electron-settings');
const path = require('path');
const fs = require('fs');
const {app} = require('electron')
const defaultBYD = require('../config/defaultControllers')

let currentController = {
    device_name: "Line1-0.9",
    device_id: 9,
    ip: "192.168.20.145",
}

function getcurrentController() {
    return currentController
}

function setcurrentController(c) {
    currentController = c
    CurrentController = {
        config: {},
        profiles: {},
        users: {}
    }
    CurrentController = fetchCurrentController()
    CurrentController.config.dev.cfg_base_info.device_name = currentController.device_name
    CurrentController.config.dev.cfg_base_info.device_id = currentController.device_id
    CurrentController.config.dev.cfg_net_op.ip = currentController.ip
    saveCurrentController()
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

let CurrentController = {
    config: {},
    profiles: {},
    users: {}
}


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
                settings.setAll(defaultBYD.defaultBYDConfigs, {prettify: true});
            }
            if (Object.keys(CurrentController.config).length === 0) {
                CurrentController.config = settings.getAll();
            }


            settings.setPath(path.join(getWorkDirectory(), 'users.json'));
            if ((
                process.env.NODE_ENV === 'development' ||
                process.env.DEBUG_PROD === 'true'
            ) && (!CurrentController)) {
                settings.deleteAll();
            }

            if (Object.keys(settings.getAll()).length === 0) {
                settings.setAll(defaultBYD.defaultBYDUsers, {prettify: true});
            }
            if (Object.keys(CurrentController.users).length === 0) {
                CurrentController.users = settings.getAll();
            }

            settings.setPath(path.join(getWorkDirectory(), 'profiles.json'));
            if ((
                process.env.NODE_ENV === 'development' ||
                process.env.DEBUG_PROD === 'true'
            ) && (!CurrentController)) {
                settings.deleteAll();
            }

            if (Object.keys(settings.getAll()).length === 0) {
                settings.setAll(defaultBYD.defaultBYDProfiles, {prettify: true});
            }
            if (Object.keys(CurrentController.profiles).length === 0) {
                CurrentController.profiles = settings.getAll();
            }
            return CurrentController;
    }
}

function saveCurrentController(type) {
    switch (process.platform) {
        case 'linux':
        case 'win32':
            switch (type) {
                case 'config':
                    settings.setPath(path.join(getWorkDirectory(), 'config.json'));
                    settings.setAll(CurrentController.config, {prettify: true});
                    break
                case 'users':
                    settings.setPath(path.join(getWorkDirectory(), 'users.json'));
                    settings.setAll(CurrentController.users, {prettify: true});
                    break
                case 'profiles':
                    settings.setPath(path.join(getWorkDirectory(), 'profiles.json'));
                    settings.setAll(CurrentController.profiles, {prettify: true});
                    break
                default:
                    settings.setPath(path.join(getWorkDirectory(), 'config.json'));
                    settings.setAll(CurrentController.config, {prettify: true});
                    settings.setPath(path.join(getWorkDirectory(), 'users.json'));
                    settings.setAll(CurrentController.users, {prettify: true});
                    settings.setPath(path.join(getWorkDirectory(), 'profiles.json'));
                    settings.setAll(CurrentController.profiles, {prettify: true});
                    break
            }
            return CurrentController;
    }
}

module.exports.fetchCurrentController = fetchCurrentController;
module.exports.saveCurrentController = saveCurrentController;
module.exports.setcurrentController = setcurrentController;
module.exports.getcurrentController = getcurrentController;
module.exports.getWorkDirectory = getWorkDirectory;
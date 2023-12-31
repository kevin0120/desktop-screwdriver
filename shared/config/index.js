const {defaultConfigs} = require('./defaultConfig');
const {defaultToken,setdefaultToken} = require('./defaultToken');


const {getAppDirectory} = require('../logger');

const path = require('path');
const settings = require('electron-settings');
const fse = require('fs-extra');
const fs = require('fs');

const dir = getAppDirectory();
const isExist = fs.existsSync(dir);
if (!isExist) {
    fs.mkdirSync(dir,{recursive:true});
}

settings.setPath(path.join(dir, 'setting.json'));

if (
    process.env.NODE_ENV === 'development' ||
    process.env.DEBUG_PROD === 'true'
) {
    settings.deleteAll();
}

if (Object.keys(settings.getAll()).length === 0) {
    settings.setAll(defaultConfigs,{prettify: true});
}

const configs = settings.getAll();
module.exports = {
    configs,
    defaultToken,
    setdefaultToken
}
;

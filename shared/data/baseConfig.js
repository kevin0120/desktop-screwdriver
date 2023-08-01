
const path = require('path');
const fs = require('fs');
const {app} = require('electron')



let currentController={
    device_name: "Line1-0.9",
    device_id: 9,
    ip: "192.168.20.145",
}



const appPath = app.isPackaged ? path.dirname(app.getPath('exe')) : app.getAppPath();

function getWorkDirectory() {
    switch (process.platform) {
        case 'linux':
        case 'win32':
            const dir =path.resolve(appPath, 'data',`${currentController.device_id}@${currentController.device_name}@${currentController.ip}`)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir,{recursive:true});
            }
            return dir;
    }
}



module.exports.getWorkDirectory=getWorkDirectory;

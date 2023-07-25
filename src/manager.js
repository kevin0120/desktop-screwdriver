const {exec} = require('child_process');
const path = require('path')
const fs = require('fs')
const { app} = require('electron')
const {spawn} = require('child_process')


function killProcessesByName(processName) {
    // 执行系统命令获取进程列表
    const command = `taskkill /F /IM ${processName}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error killing process: ${error.message}`);
            return;
        }

        console.log(`Process "${processName} killed successfully.`);
  });
}

function initBackend() {
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
            fs.cpSync(path.resolve(app.getAppPath(), 'backend/screwdriverapi/config'), path.resolve(appPath, 'backend/screwdriverapi/config'), {recursive: true})
        }

        process.chdir(path.resolve(appPath, 'backend/screwdriverapi'));
        spawn(path.resolve(app.getAppPath(), 'backend/screwdriverapi', 'screwdriverapi.exe'));
    } catch (e) {
        console.error(e.message);
        app.quit()
    }
}


module.exports = {
    initBackend,
    killProcessesByName};


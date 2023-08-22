const {dialog} = require('electron');
const fs = require('fs-extra');
const path = require('path');
const {deleteLocalResults} = require('../../../http/config/setting');
const {getWorkDirectory} = require('../../../shared/data/baseConfig');
const AdmZip = require('adm-zip');
let mainWindow

function setDialogWindow1(window) {
    mainWindow = window
}

async function selectFolder() {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory']
    });

    if (!result.canceled) {
        const sourceFolderPath = result.filePaths[0]; // 获取选择的文件夹路径
        const files = await fs.readdir(sourceFolderPath); // 读取源文件夹中的文件
        const resultFiles = files.filter(file => file.startsWith('result'));
        const destinationFolderPath = path.resolve(getWorkDirectory(), 'data'); // 设置目标文件夹路径
        if (resultFiles.length > 0) {
            console.log('以 "result" 开头的文件存在');
            await deleteLocalResults()
            await fs.copySync(path.resolve(sourceFolderPath, resultFiles[0]), path.resolve(destinationFolderPath, resultFiles[0])); // 复制文件到目标文件夹
        } else {
            console.log('以 "result" 开头的文件不存在');
            return
        }

        const curveFiles = files.filter(file => file.endsWith('.zip'));

        curveFiles.forEach(file => {
            const filePath = path.join(sourceFolderPath, file);
            const zip = new AdmZip(filePath);

            zip.extractAllTo(path.resolve(destinationFolderPath, 'curves'), true);

            console.log(`已成功解压缩文件：${filePath}`);
        });
        console.log('文件复制完成');
    }
}

module.exports = {
    selectFolder,
    setDialogWindow1
}
;

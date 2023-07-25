const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const configs = require("../../shared/config");

const ProgressBar = require('electron-progressbar');
let project = {}
if (!process.env.Project_Entrance) {
    project = configs.projects[configs.project]
} else if (configs.projects.hasOwnProperty(process.env.Project_Entrance)) {
    project = configs.projects[process.env.Project_Entrance]
} else {
    project = {}
}


let mainWindow


function createcontrollWindow(screenWidth) {
    // Create the browser windows.
    mainWindow = new BrowserWindow({
        icon: path.join(app.getAppPath(), 'resources/icon.png'),
        width: 300,
        height: 1280,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })
    const parentMenuTemplate = Menu.buildFromTemplate([
        {
            label: "设备管理",
            click: () =>mainWindow.loadFile(path.resolve(__dirname, './hellodevice.html')),
        },
        {
            type: 'separator'
        },
        {
            label: "用户管理",
            click: () =>     mainWindow.loadFile(path.resolve(__dirname, './hellouser.html')),
        },
    ])
    mainWindow.setMenu(parentMenuTemplate)
    mainWindow.loadFile(path.resolve(__dirname, './hellodevice.html'));
    mainWindow.setTitle('                                                          用户及设备管理');
}

module.exports = createcontrollWindow;



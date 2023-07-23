// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog, Menu, screen} = require('electron')
// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();
const path = require('path')
// const {loadEnv} = require('vite');
//
// const localEnv = loadEnv(process.env.Project_Entrance, './', '')
const killProcessesByName = require("./backend/manager");
const configs = require("./shared/config");
const {fork, spawn} = require('child_process')
const httpServer = fork('./http/http-server.js')
// import configs from "./shared/config";
let project = {}
if (!process.env.Project_Entrance) {
    project = configs.projects[configs.project]
} else if (configs.projects.hasOwnProperty(process.env.Project_Entrance)) {
    project = configs.projects[process.env.Project_Entrance]
} else {
    project = {}
}


let screenWidth = 800;

const express = require('express');
const expressWs = require('express-ws');
const WebSocket = require('ws');
const {createProxyMiddleware} = require('http-proxy-middleware');


function createServer() {
    const app = express();
    // expressWs(app)

    const wss = new WebSocket.Server({noServer: true});
    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });
        ws.send('something');
    });
    app.on('upgrade', function upgrade(request, socket, head) {
        apiProxy(request, socket, head, function done(err) {
            if (err) {
                console.log(err);
                socket.write('HTTP/1.1 500 Internal Server Error\r\n\r\n');
                socket.destroy();
                return;
            }
            wss.handleUpgrade(request, socket, head, function done(ws) {
                wss.emit('connection', ws, request);
            });
        });
    });

    // 静态资源服务器
    app.use(express.static(path.resolve(__dirname, 'web')));

    // 处理所有路由请求
    app.use((req, res, next) => {
        const {url} = req;
        // 如果请求的URL不是以"/api"和"/websocket"开头，则进行转发
        if (!url.startsWith('/api') && !url.startsWith('/websocket') && !url.startsWith('/js') && !url.startsWith('/css')) {
            // 在这里执行转发操作，例如将请求发到另一个服务器
            // 这里只是一个示例，你需要根据实际情进行修改
            res.sendFile(path.resolve(__dirname, 'web', 'index.html'));
        } else {
            next()
        }
    });

    // 设置代理转发
    app.use('/api', createProxyMiddleware({
        target: 'http://127.0.0.1:9001/v2',
        changeOrigin: true,
        pathRewrite: {"^/api": ''}
    }));

    // 设置代理转发
    app.use(createProxyMiddleware('/websocket', {
        target: 'ws://127.0.0.1:9001/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {"^/websocket": ''}
    }));
    return app;
}

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        icon: path.join(__dirname, 'resources/icon.png'),
        width: 600,
        height: 1280,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    mainWindow.setPosition(screenWidth.size.width / 2 - mainWindow.getBounds().width, mainWindow.getBounds().y)
    const childWindow = new BrowserWindow({
        width: 600,
        height: 1280,
        parent: mainWindow,
        modal: false,
        show: false
    });

    // 监听窗口移动事件
    mainWindow.on('move', () => {
        if (childWindow.isDestroyed()) {
            return
        }
        childWindow.setPosition(mainWindow.getBounds().width + mainWindow.getBounds().x - 15, mainWindow.getBounds().y)
        childWindow.setSize(mainWindow.getBounds().width, mainWindow.getBounds().height, true)
        // console.log('窗口移动了');
    });

    childWindow.setPosition(mainWindow.getBounds().width + mainWindow.getBounds().x - 15, mainWindow.getBounds().y)
    // app.setName("Hello Vue")
    // 模式 3：主进程到渲染器进程
    const menu = Menu.buildFromTemplate([
        {
            label: app.name,
            submenu: [
                {
                    click: () => mainWindow.webContents.send('update-counter', 1),
                    label: 'Increment',
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: 'Decrement',
                }
            ]
        }
    ])
    Menu.setApplicationMenu(menu)

    if (project.name === 'vue_app') {
        // // and load the index.html of the app.
        // mainWindow.loadFile('./app/vue-app/dist/index.html')
        mainWindow.loadFile(project.connect);

    } else if (project.name === 'remote_odoo') {
        mainWindow.loadURL(project.connect);

    } else if (project.name === 'vue_app_cap') {
        mainWindow.loadFile(project.connect);

    } else if (project.name === 'pure') {
        // 创建一个新的子窗口

        // 加载第个页面
        childWindow.loadURL(project.connectChild);
        mainWindow.loadURL(project.connect);
        mainWindow.setTitle('本地设备');
        childWindow.setTitle('在线设备');
        // childWindow.webContents.openDevTools()
        // console.log(mainWindow.webContents)
    } else {
        mainWindow.loadURL('https://cn.bing.com/');
    }
    mainWindow.setFullScreen(project.setFullScreen);
    // Open the DevTools.
    if (project.openDevTools) {
        mainWindow.webContents.openDevTools()
    }
    // 当页面加载完成后，执行刷新操作
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.setTitle('本地设备');
        mainWindow.webContents.reload();
        mainWindow.webContents.removeAllListeners('did-finish-load');
        childWindow.show();
        childWindow.webContents.reload();
    });

    // 当页面加载完成后，执行刷新操作
    childWindow.webContents.on('did-finish-load', () => {
        childWindow.setTitle('在线设备');
    });
    // 当页面加载完成后，执行刷新操作
    mainWindow.webContents.on('did-fail-load', () => {
        mainWindow.webContents.reload();
    });
    // 当页面加载完成后，执行刷新操作
    childWindow.webContents.on('did-fail-load', () => {
        childWindow.loadURL("http://127.0.0.1:30003/404");
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

function handleSetTitle(event, title) {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    // console.log(win,title)
    win.setTitle(title)
}

async function handleFileOpen() {
    const {canceled, filePaths} = await dialog.showOpenDialog()
    if (canceled) {

    } else {
        return filePaths[0]
    }
}

let childProcess
app.on('ready', function () {
    // 启动三方程序
    //当前应用的目录
    const appPath = app.isPackaged ? path.dirname(app.getPath('exe')) : app.getAppPath();
    process.chdir(path.resolve(appPath, 'backend'));
    childProcess = spawn(path.resolve(__dirname, 'backend', 'screwdriverapi.exe'));
    // 获取主显示器的屏幕大小
    screenWidth = screen.getPrimaryDisplay();


    const server = createServer();
    server.listen(30003, () => {
        // createWebSocketServer(server);
        console.log('hello electron!')
    });
    // 模式 1：渲染器进程到主进程（单向）
    ipcMain.on('set-title', handleSetTitle)
    // 模式 2：渲染器进程到主进程（双向）
    ipcMain.handle('dialog:openFile', handleFileOpen)
    // 模式 3：主进程到渲染器进程
    ipcMain.on('counter-value', (_event, value) => {
        console.log(value) // will print value to Node console
    })
    createWindow()
    app.on('before-quit', function () {
        killProcessesByName('screwdriverapi.exe')
    })

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

// app.whenReady().then(() => {
//
// })

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {

    httpServer.kill();
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

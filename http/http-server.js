const express = require('express');
const WebSocket = require('ws');
const path = require('path')
const {app} = require('electron')
const {settingHandleHttp,settingHandleWs} = require('./config/setting')
const config = require('../shared/config')


function createServer() {
    const appSever = express();
    // expressWs(app)

    // const wss = new WebSocket.Server({noServer: true});
    // wss.on('connection', function connection(ws) {
    //     ws.on('message', function incoming(message) {
    //         console.log('received: %s', message);
    //     });
    //     ws.send('something');
    // });
    // appSever.on('upgrade', function upgrade(request, socket, head) {
    //     apiProxy(request, socket, head, function done(err) {
    //         if (err) {
    //             console.log(err);
    //             socket.write('HTTP/1.1 500 Internal Server Error\r\n\r\n');
    //             socket.destroy();
    //             return;
    //         }
    //         wss.handleUpgrade(request, socket, head, function done(ws) {
    //             wss.emit('connection', ws, request);
    //         });
    //     });
    // });
    // 静态资源服务器
    appSever.use(express.static(path.resolve( app.getAppPath(), 'resources/web')));

    // 处理所有路由请求
    appSever.use((req, res, next) => {
        const {url} = req;
        // 如果请求的URL不是以"/api"和"/websocket"开头，则进行转发
        if (!url.startsWith('/api') && !url.startsWith('/websocket') && !url.startsWith('/js') && !url.startsWith('/css')) {
            // 在这里执行转发操作，例如将请求发到另一个服务器
            // 这里只是一个示例，你需要根据实际情进行修改
            res.sendFile(path.resolve( app.getAppPath(), 'resources/web', 'index.html'));
        } else {
            next()
        }
    });
    appSever.use(express.json());
    // // 设置代理转发
    // appSever.use('/api', createProxyMiddleware({
    //     target: 'http://127.0.0.1:9001/v2',
    //     changeOrigin: true,
    //     pathRewrite: {"^/api": ''}
    // }));

    // // 设置代理转发
    // appSever.use(createProxyMiddleware('/websocket', {
    //     target: 'ws://127.0.0.1:9001/',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {"^/websocket": ''}
    // }));
    return appSever;
}

const server = createServer();
settingHandleHttp(server)

server.use(function (req, res) {
    res.send({
        status: 0,
        description: "",
        data: []
    });
});


const httpServer=server.listen(config.configs.httpPort, () => {
    // createWebSocketServer(server);
    console.log('hello electron!')
});
// 创建WebSocket服务器
const wss = new WebSocket.Server({server:httpServer});
settingHandleWs(wss)
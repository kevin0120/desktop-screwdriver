
const express = require('express');
const expressWs = require('express-ws');
const WebSocket = require('ws');
const path = require('path')
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
const server = createServer();
server.listen(30003, () => {
    // createWebSocketServer(server);
    console.log('hello electron!')
});
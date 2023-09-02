const dgram = require('dgram');

function broadcastAndWaitResponses(broadcastPort, message, callback) {
    const server = dgram.createSocket('udp4');
    let responsePort;
    const responses = [];
    const devices = [];
    // 广播数据到局域网的指定端口，并记录随机生成的端口号
    server.bind(() => {
        server.setBroadcast(true);
        server.send(message, broadcastPort, '255.255.255.255', (err) => {
            if (err) {
                console.error('boardcast send fail:', err);
                server.close();
            } else {
                console.log('boardcast send success');
            }
        });
    });

    // 监听指定端口以接收对方回复消息
    server.on('message', (response, remote) => {
        responses.push({
            message: JSON.parse(response.toString()),
            address: remote.address,
            port: remote.port
        });
        devices.push( JSON.parse(response.toString()))
    });

    // 随机生成一个端口并记录下来
    server.on('listening', () => {
        responsePort = server.address().port;
        console.log(`UDP listening ${responsePort} port`);
    });

    // // 在随机生成的端口上监听回复消息
    // server.bind(responsePort);

    // 等待2秒钟后返回所有的回复消息
    setTimeout(() => {
        server.close();
        callback(responses,devices);
    }, 2000);
}

// 示例使用
const broadcastPort = 5556;
const message = 'leetx2023';




function broadcastUdp(callback){
    broadcastAndWaitResponses(broadcastPort, message, (responses,devices) => {
        console.log('get back information:', responses);
        callback(devices)
    });
}


module.exports ={
    broadcastUdp,
}
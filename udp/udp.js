const dgram = require('dgram');
const os = require('os');

// 获取局域网的广播地址
function getBroadcastAddress() {
    const interfaces = os.networkInterfaces();
    let ips =[]
    for (const interfaceName in interfaces) {
        const networkInterface = interfaces[interfaceName];
        for (const info of networkInterface) {
            if (info.family === 'IPv4' && !info.internal && info.netmask==='255.255.255.0') {
                // 判断是否为私有地址
                if (
                    info.address.startsWith('10.') ||
                    info.address.startsWith('172.') ||
                    info.address.startsWith('192.168.')
                ) {
                    const parts = info.address.split('.');
                    parts[3] = '255'; // 设置广播地址最后一位为255
                    // return parts.join('.');
                    ips.push(parts.join('.'))
                }
            }
        }
    }

    return ips; // 没有找到合适的广播地址
}




function broadcastAndWaitResponses(broadcastPort, message, callback) {
    const server = dgram.createSocket('udp4');
    let responsePort;
    // 广播地址和端口号
    const broadcastAddress = getBroadcastAddress();
    const responses = [];
    const devices = [];
    // 广播数据到局域网的指定端口，并记录随机生成的端口号
    server.bind(() => {
        server.setBroadcast(true);
        broadcastAddress.forEach((ip)=>{
            server.send(message, broadcastPort, ip, (err) => {
                if (err) {
                    console.error('boardcast send fail:', err);
                    server.close();
                } else {
                    console.log('boardcast send success');
                }
            });
        })

    });
    // 监听指定端口以接收对方回复消息
    server.on('message', (response, remote) => {
        responses.push({
            message: JSON.parse(response.toString()),
            address: remote.address,
            port: remote.port
        });
        let device =JSON.parse(response.toString())
        device.ipAddress=remote.address
        devices.push(device)
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
    }, 1000);
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
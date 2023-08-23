const myPromise = new Promise((resolve, reject) => {
    console.log("!!!!!!!!!!!!!!!!!!")
    setTimeout(() => {
        const randomNumber = Math.random();
        console.log("@@@@@@@@@@@@@@@@@@@@@")
        if (randomNumber < 0.5) {
            console.log("#######################")
            resolve('Success');
        } else {
            console.log("$$$$$$$$$$$$$$$$$")
            reject('Error');
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log('Promise resolved:', result);
    })
    .catch((error) => {
        console.log('Promise rejected:', error);
    });


const { Int32Array, Buffer} = require('buffer');

// 二进制数据
const binaryData = Buffer.from([0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x02]);

// Int32Array 解析
const int32Array = Int32Array.from(binaryData.buffer, binaryData.byteOffset, 2);
// const int32Array = binaryData.readInt32LE(0)
// const int32Array2 = binaryData.readInt32BE(0)
console.log(int32Array);  // 输出 Int32Array [ 1, 2 ]

console.log("%%%%%%%%%%%%%%%%%%%%%")
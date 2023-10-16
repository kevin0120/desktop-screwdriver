// const myPromise = new Promise((resolve, reject) => {
//     console.log("!!!!!!!!!!!!!!!!!!")
//     setTimeout(() => {
//         const randomNumber = Math.random();
//         console.log("@@@@@@@@@@@@@@@@@@@@@")
//         if (randomNumber < 0.5) {
//             console.log("#######################")
//             resolve('Success');
//         } else {
//             console.log("$$$$$$$$$$$$$$$$$")
//             reject('Error');
//         }
//     }, 1000);
// });
//
// myPromise
//     .then((result) => {
//         console.log('Promise resolved:', result);
//     })
//     .catch((error) => {
//         console.log('Promise rejected:', error);
//     });
//
//
// const { Int32Array, Buffer} = require('buffer');
//
// // 二进制数据
// const binaryData = Buffer.from([0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x02]);
//
// // Int32Array 解析
// const int32Array = Int32Array.from(binaryData.buffer, binaryData.byteOffset, 2);
// // const int32Array = binaryData.readInt32LE(0)
// // const int32Array2 = binaryData.readInt32BE(0)
// console.log(int32Array);  // 输出 Int32Array [ 1, 2 ]

console.log("%%%%%%%%%%%%%%%%%%%%%")





const a ={Smith:1,dd:"2"}
// 定义 JSON 对象
const data = [
    { firstName: 'Bob', lastName: JSON.stringify(a), age: 42 },
    { firstName: 'Alice', lastName: JSON.stringify(a), age: 25 },
    { firstName: 'John', lastName: JSON.stringify(a), age: 30 }
];
const fs = require('fs');
const Papa = require('papaparse');
// 将 JSON 对象转换为 CSV 数据
const csv = Papa.unparse(data, {
    quotes: true  // 保持结构体字符串形式
});

// 将 CSV 数据保存到文件中
fs.writeFileSync('data.csv', csv);
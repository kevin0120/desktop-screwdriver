const fs = require("fs");
const path = require('path');
const {getHttpClient} = require('../config/setting')
const {getWorkDirectory} = require('../../shared/data/baseConfig');
const {deleteLocalResults} = require('../../http/config/setting');
async function resultsUploadApi() {
    try {
        const result = await getHttpClient()({
            url: 'pdata/result/his',
            method: "post",
            data: {
                numcurve: 100
            },
        })
        if (result.status === 0 && result.data.length > 0) {
            await deleteLocalResults()
            result.data.forEach((r) => {
                    r.result = JSON.stringify(r.result)
                }
            )
            // 将数据转换为 CSV 格式
            const blob = new Blob([convertToCSV(result.data)], {type: 'text/csv;charset=utf-8;'});

            const writableStream = fs.createWriteStream(path.resolve(getWorkDirectory(), 'data', 'result.csv'));
            blob.arrayBuffer().then(buffer => {
                writableStream.write(Buffer.from(buffer));
                writableStream.end();
                console.log('File saved successfully!');
            });

            let req = []
            let tid = []
            result.data.forEach((r) => {
                    if (r.pdid < 1) {
                        return
                    }
                    req.push(getHttpClient()({
                        url: 'pdata/his/curve',
                        method: "get",
                        params: {
                            'pdid': r.pdid,
                        },
                        responseType: "arraybuffer"
                    }));
                    tid.push(r.tid);
                }
            );


            Promise.all(req).then(responses => {
                // 处理所有请求完成后的结果
                responses.forEach(
                    (data, index) => {
                        if (!data || data.byteLength < 5) return;
                        const buffer = Buffer.from(data);
                        let intArray = buffer.readInt32LE(0);
                        let len = intArray;
                        if (data.byteLength !== 4 + len * 16) {
                            return;
                        }
                        if (len < 2) {
                            return;
                        }
                        let curvedata=[]
                        for (let i = 0; i < len*4; i++) {
                            // 循环体代码
                            curvedata.push(buffer.readFloatLE(4+i*4))
                        }

                        // 将数据转换为 CSV 格式
                        const blob1 = new Blob([curveconvertToCSV(curvedata, len)], {type: 'text/csv;charset=utf-8;'});

                        const writableStream = fs.createWriteStream(path.resolve(getWorkDirectory(), 'data/curves', `${tid[index]}.csv`));
                        blob1.arrayBuffer().then(buffer => {
                            writableStream.write(Buffer.from(buffer));
                            writableStream.end();
                            console.log('File saved successfully!');
                        });

                    }
                );
            })

            // saveCurrentController('config')
        }
        return {status: result.status}
    } catch (e) {
        return {status: 404}
    }
}


function convertToCSV(arr) {
    const separator = ",";
    const keys = Object.keys(arr[0]);
    const values = Object.values(arr[0]).join(',') + '\n';
    const csvHeader = keys.join(separator);
    const csvRows = arr.map(row => {
        return keys.map(key => {
            if (key==="code_desc"||key==="result"){
                return `"${row[key]}"`;
            }
            return row[key];
        }).join(separator);
    });
    return csvHeader + "\n" + csvRows.join("\n");
}

function curveconvertToCSV(curvedata, len) {
    const separator = ",";
    const csvHeader = "times,positions,sensor_vals,speeds" + "\n";
    const times = curvedata.slice(len * 2, len * 3);
    const positions = curvedata.slice(len, len * 2);
    const sensor_vals = curvedata.slice(0, len);
    const speeds = curvedata.slice(len * 3, len * 4);
    let csvrows = ""
    for (let i = 0; i < len; i++) {
        csvrows += ([times[i], positions[i], sensor_vals[i], speeds[i]].join(separator) + "\n")

    }
    return csvHeader + csvrows;
}


module.exports = {
    resultsUploadApi
}
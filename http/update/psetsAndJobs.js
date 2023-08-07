const {fetchCurrentController} = require("../../shared/data/baseConfig");
const {getHttpClient} = require('../config/setting')


async function psetsUpdateApi() {
    try {
        const result = await getHttpClient()({
            url: 'pf/cur/lst',
            method: "get",
        })
        let data = {
            data: [],
            status: 0
        }
        let remotePset = result.data.map((item) => {
            return item.pset
        })
        for (let pset in fetchCurrentController().profiles.psets) {
            if (fetchCurrentController().profiles.psets.hasOwnProperty(pset)) {
                let index = remotePset.indexOf(parseInt(pset))
                if (index !== -1) {
                    remotePset.splice(index, 1);
                    // 只需要保存pset
                } else {
                    //需要 先新建再保存pset
                    const result1 = await getHttpClient()({
                        url: 'pf/add',
                        method: "post",
                        data: fetchCurrentController().profiles.psets[pset].details
                    })
                    if (result1.status) {
                        data.status = result1.status
                        data.data.push(pset)
                    }
                }
                const result2 = await getHttpClient()({
                    url: 'pf/mod',
                    method: "post",
                    data: fetchCurrentController().profiles.psets[pset].details
                })
                if (result2.status) {
                    data.status = result2.status
                    data.data.push(pset)
                }
            }
        }
        for (const item of remotePset) {
            fetchCurrentController().profiles.psets[item.pset] = item
            const result3 = await getHttpClient()({
                url: `pf/del?pset=${item}`,
                method: "post",
            })
            if (result3.status) {
                status = result.status
                data.data.push(item)
            }
        }
        return data
    } catch (e) {
        // console.log(e.err)
        return {
            status: 404,
            data: []
        }
    }
}

module.exports = {
    psetsUpdateApi
}
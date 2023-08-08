const {fetchCurrentController} = require("../../shared/data/baseConfig");
const {getHttpClient} = require('../config/setting')

async function psetsSyncApi() {
    try {
        const result = await getHttpClient()({
            url: 'pf/cur/lst',
            method: "get",
        })
        let status = 0
        fetchCurrentController().profiles.psets = {}
        for (const item of result.data) {
            fetchCurrentController().profiles.psets[item.pset] = item
            const result1 = await getHttpClient()({
                url: `pf/cur/pset?id=${item.pset}`,
                method: "get",
            })
            if (result1.status) {
                status = result.status
                continue
            }
            fetchCurrentController().profiles.psets[item.pset].details = result1.data
        }
        return status
    } catch (e) {
        return 404
    }
}

async function jobsSyncApi() {
    try {
        return 0
    } catch (e) {
        return 404
    }
}

module.exports = {
    psetsSyncApi,
    jobsSyncApi
}
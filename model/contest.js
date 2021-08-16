const axios = require('axios')

class Contest {
    constructor() {
        this.axios = axios.create({ baseURL: 'https://clist.by:443', headers: { Authorization: process.env.CLIST_API_KEY } })
    }

    async getContest(host, offset) {
        const { data: { objects: data } } = await this.axios.get(
            '/api/v2/contest/',
            {
                params: {
                    limit: 1,
                    host,
                    offset,
                    order_by: '-id',
                },
            },
        )

        return data
    }
}

module.exports = new Contest()

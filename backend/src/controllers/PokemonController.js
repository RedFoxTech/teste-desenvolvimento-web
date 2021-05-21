const api = require('../config/db')
const axios = require('axios')

module.exports =  {

    async get(req, res) {
        //console.log(api)
        //const data
        api.then(d => {

            res.json(JSON.parse(d).table)
        })
        
    }
}
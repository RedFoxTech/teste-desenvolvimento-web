const http = require('http')
const url = require('url')
const fs = require('fs')

const data = fs.readFileSync('data.json')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName === '/api'){
    res.end(data)
    }else {
        res.end('<h1>Initalpage</h1>')
    }
})

server.listen(3000, (err) => {
    console.log("Rodou")
})
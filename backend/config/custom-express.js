const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require("cors");

module.exports = () => {
    const app = express()

    app.use(express.json());
    app.use(cors());

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)
    return app 
}

   
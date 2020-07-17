const express = require("express");
const consign = require("consign");

const bodyParser = require("body-parser");



module.exports = () =>{
    const app = express();

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    consign().include('Controller').into(app);

    return app;
}
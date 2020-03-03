/*const http = require('http');

const servidor = http.createServer(function (req, resp){
    resp.end(__dirname + "/src/app/index.html");

});
servidor.listen(3000);


var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    fs.readFile(__dirname + "/src/app/index.html", function(err, data){
        response.end(data);
    });
    
});

server.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});


const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/app/index.html");
});
*/
const express = require('express');
const app = express();
app.use(express.static('public'))

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
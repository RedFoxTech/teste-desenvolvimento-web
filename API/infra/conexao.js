const mySql = require('mysql');

const conexao = mySql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'teste-api'
});

module.exports = conexao;
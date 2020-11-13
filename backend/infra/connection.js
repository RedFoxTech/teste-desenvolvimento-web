const mysql = require('mysql2')

//PARA SE CONECTAR AO SEU BANCO, É NECESSARIO MUDAR OS DADOS DE ACESSO COM PORTA E SENHA DO SEU
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Christian222',
    database: 'pokedexfoch'
});

module.exports = connection;
const mysql = require('mysql');
//Criando a variavel de conexão
function conexao(){
  const connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'',
    database:'pokemon'
  })
  //Verificando se a conexão funcionou
  
  connection.connect(function(erro){
    if(erro) return console.error('Não funcionou!',erro)
    console.log('Conectado!')
  })  
  return connection;
}

module.exports = {
  conexao
}


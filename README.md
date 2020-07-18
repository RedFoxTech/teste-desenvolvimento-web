<h1> Pokedex </h1>

<h2> Kennedy Ferreira da Silva </h2>

<p> <a href="https://pokedex-kennedy.herokuapp.com/">  <strong> Aplicação </strong> </a> </p>
<p> <a href="https://pokedex-backend-k.herokuapp.com/">  <strong> Backend </strong> </a> </p>

<h3> Tecnologias usadas </h3>
<h4> Frontend </h4>
<p> <label>  </label> React </p>
<p> <label>  </label> Redux </p>
<p> <label>  </label> Bootstrap </p>
<p> <label>  </label> Axios </p> 
<p> <label>  </label> StyledComponents </p> 


<h4> Backend </h4>
<p> <label>  </label> Node </p>
<p> <label> </label> JWT </p>
<p> <label>  </label> Express </p>
<p> <label>  </label> MYSql </p>
<p> <label>  </label> Sequelize </p>

<p> A aplicação contém um admin que se encontra no caminho /admin <strong> úsuario: admin@admin.com </strong> e <strong> senha: admin </strong> </p>
<p> ps : não foi trabalhado o layout do admin... ainda :) </p> 

<p> As rotas da api necessitam de um token JWT gerado a partir do login do usuario com uma validade de apenas 1 dia, para fazer login utilize a rota "/login" com o email e senha de admin e terá como retorno o token </p> 

<p> A opção de excluir não exclui realmente os pokemons por questões de segurança, apenas muda o status de ativo para deletado sendo assim poderiamos ter futuramente um historico de alterações em um pokemon. No cenário ideal teriamos uma segunda tabela apenas salvando os dados de quem alterou (como ip, nome, etc..) </p> 

<p> Foi cogitada a ideia de utilizar o MongoDB, porém a ideia de fazer relacionamentos em um NoSQL mesmo sendo possivél quebra a necessidade de usar um NoSQL então preferi utilizar um banco de dados relacional, nesse caso o MySQL. </p>

<p> Transformei o .xlsx em um json e a partir dele eu fiz uma migração, transformando em 3 tabelas diferentes além de ter uma tabela reserva com todos os dados do json unificados.  </p> 
<ul> 
  <li> 1- Tabela de pokemons </li>
<ul>
  <p> Essa tabela contem todos os dados dos pokemons, como seu nome, atk, def, stam, stat_total e cp1 além do campo status e createdAt e updatedAt </p>
  <p> Como chaves estrangeiras temos o campo type_1, type_2, weather_1, weather_2, esses campos armazenam apenas os ID de suas tabelas respectivas </p> 
 <ul> 
   <li> 2- Tabela de Types </li> 
   <ul>
<p> Essa tabela contem apenas o nome de cada tipo, seu id, createdAt e updatedAt </p> 
 <ul> 
   <li> 3- Tabela de Weathers </li> 
   <ul>
<p> Essa tabela contem apenas o nome de cada tipo, seu id, createdAt e updatedAt </p> 
<p> Para fazer deploy preferi utilizar o heroku pois no momento não estou com nenhum servidor VPS (Como os da Digital Ocean onde estou acostumado a trabalhar  via ssh )  </p>
     
<p> O admin ainda está meio cru e tem o que ser melhorado além de a aplicação necessitar que se passe mais das funcionalidades do front pra dentro do redux, e algumas partes da aplicação como o filtro e a busca poderem facilmente entrar no redux e serem componentizados  </p>

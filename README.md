# Índice
<ul>
  <li>Introdução</li>
  <li>Back-End</li>
  <li>Front-End</li>
  <li>Conclusão</li>
</ul>

# Introdução
  <h4>
    O problema apresentado foi uma encontrar uma maneira de otimizar a busca e filtragem de informações em um arquivo XLSX, utilizando uma forma de aramzenagem de dados e uma maneira de exibir as informações claramente, bem como as funcionalidades para buscar, listar, filtrar e paginar as informações.
  </h4>
  
<p>Para tal, foram utilizados Bulma, ReactJS e NodeJS</p>
  
 # Back-End
 <h5>O Back-End é o local onde se localiza o que fica por traz de uma aplicação, neste desafio, foi responsável por armazenar as informações, organizá-las e devolve-las para as solicitações do Front-End<h5>

## Esquema
  <ul>
    <li>Banco de Dados</li>
    <li>Migração de Informações</li>
    <li>Organização das Informações</li>
    <li>Retorno de Informações</li>
  <ul>

### Banco de Dados
<h4>O banco escolhido foi o SQLite, com sua aplicação por meio da biblioteca KnexJS</h4>
<h5>As informações sobre os types, weathers, generations, families e evolution foram organizadas em tabelas próprias, para otimização de dados, e relacionadas e/ou associadas com os pokemons, que também possuem tabela própria</h5>  

> Confira o MER dentro da pasta server, para maiores informações

### Migração de Dados
  <h4>A migração de dados foi feita de forma automática, utilizando a biblioteca Node-XLSX, buscando-as no arquivo XLSX e inserindo-as ao banco, sendo facilmente possível adicionar novos pokemons, apenas inserindo as informações no arquivo XLSX, e seguindo os passos abaixo:</h4>
  
  1. Exclua o arquivo database.sqlite 
     Ele se localiza na pasta database, dentro da pasta server, dentro server

  2. Rode o comando: **npm run knex:migrate**
     Ou, se preferir, utilize o yarn: **yarn knex:migrate**
  
  3. Agora, insira as informações com o comando: **npm run knex:seed**
     Ou com o yarn: **yarn knex:seed**
     
  > Lembrando que os comandos com yarn apenas funcionam se o mesmo estiver instalado
 

## Organização das Informações
 
 <h4>Depois de salvas no banco, as informações estão prontas para serem utilizadas, e, variando com a requisição do Front-End, elas são listadas e classificadas, podendo ser por type, weather, nome do pokemon, ou com nenhum filtro, selecionando todos os pokemons</h4>
 
 
 
 <h4></h4>
 <li>/<li>


# Índice
<ul>
  <li>Introdução</li>
  <li>Execução do Projeto</li>
  <li>Back-End</li>
  <li>Front-End</li>
  <li>Conclusão</li>
</ul>

# Introdução
  <h4>
    O problema apresentado foi uma encontrar uma maneira de otimizar a busca e filtragem de informações em um arquivo XLSX, utilizando uma forma de aramzenagem de dados e uma maneira de exibir as informações claramente, bem como as funcionalidades para buscar, listar, filtrar e paginar as informações.
  </h4>
  
<p>Para tal, foram utilizados, principalmente, os frameworks Bulma, ReactJS e NodeJS</p>
  
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
 

### Organização das Informações
 
 <h4>Depois de salvas no banco, as informações estão prontas para serem utilizadas, e, variando com a requisição do Front-End, elas são listadas e classificadas, podendo ser por type, weather, nome do pokemon, ou com nenhum filtro, selecionando todos os pokemons</h4>
 
### Retorno de Informações
<h4>
  Por final, as informações são retornadas por meio do sistema de rotas, utilizando o formato JSON
  <br>
  Ao todo são utilizadas 6 rotas, sendo duas para pegar os todos os types/weathers, uma para todos os pokemons, e três para filtragem
</h4>

# Front-End
 
 <h4>O Front-End é o lado que chega ao usuário, o que é mostrado na tela. Neste projeto, o Front-End foi desenvolvido principalmente com ReactJS.</h4>
 
 ## Estruturação de Tópicos
<ul>
  <li>A Aplicação em Si</li>
  <li>Requerimento de Informações</li>
  <li>Recebimento de Informações</li>
  <li>O Layout</li>
  <li>Funcionalidades do Layout</li>
</ul>

### A Aplicação em Si
<h4>
  A Aplicação feita com a foco na linguagem TypeScript, uma varição do JavaScritp. Possui apenas uma página, em que é possível visualizar os pokemons, classificá-los, e filtra-los,bem como visualiza-los por 'páginas', seções que abrigam 50 pokemons por vez.
</h4>

### Requerimento de Informações

<h4>
  :diamonds: As informações são solicitadas ao servidor de acordo com a interação do usuário, tendo como padrão a listagem de todos os pokemons.
  <br>
  :diamonds: Selecionando algum type e apertando em buscar, é possível visualizar todos os pokemons que possuem o type secionado.
  <br>
  :diamonds: Selecionando algum weather e apertando em buscar, é possível visualizar todos os pokemons que possuem o weather selecionado.
  <br>
  :diamonds: Pesquisando na seção de 'Nome do Pokemon', apertando bem buscar, é possível ver todos os pokemons que começam com a cadeia de caracteres inserida.
</h4>
 
 <h4></h4>
 <li></li>


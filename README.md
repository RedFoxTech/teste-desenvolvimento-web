# Teste de Desenvolvimento Web

Teste para a vaga de desenvolvedor Web na RedFox Tech!

## Inicializando o projeto
Para iniciar a aplicação usar o comando:
#### `git clone -b kevinpagliuca https://github.com/KevinPagliuca/teste-desenvolvimento-web/`


Para iniciar o servidor, entre na pasta teste-desenvolvimento-web e use o comando:
#### `npm install && npm start`


Iniciar o frontend, entre na pasta teste-desenvolvimento-web/web e use o comando:
#### `npm install && npm start` 

## Banco de dados
O banco de dados em SQLite foi criado com o auxílio de um query builder chamado Knex - http://knexjs.org/

O arquivo Excel foi transformado em diversos arquivos JSONS contendo 50 Pokemons em cada um deles, para que conseguisse utilizar esses arquivos em JSON, para inserir os dados no banco de dados, e assim popular a tabela de Pokemons

## Backend
Desenvolvido utilizando o NodeJs.

## Frontend
O Frontend foi desenvolvido em React e Bootstrap.

### Api no front-end
Consumindo a API do backend e PokeAPI com o Axios.

Foi feita 2 serviços para consumir as API's, pois na página de cadastro de Pokemons, a listagem dos Tipos deles são acessadas através da API do PokeAPI - https://pokeapi.co/api/v2/type

## Funcionalidades
Login - Usuário padrão: email: admin@admin.com // senha: admin 
Registro - As senhas cadastradas no banco de dados são criptografadas pela biblioteca bcrypt no backend.

Listagem de todos os pokemons do banco de dados na página inicial com paginação, mostrando 20 pokemons por página.
Possibilidade de pesquisa em tempo real de pokemons cadastrados na página inicial, Pode-se pesquisar pelo Pokedex_Number, ou o próprio nome do Pokemon.

Se você estiver logado no sistema, será possível cadastrar novos Pokemons, basta acessar a página de cadastro de Pokemon. (/novoPokemon).

## Obervações
Esse foi um grande desafio para mim, apesar do tempo curto, tive alguns problemas relacionado a energia em meu bairro (2 dias) que acabou me fazendo perder muito tempo.
Tive muito problema para utilizar o Bootstrap e entender seu funcionamento quando estava codando o frontend, pois não costumo utilizar bootstrap.
Faltou algumas funcionalidades que gostaria de colocar no sistema, como o de editar um pokemon. (Está feito no backend).

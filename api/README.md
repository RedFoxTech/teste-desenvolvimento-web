# RedFox - Teste para desenvolvedor web

# Back-end 

Este é o back-end da aplicação, construida com cadastro de usuário e CRUD de pokemons
com direito a upload de imagem além de filtro de type, weather, e stat, seguindo boas práticas de programação
e abstraindo toda a lógica em camadas.

# Tópicos 

- [Tecologias](#techs)
- [Rotas da aplicação](#routes)
- [Rodando a aplicação](#execute)
- [API online](#online)

<a id="techs"></a>
## Tecnologias e bibliotecas utilizadas

- [NodeJS](https://nodejs.org/en/)
- [KnexJS](http://knexjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [Sharp](https://sharp.pixelplumbing.com/)

<a id="routes"></a>
## Rotas da aplicação

### Públicas

> As rotas públicas não necessitam da auteticação do usuário.

- ``/api/register`` 

| Data        | Resposta      | Ação 
|-------------|---------------|---------------------
| name        | name          | Rota para criação de um usuário, com as credencias corretas
| email       | email         |
| password    | id            |
|             | token         |


- ``/api/login`` 

| Data        | Resposta      | Ação 
|-------------|---------------|---------------------
| email       | email         | Fazer o login do usuário com email e senha corretos
| password    | id            |
|             | token         |

## Privadas

> As rotas privadas necessitam da autenticação do usuário, além de que todas as rotas privadas
> utilizam o id do usuário armazenado no token que deve vim nos headers da resuisição, no formato de "Bearer
>  token"


- ``/api/session/store`` 

| Data            | Resposta                          | Ação 
|-----------------|-----------------------------------|---------------------
| name            | Nenhuma reposta é enviada em json | Rota para adicionar um novo pokemon
| typeOne         |
| typeTwo         |
| imageName       |
| weatherOne      | 
| weatherTwo      | 
| generation      |
| evolutionStage  |      
| familyId        |
| atk             |
| def             |
| stat            |
| raidable        |
| hatchable       |
| evolved         |
| crossGender     |  
| lengendary      | 
| acquirable      |  
| spawns          |
| regional        |
| shiny           |
| nest            |
| newField        |
| notGettable     |  
| futureEvolve    |


- ``/api/session/pokemon/id``

| Data        | Resposta                  | Ação 
|-------------|---------------------------|---------------------
| Nenhuma     | todos os dados do pokemon | Rota para obter todos os dados de um pokemon em específico


- ``api/session/pokemons``
- ``api/session/pokemons?type={type}``
- ``api/session/pokemons?weather={weather}``
- ``api/session/pokemons?min_stat={min_stat}&max_stat={max_stat}``
- ``api/session/pokemons?above={above}``

| Data        | Resposta                       | Ação 
|-------------|--------------------------------|---------------------
| Nenhuma     | todos os pokemons e seus dados | Rota para obter todos os pokemons e seus dados, com filtro via query na url da api                           


- ``/api/session/update/id``

| Data                     | Resposta     | Ação 
|--------------------------|--------------|---------------------
| Dados a serem atualizaos | Nenhuma      | Rota para atualizar os dados de um pokemon, exceto sua imagem


- ``/api/session/updateimage/id``

| Data                     | Resposta     | Ação 
|--------------------------|--------------|---------------------
| Novo arquivo de imagem   | Nenhuma      | Rota para atualizar a imagem de um pokemon


- ``api/session/dropall``

| Data      | Resposta     |Ação 
|-----------|--------------|--------------
| Nenhuma   | Nenhuma      | Rota para deletar todos os pokemons do usuário

<a id="execute"></a>
## Executando a API

Para executar a api em sua máquina siga os passos abaixo.

- 1 Clone meu repositório em sua máquina 

```sh
git clone git@github.com:edmilson-dk/teste-desenvolvimento-web.git

# entre na pasta api

cd teste-desenvolvimento-web/api
```

- 2 Após o passo acima, instale as dependências necessárias, para isso é preciso que você tenha o [NodeJS](https://nodejs.org/en/) instalado em sua máquina.

```sh
npm install

# ou com yarn

yarn install
```

- 3 Feito a instalação de tudo é hora de configurar o banco de dados [PostgreSQL](https://www.postgresql.org/) 
em sua máquina, caso você não o tenha instalado, acesse o site do [PostgreSQL](https://www.postgresql.org/) e siga os passos de instalação em seu sistema operacional, quando instalar inicie o postgresql e entre na linha de comando dele ou em uma interface gráfica que você utilize, para podermos criar nossa database e nosso usuário para a api poder ser utilizada, no meu caso os comandos são os seguintes.

```sh
# Primeiro entro na linha de comandos do postresql e crio uma database.
❯ sudo -u postgres psql
[sudo] password for dk:         
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
Type "help" for help.

postgres$ CREATE DATABASE "web_teste";
postgres$ \q;

# Após isso saiu da linha de comando em si, e entro na database que acabei de criar, para poder criar 
# uma role que é um tipo de usuário no postgresql, nela passamos o username que no meu caso eu escolhi
# "web_teste_user" e passo algumas opções necessárias para a conexão além do meu password que botei como 
# "webteste123", após isso já podemos conectar nossa api ao banco de dados.

❯ sudo -i -u postgres psql web_teste
psql (12.6 (Ubuntu 12.6-0ubuntu0.20.04.1))
Type "help" for help.

web_teste$ CREATE ROLE web_teste_user CREATEDB LOGIN SUPERUSER PASSWORD 'webteste123';
postgres$ \q;
```

- 4 Após o processo acima, vamos adicionar nossas credências do banco em um arquivo de variaveis de ambiente, 
na pasta root do projeto que neste caso é a pasta ``api``, crie o arquivo .env e adicione a mesma marcação que esta presente no arquivo env.example que deixei disponivél no repositório, após fazer a marcação, adicione as credências, o seu .env deve ficar mais ou menos assim.

```sh
# o banco de dados que estamos utilizando, neste caso pg que significa postgres
DB_CLIENT=pg

# o mesmo nome da database que você criou
DATABASE=web_teste 

# suas credências da database
DB_USERNAME=web_teste_user
DB_PASSWORD=webteste123

# crie uma chave secreta, de preferência criptografada para ser única.
SECRET=abasjkdbkajdo3y4beqwdgas

# aqui você não mexe
MIGRATIONS=./src/drivers/database/postgres/knex/migrations
```

- 5 Agora é só criarmos nossas [Migrations](https://medium.com/@juniorb2s/migrations-o-porque-e-como-usar-12d98c6d9269) para isso apenas execute o comando abaixo.

```sh
npx knex migrate:latest
```

- 6 Por fim é só iniciar nossa api.

```sh
npm dev 

# ou com yarn

yarn dev
```

<a id="online"></a>
## Veja a aplicação funcionando

Caso você não queira executar os passos de instalação manualmente, para sua sorte fiz o deploy da aplicação, a url da API é esta ``aqui``.

Creator with 💙 by [Edmilson Jesus](https://www.linkedin.com/in/edmilson-jesus-4128711b5)

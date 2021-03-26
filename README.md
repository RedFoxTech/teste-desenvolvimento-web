<div align="center">
    <h1 align="center"> Desafio Pokémon </h1>
</div>

<br />

<p align="center">
  <a href="#computer-project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Entre em contato</a>
  </p>

## :computer: Projeto

<p align="justify">
Projeto desenvolvido para o teste de desenvolvimento web da RedFox, foi dado maior ênfase ao backend, visto que é minha atual área de atual no momento. </p>
<p align="justify">
Como o teste possibilita permite uma flexibilidade sobre a forma na qual o objetivo será atingido, optei por utilizar na modelagem do banco de dados MySQL os seguintes campos: name, pokedex_number, generation, evolution, familyID, type_1, type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, cp@39, cp@40, os demais campos não formão utilizados.  </p>
<p align="justify">
Os campos que possuíam maior relacionamento entre os pokémons eram type_1 e weather_1, por isso optei por criar na tabela de pokemons os campos type_1, type_2, weather_1 e weather_2 como chaves estrangerias das tabelas types e weather. Sendo que cada Pokémon possuía um types e weather e as tabelas types e weather possuem vários Pokémons. </p>

## :rocket: Construído com

Este projeto foi desenvolvido com as seguintes tecnologias:

<details>
  <summary>Backend</summary>

- Node.js
- Express
- JWT
- Bcrypt
- Express-async-errors
- MySQL
- Sequelize
- Dotenv
- Cors
- VS Code

</details>

<details>
  <summary>Frontend</summary>

- React
- Material-ui
- Axios
- VS Code

</details>


### Backend

Para executar o projeto, instale as dependências.
```bash
# navege até a pasta de backend
$ cd Backend
# instale as dependências de backend 
$ yarn ou npm install
```

```bash
# Criando tabela no banco de dados
# run migrations
$ yarn sequelize-cli db:migrate
# run api
$ yarn dev
```
<p align="justify">
A API possui controle de sessão através de um token JWT, na qual possibilita a divisão das rotas em rotas públicas e privadas. Sendo que as rotas publicação podem ser acessadas sem o token em quanto as privadas não podem ser acessadas sem um token valido.  </p>

<br />
> <h3> Rotas publicas </h3>

| Método | Rota | Função | Campos obrigatórios | Descrição |
|--|--|--|--|--|
| POST | /user | Cadastra um usuário | name, email e password | Antes de cadastrada um usuário é verificado se o email informado já foi cadastrado. |
| PUT | /user | Atualiza os dados do usuário | Se exister oldPassword os campos password e confirPassword passam a ser obrigatórios.  | Verifica se a senha confere com a salva no banco e se o email informado já não foi cadastrado. |
| POST | /session | Faz login na aplicação | email e password | Verifica se usuário existe e se a senha confere com a salva no banco. |

<br />
> <h3> Rotas privadas </h3>

| Método | Rota | Função | Campos obrigatórios | Descrição |
|--|--|--|--|--|
| POST| /types | Cadastra um type | name | Antes de cadastrada o type verifica se o type informado já foi cadastrado.  | 
| GET | /types/:id | Traz um único type | |Busca os dados de um type pelo seu id e todos os pokémons que possuem aquele type. |
| GET | /types | Traz todos os types cadastrados | |Verifica se existe algum type cadastrados e traz todos os types cadastrados. |
| PUT | /types/:id | Atualiza os dados de um type | | Busca os dados de um type pelo id e verifica se o type informado já foi cadastrado.  |
| POST| /weather | Cadastra um weather | name | Antes de cadastrada o weather verifica se o weather informado já foi cadastrado.  | 
| GET | /weather/:id | Traz um weather em especifico | |Busca os dados de um weather pelo seu id e todos os pokemons que possuem este weather. |
| GET | /weather | Traz todos os weather cadastrados | |Verifica se existe algum weather cadastrados e traz todos os weather cadastrados. |
| PUT | /weather/:id | Atualiza os dados de um weather | |Busca os dados de um weather pelo seu id e verifica se o weather informado já foi cadastrdo. |
| POST | /pokemon | Cadastra um pokémon | name, type_1, weather_1, atk, def, sta, cp39 e cp40 |Antes de cadastrada verifica se o pokémon informado já não foi cadastrado. |
| GET | /pokemon | Traz todos os pokémons cadastrados| |Busca todos os pokémons através do filtro de ativos ou inativo e ordena pelo name.|
| GET | /pokemon/:id | Traz todos os pokémons cadastrados| |Verifica se o pokémons existe e traz os dados deste Pokémon.|
| PUT | /pokemon/:id | Atualiza os dados de um pokémon| | Verifica se o pokémons existe e se já não existe outro Pokémon com o mesmo nome antes de atualizar os dados. |
| DELETE | /pokemon/:id | Altera o estado do Pokémon para ativo ou inativo| | Verifica se o Pokémon existe e altera o seu estado. |


### Frontend

Para executar o projeto, instale as dependências.
```bash
# navege até a pasta de backend
$ cd Fronted
# instale as dependências de fronted
$ yarn ou npm install
```

```bash
# run aplicação 
$ yarn start ou npm start
```
* O endereço base da API pode ser modificado no arquivo api.js que se encontra no diretório: src/services

<br />
> <h3> Rotas publicas  </h3>

| Rota |Função | Descrição |
|--|--|--|
| / | Rota inicial para realizar login. | Para realizar login é necessário e-mail e senha cadastrados previamente. Ao fazer login a API retorna um token que é usado para validação nas operações no sistema.|

Funções:
<blockquote><strong>handleLoginClick:</strong> Faz uma requisição à API para criar uma no seção.</blockquote>
<blockquote><strong>handleSignupClick:</strong> Redireciona o usuário para criar uma conta.</blockquote>
<blockquote><strong>handleClickOpen:</strong> Inicia um Dilog de feedback para o usuário.</blockquote>
<blockquote><strong>handleClose:</strong>  Fecha o Dilog de feedback.</blockquote>
 

| Rota |Função | Descrição |
|--|--|--|
| /register | Rota para realizar o cadastro no sistema. | Para criar uma conta é solicitado nome, e-mail e senha.|
 
Funções:
<blockquote><strong>handleRegisterClick:</strong> Faz uma requisição à API para criar um usuário.</blockquote>
<blockquote> <strong>handleBackClick: </strong> Redireciona o usuário de volta para o login.</blockquote>
<blockquote><strong>handleClickOpen:</strong> Inicia um Dilog de feedback para o usuário.</blockquote>
<blockquote> <strong>handleClose:</strong>  Fecha o Dilog de feedback.</blockquote>
<blockquote> <strong>handleToRedirect:</strong>  Redireciona o usuário após a conta ser criada.</blockquote>

<br />
> <h3> Rotas privadas </h3>

| Rota |Função | Descrição |
|--|--|--|
| /app | Rota com uma lista dos Pokémons. | Rota possui otão de navegação e botão para adicionar um Pokémon.|
 
Funções:
<blockquote><strong>handleGoToAddPokemon:</strong> Redireciona o usuário para cadastrar um Pokémon.</blockquote>
<blockquote> <strong>handleGoToUpdatePokemon: </strong> Redireciona o usuário para atualizar um Pokémon.</blockquote>
<blockquote><strong>handleToNextPage:</strong> Faz uma chamada à API para gerar uma nova página da lista de Pokémons.</blockquote>
<blockquote> <strong>handleToPrevPage:</strong> Faz uma requisição à API para retornar à página anterior da lista. </blockquote>

| Rota |Função | Descrição |
|--|--|--|
| /addpokemon | Rota para adicionar um Pokémon. | Adicionar um Pokémon. |
 
Funções:
<blockquote><strong>handleClickOpen:</strong> Inicia um Dilog de feedback para o usuário.</blockquote>
<blockquote> <strong>handleClose: </strong> Fecha o Dilog de feedback.</blockquote>
<blockquote><strong>handleToRedirect:</strong> Redireciona o usuário após criar um Pokémon</blockquote>
<blockquote> <strong>handleToAtk:</strong> Recebe o valor de ATK e soma no total. </blockquote>
<blockquote><strong>handleToDef:</strong> Recebe o valor de DEF e soma no total.</blockquote>
<blockquote> <strong>handleToSta: </strong> Recebe o valor de STA e soma no total.</blockquote>
<blockquote><strong>handleToGetTypes:</strong> Faz uma requisição à API para trazer os Types dos Pokémons.</blockquote>
<blockquote> <strong>handleToGetWeathers:</strong> Faz uma requisição à API para trazer os Weathers dos Pokémons. </blockquote>
<blockquote> <strong>handleToSavePokemon:</strong> Envia uma requisição à API para salvar um Pokémon. </blockquote>

| Rota |Função | Descrição |
|--|--|--|
| /updatepokemon | Rota para atualizar um Pokémon.  | Pode ser acessada basta clicar no Pokémon desejado na lista. |
 
Funções:
<blockquote><strong>handleClickOpen:</strong> Inicia um Dilog de feedback para o usuário.</blockquote>
<blockquote> <strong>handleClose: </strong> Fecha o Dilog de feedback.</blockquote>
<blockquote><strong>handleToRedirect:</strong> Redireciona o usuário após selecionar o Pokémon</blockquote>
<blockquote> <strong>handleToAtk:</strong> Recebe o valor de ATK e soma no total. </blockquote>
<blockquote><strong>handleToDef:</strong> Recebe o valor de DEF e soma no total.</blockquote>
<blockquote> <strong>handleToSta: </strong> Recebe o valor de STA e soma no total.</blockquote>
<blockquote><strong>handleToGetTypes:</strong> Faz uma requisição à API para trazer os Types dos Pokémons.</blockquote>
<blockquote> <strong>handleToGetWeathers:</strong> Faz uma requisição à API para trazer os Weathers dos Pokémons. </blockquote>
<blockquote> <strong>handleToSavePokemon:</strong> Envia uma requisição à API para atualizar o Pokémon. </blockquote>
<blockquote> <strong>handleToGetPokemon:</strong> Busca um Pokémon por id. </blockquote>

##: Entre em contato!

<a href="https://www.linkedin.com/in/spencer-otoni-desenvolvedor/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:sspencerotoni@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a>

---

Feito com: ☕ and ❤️ by por Spencer Otoni

<div align="center">
    <h1 align="center"> Desafio Pokémon </h1>
</div>

<br />

<p align="center">
  <a href="#computer-project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Entre em contato</a>
  </p>

## :computer: Projeto

Projeto desenvolvido para o teste de desenvolvimento web da RedFox, foi dado maior ênfase ao backend, visto que é minha atual área de atual no momento. 
Como o teste possibilita permite uma flexibilidade sobre a forma na qual o objetivo será atingido, optei por utilizar na modelagem do banco de dados MySQL os seguintes campos: name, pokedex_number, generation, evolution, familyID, type_1, type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, cp@39, cp@40, os demais campos não formão utilizados. 
Os campos que possuíam maior relacionamento entre os pokémons eram type_1 e weather_1, por isso optei por criar na tabela de pokemons os campos type_1, type_2, weather_1 e weather_2 como chaves estrangerias das tabelas types e weather. Sendo que cada Pokémon possuía um types e weather e as tabelas types e weather possuem vários Pokémons. 

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
- MaterializeCSS
- Axios
- VS Code

</details>


### Backend

A API possui controle de sessão através de um token JWT, na qual possibilita a divisão das rotas em rotas públicas e privadas. Sendo que as rotas publicação podem ser acessadas sem o token em quanto as privadas não podem ser acessadas sem um token valido.  

> Rotas publicas 

| Método | Rota | Função | Campos obrigatórios | Descrição |
|--|--|--|--|--|
| POST | /user | Cadastra um usuário | name, email e password | Antes de cadastrada um usuário é verificado se o email informado já foi cadastrado. |
| PUT | /user | Atualiza os dados do usuário | Se exister oldPassword os campos password e confirPassword passam a ser obrigatórios.  | Verifica se a senha confere com a salva no banco e se o email informado já não foi cadastrado. |
| POST | /session | Faz login na aplicação | email e password | Verifica se usuário existe e se a senha confere com a salva no banco. |
<br />
> Rotas privadas

| Método | Rota | Função | Campos obrigatórios | Descrição |
|--|--|--|--|--|
| POST| /types | Cadastra um type  | name | Antes de cadastrada o type verifica se o type informado já foi cadastrado.  | 
| GET | /types/:id | Traz um único type | |Busca os dados de um type pelo seu id e todos os pokémons que possuem aquele type |
| GET | /types | Traz todos os types cadastrados | |Verifica se existe algum type cadastrados e traz todos os types cadastrados. |
| PUT | /types/:id | Atualiza os dados de um type || Busca os dados de um type pelo id e verifica se o type informado já foi cadastrado.  |
| POST| /weather | Cadastra um weather | name | Antes de cadastrada o weather verifica se o weather informado já foi cadastrado.  | 
| GET | /weather/:id | Traz um weather em especifico | |Busca os dados de um weather pelo seu id e todos os pokemons que possuem este weather. |
| GET | /weather | Traz todos os weather cadastrados | |Verifica se existe algum weather cadastrados e traz todos os weather cadastrados. |
| PUT | /weather/:id | Atualiza os dados de um weather | Busca os dados de um weather pelo seu id e verifica se o weather informado já foi cadastrdo.  |

| POST | /pokemon | Cadastra um pokemon | Campos obrigatorios: name, type_1, weather_1, atk, def, sta, cp39 e cp40. Antes de cadastadar o pokemon verifica se o name informado já foi cadastrdo. |
| GET | /pokemon | Traz todos os pokemons cadastrados| Busca todos os pokemons levendo em consideração o criterio de ativos e inativo e ordena pelo name.|

### Frontend

##: Entre em contato!

<a href="https://www.linkedin.com/in/spencer-otoni-desenvolvedor/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:sspencerotoni@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a>

---

Feito com: ☕ and ❤️ by por Spencer Otoni

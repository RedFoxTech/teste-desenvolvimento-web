<div align="center">
    <h1 align="center"> Pokedex </h1>
</div>

<br />

<p align="center">
  <a href="#computer-project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Entre em contato</a>
  </p>

## :computer: Projeto

Este projeto foi desenvolvido para o teste de desenvolvimento web da RedFox, foi dada uma maior enfase ao backend, visto que  é minha atual área de atual no momento. 
Como o teste possibilita uma maior flexibilidade sobre a forma de se atingir o objetivo, optei por utilizar os campos: name, pokedex_number,generation,evolution,familyID,type_1,
type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, cp@39,
cp@40, os demais campos não formão utilizados. 


## :rocket: Construído com

Este projeto foi desenvolvido com as seguintes tecnologias:

<details>
  <summary>Backend</summary>

- Node.js
- Express
- JWT
- Bcrypt
- Express-async-errors
- MYSql
- Sequelize
- Dotenv
- Cors
- VS Code

</details>

<details>
  <summary>Frontend</summary>

- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Dropzone](https://github.com/react-dropzone/react-dropzone)
- [React Icons](https://react-icons.netlify.com/#/)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [VS Code](https://code.visualstudio.com/)

</details>


### Backend

A API possui controle de sessão através de um token JWT, na qual possibilita a divisão das rotas em rotas publicas e privadas. Sendo que as rotas publicação podem ser acessadas sem o token em quanto as privadas não pode ser acessadas sem o um token valido.  

> Rotas publicas 

| Método | Rota |  Função | Descrição |
|--|--|--|--|
| POST | /user | Cadastra um usuário | Campos obrigatorios: name, email e password. Antes de cadastadar usuário verifica se o email informado já foi cadastrdo. |
| PUT | /user | Atualiza os dados do usuário | Campos obrigatorios, se usuário informar oldPassword os campos password e confirPassword passar ser obrigatorios. Verifica se a senha confere com a salva no banco e se o email informado já não foi cadastrdo. |
| POST | /session | Faz login na aplicação | Campos obrigatorios: email e password. Verifica se usuário existe e se a senha confere com a salva no banco. |

> Rotas privadas

| Método | Rota |  Função | Descrição |
|--|--|--|--|
| POST| /types | Cadastra um type  | Campos obrigatorios: name. Antes de cadastadar o type verifica se o type informado já foi cadastrdo.  | 
| GET | /types/:id | Traz um type em especifico | Busca os dados de um type pelo seu id e todos os pokemons que possuiem este type |
| GET | /types | Traz todos os types cadastrados | Verifica se existe algum type cadastrados. |
| PUT | /types/:id | Atualiza os dados de um type | Busca os dados de um type pelo seu id e verifica se o type informado já foi cadastrdo.  |
| POST| /weather | Cadastra um weather  | Campos obrigatorios: name. Antes de cadastadar o weather verifica se o type informado já foi cadastrdo.  | 
| GET | /weather/:id | Traz um weather em especifico | Busca os dados de um weather pelo seu id e todos os pokemons que possuiem este weather. |
| GET | /weather | Traz todos os weather cadastrados | Verifica se existe algum weather cadastrados. |
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
<div align="center">
    <h1 align="center"> Pokedex </h1>
</div>

<br />

<p align="center">
  <a href="#computer-project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Entre em contato</a>
  </p>

## :computer: Projeto

Este projeto foi desenvolvido para o teste de desenvolvimento web da RedFox, foi dada uma maior enfase ao backend, visto que  é minha atual área de atual no momento. 
Como o teste possibilita uma maior flexibilidade sobre a forma de se atingir o objetivo, optei por utilizar os campos: name, pokedex_number,generation,evolution,familyID,type_1,
type_2, weather_1, weather_2, stat_total, atk, def, sta, legendary, cp@39,
cp@40, os demais campos não formão utilizados. 


## :rocket: Construído com

Este projeto foi desenvolvido com as seguintes tecnologias:

<details>
  <summary>Backend</summary>

- Node.js
- Express
- JWT
- Bcrypt
- Express-async-errors
- MYSql
- Sequelize
- Dotenv
- Cors
- VS Code

</details>

<details>
  <summary>Frontend</summary>

- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [React Dropzone](https://github.com/react-dropzone/react-dropzone)
- [React Icons](https://react-icons.netlify.com/#/)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [VS Code](https://code.visualstudio.com/)

</details>


### Backend

A API possui controle de sessão através de um token JWT, na qual possibilita a divisão das rotas em rotas publicas e privadas. Sendo que as rotas publicação podem ser acessadas sem o token em quanto as privadas não pode ser acessadas sem o um token valido.  

> Rotas publicas 

| Método | Rota |  Função | JWT |
|--|--|--|--|
| GET | / | Traz os pokemons | FALSE |
| GET | /pokemon/:name | Traz os dados de um pokemon especifico | FALSE |
| POST | /user/login | Faz login na aplicação | FALSE |
| POST | /user| Cria um usuário | FALSE |
| GET| /ad/pokemons | Traz os pokemons com alguns dados a mais (com o id que não apresento e não utilizo na aplicação web) | TRUE |
| GET| /ad/pokemons/:id | Traz os dados de um único pokemon  | TRUE | 
| POST| /pokemons/| Cria um pokemon  | TRUE | 
| PUT| /pokemons/| Atualiza os dados de um pokemon  | TRUE | 
| DELETE| /pokemons/| Altera a frag de "active" para "deleted" (por motivos de segurança prefiro não apagar nenhum dado e apenas não exibi-lo mais e ainda mante-lo em banco)  | TRUE | 
| GET| /types| Lista todos os Types  | TRUE | 
| GET| /types/:id | Traz um único Type  | TRUE | 
| PUT| /types/:id | Atualiza um Type  | TRUE | 
| GET| /weathers| Lista todos os Climas  | TRUE | 
| GET| /weathers/:id | Traz um único Climas  | TRUE |
| PUT| /weathers/:id | Atualiza um Climas  | TRUE |
| GET| /ad/type/weather | Lista os tipos e os Climas em uma unica requisição, (para a aplicação não fazer mais de um requisição para pegar esses dados)   | TRUE | 
| GET/POST | /migration/types | Migra os tipos para a tabela de types (ROTA COMENTADA) | TRUE | 
| PUT/POST | /migration/weather | Migra os climas para a tabela Weathers  (ROTA COMENTADA) | TRUE | 
| GET/POST | /migration/pokemons | Faz a migração dos pokemons, criando o relacionamento dos tipos e dos climas RODE PRIMEIRO AS OUTRAS DUAS (ROTA COMENTADA) | TRUE | 


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

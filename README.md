

<p align="center">
<a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-baixar-o-projeto">Como utilizar o projeto</a>
</p>

## O projeto foi hospedado no Heroku e pode ser acessado clicando no link abaixo:
- [pokemon](https://testefox-frontend.herokuapp.com/)

## Sobre
Projeto realizado para o processo seletivo na RedFox

---

##  Tecnologias
Para desenvolver este projeto foram utilizadas as seguintes tecnologias:

-  [ReactJS](https://reactjs.org/)
-  [Node.js](nodejs)
-  [TypeScript](https://www.typescriptlang.org/)
-  [PostgreSQL](https://www.postgresql.org/)

## Como baixar o projeto

```bash

  # Clonar o repositório
  $ git clone https://github.com/DaywisonFerreira/teste-desenvolvimento-web

  # Alterar as configurações da variável .env.example para inserir as credenciais do banco de dados

  # Entrar no diretório raiz, instalar as dependências
  $ yarn install

  # Rodar as migrations para criar a tabela no banco de dados
  $ yarn knex migrate:latest

  # Rodar os seed para preencher o banco de dados com os registros que estão no excel (eu alterei alguns nomes de registros das colunas para que fossem criado no banco de dados sem problema)
  $ yarn knex seed:run

  # iniciar o servidor NodeJS
  $ yarn dev:server

  ## Front end
  # Clonar o repositório
  $ git clone https://github.com/DaywisonFerreira/teste-desenvolvimento-frontend

  # Entrar na pasta raiz e instalar as dependências
  $ yarn install

  # Rodar a aplicação
  $ yarn start


  ```
  ----
### Desenvolvido com :heart: por Daywison Leal
-  [LinkedIn](https://www.linkedin.com/in/daywison-leal/)










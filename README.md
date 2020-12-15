# Teste de Desenvolvimento Web - RedFox

## Tecnologias

### Front-End

- HTML
- CSS
- JavaScript
- Bootstrap
- ReactJs

### Back-End

- NodeJs
- Express
- Sequelize
- MySQL

## Execução

1. para executar a aplicação você precisa ter instalado na sua máquina o MySQL e NodeJs;

2. abra o arquivo `.env` e altere as variáveis com o prefixo `DB_` segundo as configurações do seu Banco de Dados; 

```
DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_SCHEMA=pokedex
DB_PORT=3306
HTTP_PORT=3003
```

3. acesse a pasta do projeto em um terminal e instale as dependências com o comando `npm install`;

4. no terminal, execute os comandos abaixo para criar e popular o Banco de Dados MySQL:

```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

5. execute o comando `node sever.js` para iniciar o servidor NodeJs, na porta 3003;
6. em outro terminal, execute o comando `npm start` para iniciar o servidor ReactJS;
7. pra finalizar, diga: **Pokebola, vai!!** e a aplicação estará pronta para testes na url http://localhost:3000/ :wink:

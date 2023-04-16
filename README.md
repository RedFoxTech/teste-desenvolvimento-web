# Pokedex

Olá! Meu nome é Miguel!

# Getting Started:
## Back-end 
Desenvolvido com NodeJS e ExpressJS.
Database postgreSQL com Docker compose
### Inicindo e configurando server back-end e database:
Rode os seguintes comandos:
```bash
cd backend
yarn

yarn db:dev:up
npx prisma generate
npx prisma db push

yarn build
yarn start
```
URL da API [http://localhost:3001](http://localhost:3001)

## Front-end
Desenvolvido com NextJS e tecnologias relacionadas.
### Iniciar server front-end:
```bash
cd frontend
yarn

yarn build
yarn start
```
Abra pra visualizar o projeto: [http://localhost:3000](http://localhost:3000).

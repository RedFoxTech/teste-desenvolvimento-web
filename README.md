# Tecnologias usadas

* NodeJS
* Expression
* MySQL
* React JS
* Axios
* Bulma

## Observações importantes:

### Há variaveis de ambiente então é preciso setá-las antes.

### Haverá um arquivo chamado ./backend/src/database/pokemong\_go.sql onde já contém a criação de do banco e alguns inserts.

Para rodar o arquivo basta rodar o comando:

<br>
`mysql -u root -p`

<br>
Após isso execute:

ˋˋˋ
source backend/src/database/pokemon\_go.sql
ˋˋˋ

ou copia-lo para o Workbench

## Como rodar a aplicação?

Antes de tudo instale as dependencias:

ˋˋˋ
npm install
ˋˋˋ

### Rode a aplicação de backend:

ˋˋˋ
cd backend
npm run start:watch
ˋˋˋ

### Rode a aplicação de frontend:

ˋˋˋ
`cd frontend
npm start`
ˋˋˋ
## Acesso

Subi o projeto no servidor, mas como usei a versão gratuita do heroku o primeiro acesso pode ficar lento até o servidor "acordar".
Ao acessar o link, espere 1 minuto e dê refresh na página novamente que vai estar pronto.
Caso prefira coloque o projeto para rodar no localhost, conforme explicado abaixo
Acesse o projeto pela url: https://orulo.surge.sh

## Notas

O armazenamento de pokemons favoritos, está sendo feito no localStorage, por isso ao acessar com outro browser esse valor é perdido. Idealmente deveria ser salvo no user logado, mas como não fiz autenticação no app, deixei no localStorage mesmo.

## Rodar backend

### `cd back`

Navegue para a pasta back/

### `yarn`

Instala todas as dependencias

### `yarn createDB`

Caso seja a primeira vez rodando, é necessário ter o postgres instalado e configurar o acesso em `back/src/config/config.json`. O comando yarn createDB irá criar um banco com o nome de `pokemon`

### `yarn prepareDB`

Caso seja a primeira vez rodando, e depois de ter o database criado, esse comando ira fazer as migrations e alimentar a base de dados com o conteúdo do excel.

### `yarn start`

Inicia o servidor na porta 5000

## Rodar frontend

### `cd back`

Em outra janela do terminal navegue para a pasta front/

### `yarn`

Instala todas as dependencias

### `yarn start`

Inicia o front end na porta 3000

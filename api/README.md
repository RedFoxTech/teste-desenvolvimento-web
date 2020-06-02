## API com NodeJs utilizando o Framework NestJs

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. 

## Instalação
 
Após o download entrar na pasta **api** e inserir sua *URL* de conexão com um cluster do **MONGODB** em um arquivo chamado **'.env'** será necessário criar um arquivo e dar o nome de **'.env',** com uma variável de ambiente igual do **'.env.exemplo'**, mas contendo sua *URL* de cluster do **MONGODB**.

Depois na mesma pasta via prompt de comando e executar:

```bash
$ npm install
```

## Para iniciar o backend na porta 3000, usar uns dos CLI abaixo dentro da pasta api via prompt
  
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Exemplo de Objeto Pokemon para testar com o POST, PUT nas requisições
```
{
	"name": "Bulbasaur",
	"pokedexnumber": 1,
	"imgName": 1,
	"generation": 1,
	"evolutionStage": 1,
	"evolved": 0,
	"familyID": 1,
	"crossGen": 0,
	"typeOne": "grass",
	"typewo": "poison",
	"weatherOne": "Sunny/clear",
	"weatherTwo": "Cloudy",
	"statTotal": 326,
	"atk": 118,
	"def": 118,
	"sta": 90,
	"legendary": 0,
	"aquireable": 1,
	"spawns": 1,
	"regional": 0,
	"raidable": 0,
	"hatchable": 5,
	"shiny": 0,
	"nest": 1,
	"new": 0,
	"notGettable": 0,
	"futureEvolve": 0,
	"oneHundredPercentCpForty": 981,
	"oneHundredPercentCpThirtyNine": 967
}
```
  

## Rotas da API


Consultar todos os Pokemons cadastrados.
Método: GET
URL: http://localhost:3000/pokmeons

Consultar um Pokemon por ID.
Método: GET
URL: http://localhost:3000/pokmeons/10

Atualizar um Pokemon por ID, passando os parametros via body em um objeto pokemon como no modelo.
Método: PUT
URL: http://localhost:3000/pokmeons/10
 
Cadastrar um novo Pokemon passando os parametros via body em um objeto pokemon como no modelo.
Método: POST
URL: http://localhost:3000/pokmeons/10
 
Deletar um Pokemon por ID.
Método: DELETE
URL: http://localhost:3000/pokmeons/10  

OBS: Quando eu estiver com mais tempo livre farei um componente de importação de Pokemons via excel e autenticação por da API com JWT.
<span style="display:block;text-align:center">![https://hipsters.jobs/files/pictures/LOGO-RED-new-01.png](https://hipsters.jobs/files/pictures/LOGO-RED-new-01.png)</span>

# <Center> **Teste de Desenvolvimento Web** </Center>

<center>
Está é uma api criada com Express.js, e MongoDB para criar, editar, atualizar e deletar Pokemons dentro de um banco de dados mongoDB.
</center>

## Requisitos

Node.js;

MongoDB;

Yarn;

## Instalação e execução 🔥🔥.

Faça um clone desse repositório;

Entre na pasta  `cd teste-desenvolvimento-web`

Rode `yarn` para instalar todas as dependências;

Crie um arquivo `.env`, na raiz do projeto, e copie o conteúdo do arquivo `.env.example`, substituindo as váriáveis de ambiente necessárias;

rode `yarn:dev:server` para iniciar o servidor de desenvolvimento;

## **💻 Tecnologias**

✅ [Node.JS](https://nodejs.org/en/)

✅ [MongoDB](https://www.mongodb.com/); 

✅ [Express.js](https://expressjs.com/pt-br/); 

✅ [Sucrase](https://sucrase.io/); 

✅ [Nodemon](https://nodemon.io/); 

✅ [JWT](https://jwt.io/); 

## **💡 Funcionalidades para implementar.**

- [ ]  Pesquisa com filtros;
- [X]  Criação de usuário;
- [X]  Autenticação com JWT;
- [X]  Criar, mostrar, listar com paginação, atualizar, e deletar pokemons;
- [X]  Atualização e upload de imagem dos pokemons;

## Usuários e Autenticação 

### Criação de usuário

Ao receber uma requisição do tipo `POST`, na rota `/users`, com  nome, email e senha, deve criar o usuário no banco de dados e retornar as informações do usuário na tela. 

Exemplo de corpo de requisição:

```JSON
{
	"name": "Kelvyn Santana",
	"email": "santanakelvyn@gmail.com",
	"password": "1234567"
}
```

Exemplo de resposta: 
```JSON
{
  "id": "5ef3a3f939cfb84041fd6956",
  "name": "Kelvyn Santana",
  "email": "santanakelvyn@gmail.com"
}
```

### Autenticação JWT

Ao enviar uma requisição do tipo `POST`, na rota `/sessions`, com 'email', e 'password' corretos deve receber um token do tipo JWT válido por 48 horas, e os dados do usuário que gerou o token.

Exemplo de requisição:

```JSON 
{
	"email": "santanakelvyn@gmail.com",
	"password": "1234567"
}
```

Exempo de resposta:

```JSON
{
  "user": {
    "name": "Kelvyn Santana",
    "email": "santanakelvyn@gmail.com",
    "createdAt": "2020-06-24T19:05:29.072Z",
    "updatedAt": "2020-06-24T19:05:29.072Z",
    "id": "5ef3a3f939cfb84041fd6956"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjNhM2Y5MzljZmI4NDA0MWZkNjk1NiIsImlhdCI6MTU5MzAyNTUzMywiZXhwIjoxNTkzMTk4MzMzfQ.vrDWB44REzOH4e5cETmwHkiZE0Pwu0JJvnTU_OXVG0o"
}

```

## Pokemons

### Listando Pokemons

Para listar um pokemon, basta enviar um requisitção do tipo `GET`, para a rota `/pokemons`.

Exemplo de requisição:
```
http://localhost:3333/pokemons
```

Exemplo de resposta:
``` JSON
{
  "pokemons": {
    "docs": [
      {
        "image": "071c452d46106b9f4ba1-pikachu.png",
        "generation": 3,
        "evolutionStage": 2,
        "evolved": true,
        "familyId": null,
        "crossGeneration": true,
        "types": [
          "grass",
          "fighting"
        ],
        "weathers": [
          "sunny/clear",
          "cloudy"
        ],
        "atk": 241,
        "def": 153,
        "sta": 120,
        "statTotal": 514,
        "isLegendary": false,
        "aquireable": "trainner",
        "spawns": true,
        "regional": false,
        "raidable": null,
        "hatchable": null,
        "shiny": false,
        "nest": false,
        "new": true,
        "notGettable": false,
        "futureEvolve": false,
        "cp40": 2407,
        "cp39": 2373,
        "name": "Pikachu",
        "id": "5ef4c80c2dd1674045675e65"
      }
    ],
    "total": 1,
    "limit": 10,
    "page": "1",
    "pages": 1
  }
}

```

#### Paginando e limitando quantidade de resultados por páginas
Para paginar e exibir um quantidade específica de resultados por páginas basta enviar a requisição do tipo `GET`, para a rota `/pokemons`, informando na querie qual a página desejada, e o limite por página, por padrão o limite é de 10 resultados por página.

Exemplo de requisição: 

```
http://localhost:3333/pokemons?page=1&limit=20
```

Exemplo de resposta: 

```
{
  "pokemons": {
    "docs": [
      {
        "image": "18f461726cc87c1001a6-pikachu.png",
        "generation": 3,
        "evolutionStage": 2,
        "evolved": true,
        "familyId": null,
        "crossGeneration": false,
        "types": [
          "grass",
          "fighting"
        ],
        "weathers": [
          "sunny/clear",
          "cloudy"
        ],
        "atk": 241,
        "def": 153,
        "sta": 120,
        "statTotal": 514,
        "isLegendary": false,
        "aquireable": "trainner",
        "spawns": true,
        "regional": false,
        "raidable": null,
        "hatchable": null,
        "shiny": false,
        "nest": false,
        "new": true,
        "notGettable": false,
        "futureEvolve": false,
        "cp40": 2407,
        "cp39": 2373,
        "name": "Pikachu",
        "id": "5ef503fe4e72e382b821b4bf"
      }
    ],
    "total": 1,
    "limit": 20,
    "page": "1",
    "pages": 1
  }
}

```
### Criando um Pokemon

Para criar um novo Pokemon na base de dados você pode enviar uma requisição do tipo `POST`, para a rota `/pokemons`, com as informações do seu pokemon. Apenas o campo nome é obrigatório, mas você pode enviar outras informações se desejar.

Atenção: O campo `name` é unico, ou seja, não é possível cadastrar dois pokemons com o mesmo nome.

Exemplo de requisição:
``` JSON
{
	"name": "Pikachu",
	"types": [
		"grass",
		"fighting"
	],
	"generation": 3,
	"evolutionStage": 2,
	"evolved": true,
	"crossGeneration": false,
	"weathers": [
		"sunny/clear",
		"cloudy"
	],
	"atk": 241,
	"def": 153,
	"sta": 120,
	"isLegendary": false,
	"aquireable": "trainner",
	"spawns": true,
	"regional": false,
	"shiny":  false,
	"nest": false,
	"notGettable": false,
	"futureEvolve": false,
	"cp40": 2407,
	"cp39": 2373,
		"familyId": "5ef3fdc2a2f14f95e0b84b01"
}
```
Exemplo de resposta:

``` JSON
{
  "image": null,
  "generation": 3,
  "evolutionStage": 2,
  "evolved": true,
  "familyId": null,
  "crossGeneration": false,
  "types": [
    "grass",
    "fighting"
  ],
  "weathers": [
    "sunny/clear",
    "cloudy"
  ],
  "atk": 241,
  "def": 153,
  "sta": 120,
  "statTotal": 514,
  "isLegendary": false,
  "aquireable": "trainner",
  "spawns": true,
  "regional": false,
  "raidable": null,
  "hatchable": null,
  "shiny": false,
  "nest": false,
  "new": true,
  "notGettable": false,
  "futureEvolve": false,
  "cp40": 2407,
  "cp39": 2373,
  "name": "Pikachu",
  "id": "5ef614f646dfe43bae50c9c7"
}
```
**Campos aceitos para criação de um pokemon**

```Javascript
{
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    trim: true,
    default: null,
  },
  generation: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7],
    default: null,
  },
  evolutionStage: {
    type: Number,
    enum: [1, 2, 3],
    default: null,
  },
  evolved: {
    type: Boolean,
    default: null,
  },
  familyId: {
    type: 'Foreign Key',
    ref: 'Pokemon',
    default: null,
  },
  crossGeneration: {
    type: Boolean,
    default: null,
  },
  types: [
    {
      type: String,
      enum: [
        'bug',
        'dragon',
        'dark',
        'eletric',
        'fairy',
        'fighting',
        'fire',
        'flying',
        'ghost',
        'grass',
        'ground',
        'ice',
        'normal',
        'poison',
        'psychic',
        'rock',
        'steel',
        'water',
      ],
      default: null,
    },
  ],
  weathers: [
    {
      type: String,
      enum: [
        'cloudy',
        'fog',
        'partly cloudy',
        'rainy',
        'snow',
        'sunny/clear',
        'windy',
      ],
      default: null,
    },
  ],
  atk: {
    type: Number,
    default: null,
  },
  def: {
    type: Number,
    default: null,
  },
  sta: {
    type: Number,
    default: null,
  },
  statTotal: {
    type: Number,
    default: null,
    /* Calculado automaticamente no controller */
  },
  isLegendary: {
    type: Boolean,
    default: null,
  },
  aquireable: {
    type: String,
    enum: ['trainner', 'expert', 'master'],
    default: null,
  },
  spawns: {
    type: Boolean,
    default: null,
  },
  regional: {
    type: Boolean,
    default: null,
  },
  raidable: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: null,
  },
  hatchable: {
    type: Number,
    enum: [2, 5, 7, 10],
    default: null,
  },
  shiny: {
    type: Boolean,
    default: null,
  },
  nest: {
    type: Boolean,
    default: null,
  },
  new: {
    type: Boolean,
    default: true,
  },
  notGettable: {
    type: Boolean,
    default: null,
  },
  futureEvolve: {
    type: Boolean,
    default: null,
  },
  cp40: {
    type: Number,
    default: null,
  },
  cp39: {
    type: Number,
    default: null,
  },
}
```
### Mostrando um Pokemon específico
Para ter as informação de um pokemon específico, basta enviar uma requisição do tipo `GET`, para a rota `/pokemons/id-do-seu-pokemon`.

Exemplo de requisição:

```
http://localhost:3333/pokemons/5ef614f646dfe43bae50c9c7

```
Exemplo de resposta: 
``` JSON
{
  "image": null,
  "generation": 3,
  "evolutionStage": 2,
  "evolved": true,
  "familyId": null,
  "crossGeneration": false,
  "types": [
    "grass",
    "fighting"
  ],
  "weathers": [
    "sunny/clear",
    "cloudy"
  ],
  "atk": 241,
  "def": 153,
  "sta": 120,
  "statTotal": 514,
  "isLegendary": false,
  "aquireable": "trainner",
  "spawns": true,
  "regional": false,
  "raidable": null,
  "hatchable": null,
  "shiny": false,
  "nest": false,
  "new": true,
  "notGettable": false,
  "futureEvolve": false,
  "cp40": 2407,
  "cp39": 2373,
  "name": "Pikachu",
  "id": "5ef614f646dfe43bae50c9c7"
}
```
### Atualizando um Pokemon

Para atualizar um pokemon basta enviar uma requisição do tipo `PATCH`, para a rota `/pokemons/<id-do-pokemon>`, com as informações que deseja atualizar.

Exemplo de requisição:

Rota: `http://localhost:3333/pokemons/5ef614f646dfe43bae50c9c7`

Corpo da requisição:
```JSON
{
	"evolutionStage": 1,
	"crossGeneration": false,
	"generation": 2
}
```

Exemplo de resposta: 
``` JSON
{
  "image": null,
  "generation": 2,
  "evolutionStage": 1,
  "evolved": true,
  "familyId": null,
  "crossGeneration": false,
  "types": [
    "grass",
    "fighting"
  ],
  "weathers": [
    "sunny/clear",
    "cloudy"
  ],
  "atk": 241,
  "def": 153,
  "sta": 120,
  "statTotal": 514,
  "isLegendary": false,
  "aquireable": "trainner",
  "spawns": true,
  "regional": false,
  "raidable": null,
  "hatchable": null,
  "shiny": false,
  "nest": false,
  "new": true,
  "notGettable": false,
  "futureEvolve": false,
  "cp40": 2407,
  "cp39": 2373,
  "name": "Pikachu",
  "id": "5ef614f646dfe43bae50c9c7"
}
```
### Deletando um Pokemon
Para deletar um pokemon basta enviar uma requisição do tipo `DELETE`, para a rota `/pokemons/<id-do-pokemon>`.

Exemplo de requisição:
```
http://localhost:3333/pokemons/5ef614f646dfe43bae50c9c7
```

Se deletado deve retornar o status `200`.

### Atualizando a imagem de um Pokemon

Você pode fazer o upload de uma imagem para um pokemon enviando ela através de **Multipart Form**, para a rota `/pokemons/id-do-pokemon/image`.

Exemplo de requisição: 

Rota: `http://localhost:3333/5ef614f646dfe43bae50c9c7/image`


<span style="display:block;text-align:center">![./images/updateimage.png](./images/updateimage.png)
</span>

Exemplo de resposta: 
``` JSON
{
  "image": "bde9c1bdeee2ce6a9656-profile.jpg",
  "generation": 3,
  "evolutionStage": 2,
  "evolved": true,
  "familyId": "5ef3fdc2a2f14f95e0b84b01",
  "crossGeneration": false,
  "types": [
    "grass",
    "fighting"
  ],
  "weathers": [
    "sunny/clear",
    "cloudy"
  ],
  "atk": 241,
  "def": 153,
  "sta": 120,
  "statTotal": 514,
  "isLegendary": false,
  "aquireable": "trainner",
  "spawns": true,
  "regional": false,
  "raidable": null,
  "hatchable": null,
  "shiny": false,
  "nest": false,
  "new": true,
  "notGettable": false,
  "futureEvolve": false,
  "cp40": 2407,
  "cp39": 2373,
  "name": "Pikachu",
  "id": "5ef503fe4e72e382b821b4bf"
}
```




>>>>>>> kelvynsantana

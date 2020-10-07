# Pokemon API

Esta API foi desenvolvida para que subistitua um sistema de gerenciamento de Pokemons que era feito com uma planilha do EXCEL.<br>

Eu usei o MongoDB neste projeto pela flexibilidade que cada documento poderia ter, tendo em vista que no arquivo excel, as colunas não tinham um tipo de dados bem definido.<br>
Os testes não cobrem 100% da api, mas criei para algumas funcionalidades utilizando TDD.

## Tecnologias utilizadas

---

Principais tecnologias utilizadas no código.

💻 [Node.js](https://nodejs.org/)

🧰 [Typescript](https://www.typescriptlang.org/)

✅ [Jest](https://jestjs.io/)

📦 [MongoDB](https://www.mongodb.com/)

<br>
<br>

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<br>

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/lucasdrta/teste-desenvolvimento-web

# Acesse a pasta do projeto no terminal/cmd
$ cd api

# Instale as dependências
$ yarn ou npm install

# Execute os testes
$ yarn test

# Execute a aplicação
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

# Necessario ter o serviço do MongoDB em execução.
```

<br>
<br>

## Recursos da aplicação

| Recursos                | Descrição                                           |
| :---------------------- | :-------------------------------------------------- |
| `GET /pokemons`         | Retorna uma lista com todos os pokemons cadastrados |
| `POST /pokemons`        | Rota para criação de um novo pokemon                |
| `DELETE /pokemons/id`   | Rota para deletar um pokemon pelo seu id            |
| `POST /pokemons/upload` | Rota para cadastrar um pokemon por um arquivo .xlsx |

<br>
<br>

## Exemplos de respostas

#### `GET /pokemons`

```json
{
  "Img name": "1",
  "Generation": 1,
  "Evolution Stage": "1",
  "Evolved": 0,
  "FamilyID": 1,
  "Cross Gen": 0,
  "Type 1": "grass",
  "Type 2": "poison",
  "Weather 1": "Sunny/clear",
  "Weather 2": "Cloudy",
  "STAT TOTAL": 326,
  "ATK": 118,
  "DEF": 118,
  "STA": 90,
  "Legendary": 0,
  "Aquireable": 1,
  "Spawns": 1,
  "Regional": 0,
  "Raidable": 0,
  "Hatchable": 5,
  "Shiny": 0,
  "Nest": 1,
  "New": 0,
  "Not-Gettable": 0,
  "Future Evolve": 0,
  "100% CP @ 40": 981,
  "100% CP @ 39": 967,
  "_id": "5f7d10b2ce87cc8fa42d52a2",
  "Row": 1,
  "Name": "Bulbasaur",
  "Pokedex Number": 1
}
```

<br>
O unico campo que é obrigatório para criar um novo pokemon é o "Name".

#### `POST /pokemons`

```json
{
  "Name": "Pokemon name"
}
```
A resposta será:

```json
{
  "Img name": "",
  "Generation": 0,
  "Evolution Stage": "",
  "Evolved": 0,
  "FamilyID": 0,
  "Cross Gen": 0,
  "Type 1": "",
  "Type 2": "",
  "Weather 1": "",
  "Weather 2": "",
  "STAT TOTAL": 0,
  "ATK": 0,
  "DEF": 0,
  "STA": 0,
  "Legendary": 0,
  "Aquireable": 0,
  "Spawns": 0,
  "Regional": 0,
  "Raidable": 0,
  "Hatchable": 0,
  "Shiny": 0,
  "Nest": 0,
  "New": 0,
  "Not-Gettable": 0,
  "Future Evolve": 0,
  "100% CP @ 40": 0,
  "100% CP @ 39": 0,
  "_id": "5f7d219cce87cc8fa42d5c45",
  "Name": "Pokemon name",
  "__v": 0
}
```
<br>
<br>

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Lucas Duarte.


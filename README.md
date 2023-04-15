# Teste de Desenvolvimento Web

Olá Dev! Tudo bem?

A RedFox está sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente motivação!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas conhecer você, seu esforço e potencial para aprender, se adaptar e tomar decisões.

Agora vamos ao teste!


## Setup inicial

### Este é um projeto de backend que utiliza Node.js e MongoDB. As versões utilizadas são:

    Node.js: https://nodejs.org/en/
    MongoDB v5.2.0: https://www.mongodb.com/try/download/community
    xlsx v0.18.5: https://www.npmjs.com/package/xlsx
    nodemon v2.0.22: https://www.npmjs.com/package/nodemon

#### Para rodar o projeto na máquina, siga os seguintes passos:

    Faça o download e instale o Node.js e o MongoDB de acordo com as versões mencionadas acima.
    Clone este repositório em sua máquina.
    Abra o terminal na pasta raiz do projeto e execute o comando npm install para instalar as dependências do projeto.

#### Instruções para utilizar o servidor Node.js com MongoDB

    Este é um arquivo JavaScript que inicia um servidor Node.js para uma aplicação web utilizando MongoDB. As linhas comentadas referem-se a funcionalidades opcionais que podem ser utilizadas ou não.

##### Utilização pela primeira vez

    Para utilizar o código pela primeira vez, siga as instruções abaixo:
    Abra o arquivo server.js.
    Descomente a linha //const { readXLSX } = require('./utils') e a linha //const _path = path.join(__dirname, 'xlsx', 'PokemonGo.xlsx'). Para descomentar, basta remover os caracteres // do início de cada linha.
    Verifique se o arquivo Excel está localizado na pasta xlsx do projeto e tem o nome PokemonGo.xlsx. Caso contrário, altere o nome e/ou localização do arquivo e/ou do diretório no trecho de código descomentado.
    Execute o servidor com o comando node server.js. Isso irá povoar o banco de dados MongoDB com os dados do arquivo Excel.
    Após a execução da função readXLSX, comente as linhas que antes estavam descomentadas. Para comentar, basta adicionar os caracteres // no início de cada linha.

##### Utilização após a primeira vez

    Após a primeira execução do código, você pode escolher se deseja utilizar a função readXLSX novamente. Caso não queira, siga as instruções abaixo:

    Abra o arquivo server.js.
    Comente as linhas que antes estavam descomentadas. Para comentar, basta adicionar os caracteres // no início de cada linha.
    Execute o servidor com o comando node server.js. Isso irá iniciar o servidor sem povoar o banco de dados MongoDB novamente.

#### Observações

    Certifique-se de abrir o arquivo server.js para realizar as tarefas descritas acima.
    Se as funcionalidades opcionais do código estiverem descomentadas, o servidor irá povoar o banco de dados MongoDB com os dados do arquivo Excel a cada execução. Portanto, se não deseja que os dados sejam sobrescritos, não se esqueça de comentar as linhas correspondentes novamente.

### Este é um projeto de frontend que utiliza React.js, Material-UI e Axios. As versões utilizadas são:

    React.js: https://reactjs.org/
    Material-UI: https://material-ui.com/
    Axios: https://axios-http.com/

#### Para rodar o projeto na máquina, siga os seguintes passos:

    Clone este repositório em sua máquina.
    Abra o terminal na pasta raiz do projeto e navegue para a pasta frontend.
    Execute o comando npm install para instalar as dependências do projeto.
    Execute o comando npm start para iniciar o servidor de desenvolvimento.
    Abra o navegador e acesse http://localhost:3000 para visualizar o projeto.

Obs: Certifique-se de que o servidor backend também esteja rodando em sua máquina para que o frontend possa se conectar corretamente.

### Como consultar usando postman

    GET /api/pokemons
    Retorna todos os pokémons cadastrados.
    Exemplo de requisição no Postman:
       GET http://localhost:8080/api/pokemons
    
    GET /api/pokemons/:id
    Retorna o pokémon com o ID especificado.
    Exemplo de requisição no Postman:
        GET http://localhost:8080/api/pokemons/idPresentenoBancodeDados

    GET /api/pokemons/search/:name
    Retorna o(s) pokémon(s) com o nome especificado.
    Exemplo de requisição no Postman:
        GET http://localhost:8080/api/pokemons/search/pikachu

    POST /api/pokemons
    Cria um novo pokémon com os dados especificados no corpo da requisição.
    Exemplo de corpo da requisição:
        {
            "name": "Charmander",
            "pokedexNumber": 4,
            "imgName": "charmander.png",
            "generation": 1,
            "evolutionStage": "1",
            "evolved": false,
            "familyID": 4,
            "crossGen": false,
            "type1": "Fire",
            "type2": "",
            "weather1": "Sunny/clear",
            "weather2": "",
            "statTotal": 309,
            "atk": 116,
            "def": 96,
            "sta": 97,
            "legendary": false,
            "acquireable": true,
            "spawns": true,
            "regional": false,
            "raidable": false,
            "hatchable": true,
            "shiny": false,
            "nest": false,
            "isNewPokemon": false,
            "notGettable": false,
            "futureEvolve": false,
            "maxCP40": 980,
            "maxCP39": 938
        }
    Exemplo de requisição no Postman:
        POST http://localhost:8080/api/pokemons

    PUT /api/pokemons/:id
        Atualiza os dados do pokémon com o ID especificado.
        Exemplo de corpo da requisição:
        {
            "name": "Charizard",
            "pokedexNumber": 6,
            "imgName": "charizard.png",
            "generation": 1,
            "evolutionStage": "3",
            "evolved": true,
            "familyID": 4,
            "crossGen": true,
            "type1": "Fire",
            "type2": "Flying",
            "weather1": "Sunny/clear",
            "weather2": "Windy",
            "statTotal": 534,
            "atk": 223,
            "def": 173,
            "sta": 138,
            "legendary": false,
            "acquireable": true,
            "spawns": true,
            "regional": false,
            "raidable": false,
            "hatchable": true,
            "shiny": false,
            "nest": false,
            "isNewPokemon": false,
            "notGettable": false,
            "futureEvolve": true,
            "maxCP40": 2889,
            "maxCP39": 2852
        }

    Exemplo de requisição no Postman:
        PUT http://localhost:8080/api/pokemons/4

    DELETE /api/pokemons
        Exclui o pokémon dado um id
        Exemplo de requisição no Postman:
            DELETE http://localhost:8080/api/pokemons



## Estrutura de pastas
### BACKEND
    O projeto está organizado em uma estrutura de pastas que segue uma abordagem MVC (Model-View-Controller).
    A pasta "models" contém definições de modelos de dados, que representam entidades de negócios da aplicação.
    A pasta "controllers" contém as funções de controle, que gerenciam as solicitações de clientes e interagem com o modelo de dados correspondente.
    A pasta "routes" contém os arquivos de rota, que definem as rotas da API e os controladores correspondentes.
    A pasta "utils" contém utilitários compartilhados e funções de ajuda, que podem ser usados em todo o aplicativo.
    A pasta "database" contém um arquivo que simula um banco de dados usando JSON.
    O arquivo "server.js" é o ponto de entrada do aplicativo e contém o código para iniciar o servidor web e configurar as rotas da API.

### FRONTEND
    O projeto está organizado em uma estrutura de pastas que segue uma abordagem componentizada.
    A pasta "api" contém um arquivo que exporta funções que definem chamadas da API.
    A pasta "components" contém todos os componentes React do projeto, cada um em seu próprio arquivo.
    A pasta "templates" contém templates que são usados como wrappers para os componentes.
    A pasta "utils" contém funções de ajuda e arquivos de estilo.
    O arquivo "App.js" é o ponto de entrada do aplicativo e contém o código para configurar as rotas do aplicativo.
    O arquivo "index.js" é o arquivo que é carregado pelo navegador e inicializa o aplicativo React.

## Problemas Encontrados

### FRONTEND
    Durante o desenvolvimento do projeto, foram encontrados alguns problemas relacionados à implementação das funcionalidades de post, put e delete no Frontend. Esses problemas foram causados pelo CORS (Cross-Origin Resource Sharing).

    Além disso, não foi possível implementar a tela de edição de Pokémons como o planejado. A ideia era que, quando o usuário clicasse no botão "editar" dentro do card do Pokémon, o componente responsável pela exibição dos Pokémons e a barra de pesquisa fossem ocultados e o formulário utilizado no cadastro fosse exibido, preenchido com os dados do Pokémon a ser editado. No entanto, não foi possível implementar essa funcionalidade dentro do prazo estabelecido.
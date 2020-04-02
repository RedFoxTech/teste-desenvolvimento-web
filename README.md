# Teste de Desenvolvimento Web - Luan Bonetto

Olá, inicialmente gostaria de dizer que foi divertido e desafiador realizar esse teste. :smile:
Separei a documentação entre Front-end e Back-end, espero que goste!

## Front-End

### :hammer_and_wrench: Ferramentas Utilizadas

- Framework ReactJS
- React Suite, um Framework UI de Componentes feito para o React
- Redux, para o controle de estado
- Redux-thunk, para procedimentos assíncronos
- React-router para o controle de rotas
- Webfontloader, para importar fontes
- Axios, para requisições com o backend

### :construction_worker: Estrutura de pastas

├── src
    ├── actions
    ├── components
    ├── reducers
    ├── resources
    └── store

- Actions    
    A maioria da lógica de negócios e efeitos colaterais são implementados aqui.

- Components
    Aqui se encontram os Componentes React (Estão conectados com o Redux)

- Reducers
    Responsável por receber o estado e uma action, decide o que fazer a partir da action e retorna um novo estado.

- Resources
    Aqui ficam armazenados arquivos como imagens e videos que serão utilizados.

- Store
    Responsável por manter o estado da aplicação.

### :computer: Rodando a aplicação
    Antes de tudo será necessário digitar no terminal o comando: 
    ```
    npm i
    ```
    Para que seja instalado todas as ferramentas necessárias para o funcionamento da nossa aplicação.
    Em seguida basta digitar o comando:
    ```
    npm run start
    ```
    Para rodar a aplicação na porta localhost:3000

### :thinking: O que dá para fazer na aplicação?
Na primeira vez que a página é aberta ela irá mostrar de padrão os 12 primeiros pokemons  (todos estão ordenados de acordo do o Pokedex Number).

- Visualizando Detalhes dos Pokemons:
Os Pokemons estão organizados em cards onde é possível visualizar seu sprite, pokedex number, nome e tipos. Clicando no olho no cando do card um modal aparece exibindo mais detalhes do pokemon.
![](https://i.imgur.com/NQyz4eP.mp4) 

- Paginação
Abaixo da página tem um controle de paginas, com ele é possivel paginar de 12 em 12 pokemons.
![](https://i.imgur.com/OQTuc00.mp4)

- Pesquisando Pokemons
No topo da página é possível fazer a filtragem de pokemons, pesquisando pelo número ou nome do pokemon.
Também é possivel digitar as iniciais assim exibindo todos os pokemons que tiverem os nomes iniciais parecidas.
![](https://i.imgur.com/2dQS7MT.mp4)


## Back-End

### :hammer_and_wrench: Ferramentas Utilizadas

- Banco de dados MySql
- Express para criação de endpoits
- dotenv para armazenamento de variáveis ambientes
- knex para criação de querys SQL
- Typescript para tipagem de código javascript

### :construction_worker: Arquitetura

├── src
    ├── business
    │       ├──entities
    │       ├──gateways
    │       └──usecase
    │
    ├── data
    │   
    └──upresentation
            └──endpoints

-Business
    Aqui se encontra as regras de negócio da aplicação. Ela é composta por entidades, gateways(interfaces de funções) e casos de uso que são responsáveis por tratar os inputs, fazer validações, fazer a comunicação do banco com outros serviços e criar o corpo de respostas.

-Data
    Aqui ficam as implementações referentes ao banco de dados. (Os use case são capazes usá-las sem precisar saber se o banco é SQL, Firestore, MongoDB ou qualquer outro)

-Presentation
    É a camada responsável por tratar a comunicação do sistema com fontes externas. São compostas por funções chamadas de endpoints que recebem o input e convocam o use case adequado

### :computer: Rodando a aplicação
Antes de tudo será necessário digitar no terminal o comando: 
    ```
    npm i
    ```
Para que seja instalado todas as ferramentas necessárias para o funcionamento da nossa aplicação.
Em seguida basta digitar o comando:
    ```
    npm run start
    ```
Para rodar a aplicação na porta localhost:3333

### Usando os Endpoints

- POST https://redfox-pokedex.herokuapp.com/pokemons
Esse endpoint é responsável por buscar uma lista de 12 pokemons de acordo com o número da página (inserida no body).

exemplo de body:
    ```
    {
	    "offset": 2
    }
    ```

- GET https://redfox-pokedex.herokuapp.com/pages
Esse endpoint é responsável por retornar a quantidade de páginas existentes de acordo com a quantidade de pokemons existentes no banco de dados.

- GET https://redfox-pokedex.herokuapp.com/pokemons/:nameOrNumber
Esse endpoint retorna um pokemon(ou vários) de acordo o numero ou nome passado como parâmetro.

- GET https://redfox-pokedex.herokuapp.com/pokemon/:pokemonId
Esse endpoint retorna um pokemon de acordo com seu id passado como parâmetro.

## Considerações Finais :vulcan_salute:
Optei por usar o Typescript no backend pois vi que na descrição da vaga Typescript é um diferencial e quis mostrar o meu conhecimento na linguagem.
O front não ficou exatamente da forma que eu queria pois arrisquei aprender a usar o React Suite (sou mais acostumado a usar styled-components e Material UI). Tive alguns contratempos durante a semana que me impediram de fazer correções de alguns bugs e organizar melhor os componentes.

Por fim vou manter as aplicações funcionando para que possa fazer o teste.
Front: https://pokedex-redfox.surge.sh/
Back: https://redfox-pokedex.herokuapp.com/

E um pequeno detalhe, por questão de segurança eu coloquei a conexão com o banco de dados em variáveis ambientes.







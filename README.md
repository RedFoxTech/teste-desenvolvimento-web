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


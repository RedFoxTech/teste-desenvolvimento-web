# TESTE DESENVOLVIMENTO WEB - LUCAS CAMPIOTO CONSTANTINO

## Front-End

### Sobre o Projeto

Projeto tem apenas uma página, nela e apresentada os cards com os pokemons. Cada página e exibe 12 cards, na frente de cada card tem uma imagem estática e o nome de cada pokemon, ao passar o mouse em cima do card ele mostra a parte de trás que contém mais informações sobre o pokemon. Além disso e possível fazer uma pesquisa pelo nome de um personagem.

### Stacks Utilizadas

- Framework: ReactJS
- Redux
- React-router
- Redux-thunk
- Axios
- Rsuite
- Material UI

### Como rodar a aplicação

```bash
Primeiro e necessário instalar as depêndencias, basta acessar a pasta do projeto pelo terminar e digitar: npm install

Depois que tudo tiver instalado é necessário acessar a pasta FRONTEND e digitar o comando: npm start

Após inicializado a aplicação irá rodar na porta localholst:3000

```

## Back-End

### Sobre o Projeto

No Back-End da aplicação é possível escolher a página que você quer começar a ver os pokemons, e é exibida uma lista com 12 pokemons. Além disso pode filtrar um pokemon pelo nome ou id. 

### Stacks Utilizadas

- Banco de Dados MySQL
- AWS
- Express
- knex
- Typescript
- Dotenv

### Mais Detalhes.

Foi utilizado AWS para armazenar todo o backend. As tabelas feitas em MySQL foram armazendas em uma **EC2(Máquina virtual da aws)**. Depois de tudo pronto o back-end foi hospedado em uma **LAMBDA**, após ser hospedado foi criado uma **API GATEWAY** que faz comunicação com a LAMBDA e gera o endereço de endpoint. E para finalizar o front-end foi hospedado em um **S3** um serviço que nos permite fazer deploy da aplicação.

### Como rodar a aplicação

```bash
Primeiro e necessário instalar as depêndencias, basta acessar a pasta do projeto pelo terminar e digitar: npm install

Depois acesse a pasta backend e rode o comando: npm start 

```

### Endpoints

- POST: https://mdmplds27b.execute-api.us-east-1.amazonaws.com/V1/pokemons neste endpoint e necessário passar um body com o numero da página que vai ser exibido os primeiros 12 resultados.

- GET: https://mdmplds27b.execute-api.us-east-1.amazonaws.com/V1/pages este endpoint foi apenas para saber a quantidade de páginas que a aplicação teria.

- GET: https://mdmplds27b.execute-api.us-east-1.amazonaws.com/V1/pokemons/:nameOfPokemon Esse endpoint e para filtrar um pokemon pelo nome, é so passar um nome no parâmetro.

- GET: https://mdmplds27b.execute-api.us-east-1.amazonaws.com/V1/pokemon/:id Retorna um pokemon de acordo com o id inserido no parâmetro.

## Considerações Finais.

Foi muito bacana desenvolver esse projeto, pude colocar em prática coisas que não havia trabalhado direito. Não ficou exatamente do jeito que eu queria, eu tentei pegar as imagens dos pokemons da POKEAPI mas deu muitos problemas e decidi deixar uma imagem estática para não ficar muito feio. Além disso teve alguns detalhes de estilização que eu gostaria de ter feito, fora isso foi ocorreu tudo bem, foi ótimo para treinar os conceitos de AWS. 😀

**Link do Deploy:** [Pokefox](http://projetopokemon.s3-website-us-east-1.amazonaws.com/)



# RedFox - Teste para desenvolvedor web

# Front-end

Este é o front-end da aplicação, construida totalmente resonsiva, layout agradavél, com telas de login e registro, tela para listagem de pokemons, formulário para criar pokemons, filtro, etc.

# Tópicos 

- [Tecologias](#techs)
- [Rotas da aplicação](#routes)
- [Rodando a aplicação](#execute)
- [Página online](#online)

<a id="techs"></a>
## Tecnologias e bibliotecas utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
- [Material UI](https://material-ui.com/pt/)
- [Axios](https://www.npmjs.com/package/axios)
- [Toastify](https://www.npmjs.com/package/react-toastify)

<a id="routes"></a>
## Rotas da aplicação

### Públicas

> As rotas públicas não necessitam da auteticação do usuário.

- ``/`` 

> Rota da home da aplicação.


- ``/login`` 

> Rota para o usuário fazer login.


- ``/register`` 

> Rota para o usuário criar conta.

### Privadas

> AS rotas privadas necessitam que o usuário esteja autenticado.


- ``/dashboard`` 

> Rota da dashboard aplicação.


- ``/create`` 

> Rota para adicionar um novo pokemon.

__Todas as rotas abaixo só podem ser acessadas via clique no botão de um card relacionado a um pokemon em espécifico, caso contrário você apenas retornará a página da dashboard__

- ``/updatepokemon`` 

> Rota para atualizar alguns dados do pokemon.


- ``/updateimage`` 

> Rota para atualizar a imagem de um pokemon.


- ``/viewpokemon`` 

> Rota para visualizar os dados de um pokemon

<a id="execute"></a>
## Executando o front-end

Para executar a frnt-end em sua máquina siga os passos abaixo.

- 1 Clone meu repositório em sua máquina 

```sh
git clone git@github.com:edmilson-dk/teste-desenvolvimento-web.git

# entre na pasta web

cd teste-desenvolvimento-web/web
```

- 2 Após o passo acima, instale as dependências necessárias, para isso é preciso que você tenha o [NodeJS](https://nodejs.org/en/) instalado em sua máquina.

```sh
npm install

# ou com yarn

yarn install
```

- 3 Agora crie um arquivo na raiz do projeto, chamado .env e dentro dele escreva o mesmo conteúdo que tem no arquivo "env.example" que deixei neste repositório, agora após o ``REACT_APP_URL_API=`` você deve colocar a url da api se você estiver executando a api em sua máquina local, igual eu ensinei na pasta da api, você deve deixar assim ``REACT_APP_URL_API=http://localhost:3003/api``, caso contrario use a api que esta online deve ficar assim ``REACT_APP_URL_API=http://localhost:3003/api``.

- 4 Feito isso é hora de executar o projeto, para isso execute o comando abaixo.

```sh
npm start 

# ou com yarn

yarn start
```

<a id="online"></a>
## Veja a aplicação funcionando

Caso você não queira executar os passos de instalação manualmente, para sua sorte fiz o deploy da aplicação, e você pode testa ela no link abaixo.

[Aplicação aqui]()

Creator with 💙 by [Edmilson Jesus](https://www.linkedin.com/in/edmilson-jesus-4128711b5)
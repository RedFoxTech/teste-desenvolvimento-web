# Teste de Desenvolvimento Web

Olá pessoal da Red Fox, tudo certo ?

Antes de mais nada, vocês podem ver o projeto live no link https://otavioforredfox.netlify.app/. Espero que gostem !

Agora vamos à documentação:

## Para executar o projeto

Basta clonar esse repositório e rodar `npm install` para instalar todas as dependências e `npm start` para rodar o dev server e ver o projeto no browser.

## O projeto

A intenção era construir um substituto (mais "bonito", user friendly) à uma planilha de Excel. Para isso, meu objetivo foi construir uma SPA com estado global (Redux) e uma experiência que lembrasse um pouco os saudosos jogos de Pokémon no Game Boy, com o Ash "original" aparecendo na tela e interagindo com os usuários.

## Principais tecnologias (packages, libs, frames ...) utilizadas no projeto

- create-react-app
- react-router (SPA)
- redux (com Thunk como middleware)
- bootstrap (+ react/bootstrap)
- material UI

## Inicializando os dados

Deixei no projeto duas possibilidades para aquisição dos dados: utilizando axios + Firebase (Storage real time) e utilizando um arquivo local. O modelo live é utilizando um arquivo local, por questões de performance.

## Para a construção da tabela (UI, funcionalidades etc.)

Não utilizei nenhuma lib pronta para a construção da tabela e suas funções (editar, ordernar por coluna, filtrar, sistema de paginação e olhar com mais detalhes um Pokemon específico). Quis ter a experiência de desenvolver do zero e construir pedaço a pedaço.

Em suma, temos as seguintes features na tabela:

1. O usuário pode alterar o valor de todos os campos e esse valor ficará salvo no estado global. Não implementei o POST no arquivo original porque me pareceu um pouco invasivo alterar a db fonte.
2. O usuário pode ordenar com base em qualquer coluna.
3. Filtrar os dados + Autosearch: após o usuário parar de digitar, não precisa clicar em nenhum botão para executar o filtro. 
    - Retorna apenas os valores idênticos ao procurado (ponto de atenção: os nomes dos pokémons começam com letra maiúscula, é necessário escrever dessa maneira na busca)
    - Caso o usuário insira um número, é feito um tratamento para comparar à API
    - após uma busca, se o user apagar o que foi digitado, retornamos à lista completa de Pokémons
4. Sistema de paginação automático: dependendo do volume de dados que queiramos apresentar, basta definirmos quantos items queremos por página e a paginação será feita automaticamente.
5. Se o user clicar na imagem do Pokémon, ele será redirecionado (SPA) para outra tela com os detalhes do pokemon escolhido.

## Frameworks CSS

- Majoritariamente utilizei o bootstrap para fazer a disposição da UI e alguns elementos nativos (react boostrap)
- Alguns elementos demandavam customização. Para tanto, utilizei o CSS "puro" mesmo
- O Material UI foi utilizado no elemento de paginação (particularmente achei bem melhor que o componente do bootstrap)

## Melhorias futuras

- Permitir o matching parcial das buscas (ex. procurar metapod e retornar o resultado)
- Mostrar o loading em todos os carregamentos (das tabelas, das imagens etc.). Hoje ele só funciona no reload da lista de pokémons.
- A persistência dos dados "acaba" no estado global. Numa próxima versão seria implementado uma função de validação de alteração e POST para db.


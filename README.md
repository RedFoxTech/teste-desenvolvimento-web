# [](https://github.com/wesleymoliveira)👨‍💻 Wesley Moreira Oliveira

[![GitHub Badge](https://img.shields.io/badge/%3E-GitHub-black?style=flat&logo=github)](https://github.com/wesleymoliveira) [![Linkedin Badge](https://img.shields.io/badge/%3E-Linkedin-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/wesleymoliveira/) [![Gmail Badge](https://img.shields.io/badge/%3E-Gmail-red?style=flat&logo=gmail)](mailto:oliveirawesleyrj@gmail.com) [![Whatsapp Badge](https://img.shields.io/badge/%3E-Whatsapp-green?style=flat&logo=whatsapp)](https://api.whatsapp.com/send?phone=5522999130259&text=Ol%C3%A1!)

# - Frontend -

## Abordagem

Comecei criando um mock com os dados necessários e usei o mocky.io junto com o storybook para fazer o Frontend.
Procurei desenvolver os componentes de forma mais isolada possível, permitindo a sua reutilização ampla.

## Instruções

- Instale as dependências `$ yarn`
- Navegue até a pasta /frontend e execute - `$ yarn dev`
- Para visualizar o protótipo isolado de cada componente e suas diferentes propriedades, utilize o comando: `$ yarn storybook`

### O que foi utilizado?

- Typescript
- Styled Components
- NextJS
- Plop - `$ yarn generate ComponentName` (automatizar a criação dos components)
- Storybook - O Storybook é uma excelente ferramenta para prototipação da UI e visualização isolada da aplicação.

<img src="frontend/public/img/storybook.gif"/>

- [x] Typescript
- [x] NextJs
- [x] Styled Components

## Importante

- [x] Utilizei o NextJs com recursos de criação dinâmica de páginas estáticas para as rotas /pokemon/nomedopokemon. Ou seja a aplicação tem uma página estática para cada pokemon do banco de dados.

<img src="frontend/public/img/frontend.gif"/>

---

# - Backend -

## Instruções

- Por favor certifique-se que tem o MongoDB Instalado.
  - inicie o serviço do Mongo - `$ mongod`
- Navegue até a pasta /backend e execute - `$ yarn dev`

- Para visualizar a documentação da API, visite a rota: `/api-docs/`. Exemplo : `http://localhost:3333/api-docs/`

<img src="backend/src/api-doc.png"/>

### O que foi utilizado?

- Typescript
- Nodemon
- Cors
- MongoDB
- Mongoose
- Express
- Swagger

## Rotas disponíveis

- [x] GET - http://localhost:3333/pokemons
- [x] GET - http://localhost:3333/pokemons/{pokemonname}
- [x] DELETE - http://localhost:3333/pokemons/{id}
- [x] POST - http://localhost:3333/pokemons/ (passando JSON no corpo da requisição)
      Extra:
- [x] GET - http://localhost:3333/api-docs

### Leiam por favor.

Infelizmente não consegui completar o projeto como eu gostaria. Precisei enviar para que vissem e posteriormente vou corrigir. Vou pontuar algumas coisa que ainda vou trabalhar para corrigir:

1- Manipulação correta para salvar/ler os campos '0' e '1' do banco.
2- No backend, não consegui usar regex corretamente para que o filtro pelo nome do pokemon fosse case insensitive. Vou continuar pesquisando. Mas atualmente só está pesquisando se o nome do pokemon estiver minúsculo no banco, afetaando também a geração dinâmica de páginas estáticas do NExt.
3- Disponibilizei um arquivo short-mock.json peço que importem no mongo pois nele, os nome já estão minúsculos.
4- Cadastro e envio com imagens e seus tratamentos.
5- validações para inserir.

### Por favor, fiquem a vontade para críticas e feedbacks de melhoria. Eu ficaria muito feliz em saber como progredir.

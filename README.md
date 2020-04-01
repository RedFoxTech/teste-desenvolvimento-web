# Desafio Pokémon

O desafio consiste em transformar uma planilha de informações sobre Pokémons em algo mais legível, maleável e sustentável.

## Do que se trata

Este webapp é basicamente um CRUD que foi feito para ajudar na visualização e manutenção de sua Pokédex. 
Portanto, sua interface é super intuitiva e facil de usar.

No `backend` da aplicação foi usado NodeJS/express/mongoose. Não se preocupe com a instalação do MongoDB, este projeto utiliza MongoDB Atlas e está na nuvem, portanto não é necessario te-lo instalado. 

No `frontend` foi usado Angular com Angular Materials e Bootstrap.

O arquivo de variáveis `.env` foi tirado do `.gitignore` para facilitar a avaliação deste desafio.

## Instalação e utilização

Para instalar e rodar a aplicação você precisará de:

- Git
- Terminal
- Docker


### Como instalar/rodar a aplicação:

- Clone este repositorio em qualquer local desejado

```
$ git clone https://github.com/albertojnk/teste-desenvolvimento-web.git
```

- Use um terminal para entrar no diretório que você clonou e digite:

```
    docker-compose up
```


### Como utilizar:

A utilização pelo `frontend` é bem intuitiva, basta entrar em seu navegador e ir para `localhost:4200` que já aparecerá uma com alguns Pokémons.

No canto superior esquerdo haverá 2 campos, estes campos serão sua ferramenta de busca. Pesquise o que quiser, essa ferramenta permite a pesquisa por qualquer atributo já listado.

Ao clicar em um Pokémon da tabela, uma nova janela se abrirá, lhe dando a oportunidade de alterar algum atributo daquele Pokémon, deleta-lo, ou apenas ver melhor seus atributos.

Abaixo da tabela há um botão para a inserção de um novo Pokémon, infelizmente apenas um por vez.


## Utilize seu próprio banco de dados

Sinta-se a vontade para utilizar seu próprio banco de dados, se quiser.

Você precisará criar um `cluster` no  <a href="https://www.mongodb.com/cloud/atlas" target="_blank">MongoDB Atlas</a> , acesse seu cluster, clique em `connect`, e depois em `connect your application`, copie o link e preencha as variáveis em `.env` de acordo.

Depois disso você precisará popular essa nova db, para isso utilize o endpoint `http://localhost:3000/pokemons/new` e preencha o `body` de acordo com o exemplo do arquivo `insert-example.json`.


###### Authored by jnk
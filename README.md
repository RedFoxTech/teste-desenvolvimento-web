# Teste de Desenvolvimento Web - Projeto Pokémon

O projeto consiste em uma interface capaz de cadastrar e listar os Pokémons.  

# Backend

O backend foi desenvolvido utilizando o node.js com o Typescript.  Para o auxílio das rotas foi utilizado o framework Express, sendo configurado para entender as requisições em formato de JSON. Também foi adicionado o CORS que permite configurar as URLs que possuem permissão para utilizar a nossa API.
Foram criadas três rotas iniciais: “/create”, “/pokemons” e ” /pokemons/:id” .
Na rota “/create”  é realizado a inserção dos dados dos pokemons no banco de dados. Já na rota  “/pokemons” é utilizada para listar todos os pokemons encontrados no banco de dados. E na rota ” /pokemons/:id” é possível visualizar apenas o Pokémon selecionado através do id.

# Banco de Dados

O banco de dados utilizados foi o SQLite pois ele possibilita a utilização sem a necessidade de instalação. Entretanto os comandos foram realizados utilizando o Knex, que permite escrever as instruções do banco de dados através do Javascript, e caso seja necessário a mudança de banco pode-se utilizar os mesmos comandos.
O banco de dados foi criado utilizando uma migrate e foram adicionados os dados iniciais utilizando o seed.

# Frontend

A aplicação foi desenvolvida utilizando o ReactJS. Primeiramente foi criado o template utilizando o Typescript, sendo adicionados algumas fontes e ícones. 
Foram criadas três páginas: home, createpokemon e a searchpokemon. Na página home é possível selecionar as duas funções implementadas no momento. Já na página createpokemon possui um formulário para a inserção de um Pokémon no Banco de dados. E na página searchpokemon é possível ver a listagem de Pokémons que já foram adicionados.
Para o frontend conversar com o backend foi inserido o Axios que permite configurar a base URL para a comunicação.

# Funcionamento

Para iniciar o funcionamento do sistema é necessário realizar dois comandos. Em um terminal de comando é necessário entrar na pasta Server e executar o seguinte comando:  npm run dev.
E em outro terminal será necessário entrar na pasta web e executar o comando npm start. Após estes comandos irá abrir uma página com a aplicação.

# Futuras funcionalidades

Para futuras implementações pode-se implementar filtros na listagem dos Pokémons , além de permitir selecionar um Pokémon específico para verificar os demais dados permitindo a edição e exclusão.

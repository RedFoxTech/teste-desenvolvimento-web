
# Pokedex

## Kennedy Ferreira da Silva

[**Aplicação**](https://pokedex-kennedy.herokuapp.com/)

[**Backend**](https://pokedex-backend-k.herokuapp.com/)

### Tecnologias usadas

#### Frontend

 - [x] React
 - [x] Redux
 - [x] Bootstrap
 - [x] Axios
 - [x] StyledComponents

#### Backend

 - [x] Node
 - [x] JWT
 - [x] Express
 - [x] MYSql
 - [x] Sequelize
 - [x] Bcrypt

A aplicação contém um admin que se encontra no caminho "/admin"  **úsuario: admin@admin.com** e  **senha: admin**

ps : não foi trabalhado o layout do admin... ainda :/

**Token**
Algumas das rotas da API necessitam de um token JWT gerado a partir do login do usuário com uma validade de apenas 1 dia, para fazer login faça um POST na rota "/login" enviando no corpo da requisição o "email" e "password" de Admin e terá como retorno o token

**Senha**
A senha é encriptografada utilizando o Bcrypt.

**Exclusão**
A opção de excluir não exclui realmente os pokemons por questões de segurança, apenas muda o status de ativo para deletado sendo assim poderia ter futuramente um histórico de alterações em um pokemon. No cenário ideal teríamos uma segunda tabela apenas salvando os dados de quem alterou (como ip, nome, etc..)

**Imagens**

Optei por não fazer um upload de imagens pois percebi que o numero da pokedex de um pokemon é também o número da imagem dele no bucket oficial dos pokemons. Além do que isso garante uma velocidade maior para a minha aplicação e um gasto menor com um bucket na AWS além de ter que buscar e subir a imagem respectiva de cada um dos pokemons. 

**Escolha do banco** 
Foi cogitada a ideia de utilizar o MongoDB, porém a ideia de fazer relacionamentos em um NoSQL mesmo sendo possível quebra a necessidade de usar um NoSQL então preferi utilizar um banco de dados relacional, nesse caso o MySQL.

Transformei o .xlsx em um .json e a partir dele eu fiz uma migração uma controller de migração, para transformar em 3 tabelas diferentes além de ter uma tabela reserva com todos os dados do json unificados.

**Tabela de pokemons** 

Essa tabela contem todos os dados dos pokemons, como seu nome, atk, def, stam, stat_total e cp1 além do campo status e createdAt e updatedAt

Como chaves estrangeiras temos o campo type_1, type_2, weather_1, weather_2, esses campos armazenam apenas os ID de suas tabelas respectivas. 

**Como alguns pokemons estavam sem seu family_id preferi não criar uma tabela secundaria para fazer esse relacionamento, no momento a aplicação web utiliza daqueles que tem esse campo para trazer em tela as futuras evoluções de um pokemon** 

As outras duas tabelas são as de Types e Weathers e ambas contém apenas id e name além do timestamps de createdAt e updatedAt

**Deploy**

Para fazer deploy preferi utilizar o heroku pois no momento não estou com nenhum servidor VPS a disposição como os da digital ocean para fazer deploy. 

O admin ainda está meio cru e tem o que ser melhorado além de a aplicação necessitar que se passe mais das funcionalidades do front pra dentro do redux, como o filtro e a busca que devem ser transformados em components ainda. 

**[API](https://github.com/kennedy-f/pokedex-backend)**

A API se encontra  [nesse repositório](https://github.com/kennedy-f/pokedex-backend) e lá tem mais informações sobre a mesma. 

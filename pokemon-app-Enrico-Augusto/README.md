Sistema com a parte de front (vue.js) e back-end (node.js) com mongodb como banco de dados (NOQSL) . Nesse software você é capaz de cadastrar, excluir e visualizar Pokemons, seus habitats e o tipo de pokémon, tanto em uma api, caso prefira utilizar Postman, por exemplo. Como tambem é possível executar em uma interface que tambem está no projeto, a interface foi feita com vue e vuetify, para facilitar a criação de elementos de tela mais estilizados.

## Instalação

1. Crie uma pasta em sua área de trabalho onde o projeto estará bem guardado.
2. Faça um git clone do projeto nessa pasta que você acabou de criar.
3. O projeto terá a parte de front e de back separadas, para funcionar a parte de front teremos que executar a parte do back end, para isso é necessário que você possua o MongoDB instalado e rodando em sua máquina, assim como node. Caso não possua, faça a instalação de acordo com seu Sistema Operacional: https://docs.mongodb.com/manual/administration/install-community/
4. Para saber se o mongo está instalado em sua máquina, execute em seu terminal o comando <strong> mongod</strong>
5. Após confirmar que o mongodb está instalado, vá no seu diretório principal, abra o terminal do seu computador e certifique-se que realmente está na pasta pokemon-app-Enrico-Augusto, para isso você pode digitar o comando <strong> pwd </strong> no seu terminal.
6. Agora digite no seu terminal o comando <strong>npm install</strong>, isso instalará todas as dependencias que o projeto precisa para executar, criando uma pasta chamada node_modules.
7. Agora digite o comando <strong>npm start</strong>, isso iniciará a api em sua máquina e ela estará rodando na porta 4000. Caso acesse em seu browser localhost:4000/pokemon, poderá ver alguns registros em JSON dos pokemons que já estão cadastrados como teste.
8. Agora vamos iniciar o projeto no front end, vá até o diretório raiz e acesse a pasta <strong>view</strong>.
9. Agora basta digitar em seu terminal aberto nesse diretório o comando <strong>npm install</strong> isso instalará as dependencias do front end.
10. Por fim, digite o comando <strong>npm run serve</strong>, o vue executará e forncerá dois links para acessar, como exemplo:
  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.0.12:8080/
  
Basta acessar um dos links para acessar o projeto e lá voce terá acesso ao cadastro, exclusão e visualização do projeto em interface gráfica.

## Entendendo a lógica de habitat, tipo e pokemon
1- Você pode criar habitat e tipo de pokemons a vontade <strong>com nome e descrição</strong>.
2- Crie um pokemon e associe com esse algum tipo e habitat, não é necessário que um pokemon esteja associado a algum habitat, ou tipo.
3- Futuramente teremos acesso ao cadastro de habilidades de pokémons, onde estará disponivel um dashboard para comparação.

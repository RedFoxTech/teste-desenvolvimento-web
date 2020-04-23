# Tabela de Pokemons!!
E aí pessoal da Red Fox!

Projeto: MyPokeDex!

Funções:
- Adicionar novo Pokemon;
- Editar campos de informações do Pokemon;
- Remover Pokemon da lista;
- Paginação de 30 elementos por página;
- Ordenação por ordem crescente, descrescente e ordem alfabetica;

Adicionar:
    Ao tocar no botão ADD uma nova linha é adicionada;
Editar:
    Ao tocar um campo ele pode ser editado, ao clicar fora do campo ele é salvo;
Remover:
    Ao clicar no botão Remove, ativa o modo de remoção, então o usuário pode selecionar as linhas que quer remover, e então pressionar Remove novamente;
Páginação:
    Botões < e > navegam usuário em lista Pokemon a cada 30 elementos por página;
Ordenação:
    Ao clicar no botão com o nome da coluna, ela é ordenada em crescente, ao clica uma segunda vez, ordena em ordem decrescente, ao clicar novamente, volta a ordem baseada na Row.

    Para inicializar o projeto, após pull o projeto, no terminal comando: cd client/ && npm i && cd .. && npm i && yarn dev

    As requisições do serviço pelo front estão em ./client/src/API/Api.js
    Em ./client/src/App.js está todo gerenciamento de lógicas de negócio, e lógicas de view estão separadas dentro dos containers e components na pasta components.
    Toda logica do Node está em ./server.js, apis get -> api/pokemons, post -> api/add, post -> api/edit, post -> api/remove

Front: React
Back: Node
CSS: Materialize

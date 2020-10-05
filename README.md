#teste desenvolvimento web

O QUE É

É uma aplicação que permite gerenciar dados de um pokemón.

CONVENÇÕES UTILIZADAS

Foi utilizado eslint para a garantia de padronização e boas práticas.

Todas as classes e variáveis nomeadas em inglês

TECNOLOGIAS USADAS

Backend: MongoDB, Node.js

Frontend: React.js, Material-UI

O motivo das tecnologias de desenvolvimento escolhidas, foram por eu já ter um conhecimento sobre elas, por já ter realizado um pequeno projeto com as mesmas.

DESCRIÇÃO DAS FUNCIONALIDADES

Todos os endpoints da Api retornam mensagem de sucesso ou erro e o status code, as mensagens são mostradas pelo frontend através de um toast

Salvar (POST):Na Tela inicial canto superior esquerdo, tem um botão para cadastrar um novo pokémon, clicando nele abrirá um formulário. O programa permite salvar um número ilimitado de pokémons, porém o mesmo não permite salvar dois pokémons com o mesmo nome, o programa permite salvar ou não uma imagem para o pokémon, ao escolher salvar uma imagem o programa realiza o upload da mesma no serviço S3 da AWS e guarda somente o link referente a imagem no banco de dados(MongoDB).

Mostrar (GET): O programa exibe os pokémons na tela e permite o usuário clicar em qualquer um para mostrar os detalhes, o programa possui uma paginação que permite mostrar até 8 pokémons por vez, a paginação é feita pelo backend por uma função do banco de dados (MongoDB), onde o frontend manda no HEADER da request o número da página e a quantidade máxima de registros, o backend retorna os registros requisitados e o número total de registro no schema, para que o frontend possa mostrar o número de páginas dinamicamente.

Editar (PUT): O programa permite o usuário clicar no pekémon em que deseja alterar os dados, abrindo a tela de mostrar os detalhes. Após a tela ser aberta, no canto superior esquerdo aparecerá três opçoes, fechar: o programa fechara a tela de mostrar os detalhes e retornara para a tela inicial. Atualizar: ao clicar em atualizar o programa abre o mesmo formulário que é usado para cadastrar um novo pokémon, porém populando os campos com os dados do mesmo e deletar.

Excluir (DELETE): Após o usuário ter clicado no pokémon em que deseja alterar / excluir, clicando em excluir o programa apaga todo o registro do mesmo no banco de dados e também apaga a imagem do S3 AWS.

DEPLOY

O banco de dados foi hospedado no serviço de cloud MongoDB Atlas (https://www.mongodb.com/cloud/atlas), o deploy da API e do frontend foram feitos no Heroku (https://www.heroku.com/), cada um em seu app, ambos estão com CI/CD emplementados.

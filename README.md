# Desafio Pokemon

## Considerações Iniciais

Para o desenvolvimento desse desafio foi utilizado diversas tecnologias são elas:

 - Node + TypeScript;
 - React + TypeScript;
 - React + Bootstrap;
 - Knex;
 - Sqlite3;
 - Insomnia (Teste de API);
 - etc.
 
Falaremos resumidamente sobre cada uma quando esta for citada nos tópicos abaixo. 
Na hora de estudar como deveria ser feito esse desafio, tentei o máximo possível extrair as funcionalidades do arquivo excel, e tendo feito isso projetei fazer: Tela de Cadastro de Pokemon, Tela de Seleção dos Pokemons cadastrados ( exclusão, filtros e paginação estariam presente nessa tela ), além do mais a página de atualizar um Pokemon.

Para facilitar o desenvolvimento da aplicação, resolvi simplificar as colunas que estavam presente no excel, dessa maneira, essas foram as colunas que utilizamos:
#### INFORMAÇÕES DO POKEMON
-> id (Que aqui é a correspondente para ROW no arquivo base);
-> name (nome do Pokemon);
-> pokedex_number (Número da Pokedex);
-> image (Imagem do Pokemon);
-> generation (Geração do Pokemon);
-> evolution_stage (Estágio da evolução do pokemon);
-> family_id (Id da família);
-> atk (atk do Pokemon);
-> def (def do Pokemon);
-> sta (sta do Pokemon);
-> max_cp_at_40 (Max Cp no nível 40 (?));
-> max_cp_at_39 (Max Cp no nível 39(?));
#### INFORMAÇÕES DO TIPO
-> type1 (Id do Tipo 1 do Pokemon);
-> type2 (Id do Tipo 2 do Pokemon);
-> type_name (Nome do tipo do Pokemon);
-> type_image (Imagem do tipo do Pokemon);
#### INFORMAÇÕES DO TEMPO
-> weather1 (Id do Clima 1 do Pokemon);
-> weather2 (Id do Clima 2 do Pokemon);
-> weather_name (Nome do clima);
-> weather_image (Imagem do clima);

Essas informações já é um esboço do nosso banco de dados, teríamos uma tabela para armazenar as informações do Pokemon, uma tabela para armazenar os tipos, e outra para armazenar os climas.
As entidades pais seriam as tabelas weather e type, e a entidade fraca seria a pokemon, detalhe que as tabelas se relacionariam duas vezes  com a entidade fraca. Esse seria o diagrama entidade relacionamento que se aproximaria da situação programada.
![DER](https://imagizer.imageshack.com/v2/1184x597q90/924/BFEYUH.png)
![MER](https://imagizer.imageshack.com/v2/1058x597q50/924/Ch92lE.png)

Informações essenciais: STAT TOTAL é a soma dos 3 atributos (atk, def, sta) então essa informação não precisa ser armazenada no banco. type1 e type 2 são duas chaves estrangeiras da tabela type, notar que type 2 é opcional e a type 1 é obrigatória. O mesmo cenário acontece com o Weather. O campo 'image' em todas as entidades vai sempre se referenciar ao nome do arquivo de imagem, já que não é indicado armazenar arquivos dentro do banco de dados, nesse projeto, foi armazenado os uploads de imagem dentro da pasta 'uploads';
# Backend
Antes de falar das partes mais técnicas do desenvolvimento, vamos falar sobre as escolhas de IDEs e das linguagens. Para a ide foi usado o vscode. E como dito anteriormente, foi utilizado: o TypeScript junto com o NODE para o desenvolvimento do backend, para banco de dados utilizei o SQLite3, e para as  montagens de querys sql, foi utilizado o KNEX.

Não precisa-se muito para justificar a utilização do vscode, é um editor de código muito bom, com muitas extensões que auxiliam muito a criação dos scripts (além de ser meu editor favorito).

Agora a utilização do NODE + TypeScript, o TypeScript, também conhecido como o JS com super poderes, nos da ferramentas poderosas na hora do desenvolvimento, só de adicionar facilmente o intellisense já é um bom motivo para utilizar o TypeScript. E por mais que dizem que o TypeScript atrapalha quem está começando, eu não senti tanta dificuldade e por ser apenas o segundo projeto a desenvolver nessa linguagem deu para fazer algo bem bacana.

SQLite3 + KNEX, irei falar dessas duas ferramentas juntas pois elas estão muito conectadas, o SQLite3 é um banco SQL (ou seja, é relacional) só que não é necessário fazer toda a instalação do SGBD (Software de Gereciamento de Banco de Dados) para utiliza-lo, conseguimos criar tabelas, inserir dados, e tudo fica armazenado em um arquivo .sqlite, e usar essa ferramenta para testes é muito tranquilo.
E se o SQLite3 deixa a nossa vida tranquila com o BD, o KNEX vem nos ajudar ainda mais, pois com ele a criação das querys do banco de dados ('SELECT * FROM table_name') é tudo feio em sintax JavaScript, entao uma query como a anterior fica assim no KNEX:

    knex('table_name').select('*');
E acabou, basicamente é isso, e o melhor de tudo de utilizar o KNEX ele é um montador de querys padrão, então com o mesmo código, ele gera para você conexão para os mais diversos tipos de banco de dados sem precisar alterar a query, só é necessário ajustar nas configurações dele.

E falando rapidinho dos frameworks que utilizamos no backend vamos destacar alguns: o express, o path e o muter.
O express será essencial para o nosso trabalho com as rotas da nossa API, porque afinal estamos criando uma API que será fornecida para outras partes do nosso projeto como o frontend ( ou mobile caso fosse necessário). Então com o express conseguimos facilmente usar as rotas GET, POST, PUT , DELETE mais dentre outras rotas.
O path nos ajudará bastante com a utilização de criação de caminhos (ex: 'D:\Documentos\2020\projeto') porque ele montará para nós com a função path.resolve();
O MUTER será utilizado para trabalharmos com upload de imagem, quando a requisição GET chegar com um Multipart e com um arquivo de imagem, será com a ajuda dele que colocaremos na pasta desejada.

Agora de ter dado uma passada por praticamente todas as tecnologias que utilizamos no Backend vamos dar uma olhada rápida na estrutura da nossa aplicação.


## Instalação de Dependências
E antes de irmos para os códigos, é necessário ter as ferramentas para a execução do mesmo.
Assim, caso queria rodar o código tenha o node.js baixado no seu computador, você pode fazer a instalação pelo site do [Node](https://nodejs.org/en/download/) ou pelo gerenciador de pacotes seguindo os passos [desse link](https://nodejs.org/en/download/package-manager/).
Lembrando que é sempre recomendado fazer a instalação LTS (Long Term Support).

Agora de ter instalado o node, podemos abrir o nosso projeto, e um truque bem prático é você entrar via powerShell na pasta do projeto (usando o cd) e digitar o código:

    code .

Fazendo isso, automaticamente o vscode abrirá na pasta desejada.
Agora que abrimos o projeto podemos dar o comando 

    npm install

Para instalar todas as dependências que precisaremos, caso tenha algo de errado, é só abrir o arquivo: 'package.json' visualizar todas as dependências e baixa-las, lembrando que como estamos utilizando o typescript além de baixar os pacotes é necessário baixar os tipos, e é bom deixar os tipos como dependência de desenvolvedor, pois não utilizaremos eles quando a aplicação estiver em produção.

Depois de todos esses passos é só rodar o script para iniciar o servidor utilizando um dos códigos abaixo:

    yarn dev
    
    npm run dev


## Conexão com o Banco de Dados e Configurando Servidor
Para fazer a conexão com o banco, sem segredo, o KNEX deixa os scripts bem fáceis, você pode visualiza-los no arquivo: 'connection.ts' na pasta database
E a configuração do servidor NODE é feita no arquivo: 'server.ts'
## Criando as Migrations e as Seeds
As Migrations será utilizada aqui no projeto para a criação de tabelas, e ele tem a utilidade de deixar todos os desenvolvedores da mesma página, já que para a transferência de bancos é só fazer a execução das migrations e tudo estará igual. As migrations se encontram na pasta migrations dento da pasta database, é interessante destacar que cada arquivo de migration começa com número, isso serve para ter uma ordem de execução, por exemplo, para criar a tabela Pokemon, é necessário antes ter as tabelas type e wheater, sendo assim as migrations que irão criar essas tabelas devem ser executadas primeiro.
Em um Arquivo de migration é legal destacar que ele sempre terá duas funções, uma é a up e a outra a down, e sendo bem sugestivo, uma função é a que vai fazer a criação de tabelas e a outra irá destruir a tabela caso algo dê errado.
E como eu dito antes é só executar esse código abaixo para executar as migrations e ter suas tabelas criadas.

    npm run knex:migrate
ou

    yarn knex:migrate
As Seeds já é um conceito bem mais fácil de ser entendida do que as migrations, as seeds são as inserções padrões que temos no banco de dados, são nossos arquivos default, e nesse projeto teremos que inserir os valores padrões de type e weather.
E para fazer a execução dessa seed é só digitar um dos códigos abaixo:

    npm run knex:seed

ou

    yarn knex:seed

## Criação das Rotas
Criação das rotas, para conseguir acessar as rotas get, post e todas as outras , iremos utilizar o express, que nos ajudará muito para isso. E fica tudo bem simples, onde temos um arquivo routes.ts, onde armazenamos todos os GETS, POST, PUT, DELETE. E nesse arquivo recebemos os valores dos controllers, que é uma técnica para abstrairmos os diferentes gets, post, etc. Com ele teremos um arquivo para ter todos os gets/post/etc referente a tabela Pokemon, outro para a tabela Type e outro para a Weather. Tudo isso deixa nosso código mais organizado. E é basicamente isso.
## Lidando com o upload de imagens
Como em nossa aplicação terá a possibilidade do usuário enviar a foto do pokemon desejado, precisamos lidar com o upload de imagens, isso nos força a ter que usar Mulipart em requisições do tipo post para fazer a criação e update de pokemon. E para fazer toda a mágica de colocar os arquivos enviados na pasta 'uploads' usaremos o Muter, que apenas com poucas linhas fazemos isso acontecer.
## Testando o backend
O jeito mais legal de testar o backend é pelo frontend mas temos como fazer esse teste por outros softwares sem precisar de uma interface, e com isso temos o Insomnia (você pode utilizar qualquer software de mesma funcionalidade para isso, indico o Insomnia pois ao meu ver é o mais simples e fácil de trabalhar).
Ah, lembre sempre que quando for criar a requisição, a url será mais ou menos como essa:
'http://localhost:3333/'
# Frontend
Frontend foi utilizado o React + TypeScript, React + Bootstrap, React + Dropzone.
Para fazer as conexão com o backend utilizamos o axios.
Para rodar a aplicação é muito simples apenas rode o código abaixo:

    npm start

## Utilizando Rotas
Para fazer cada uma das páginas temos a ajuda do 'react-router-dom', que assim criaremos um arquivo chamado routes.tsx com todos os scripts, para fazer a conexão entre páginas e para colocar o conteúdo de uma página na tela.
## Criando as páginas
E o conteúdo das páginas estarão presente dentro da pasta pages, separado por cada página em uma pastar com um arquivo index.tsx, que esse retornará o conteúdo la para nossa página de rotas.
E a longa extensão desses arquivos são todos os componentes que colocamos com o bootstrap e com os inputs padrões do html.
## Colocando os componentes na tela
Para já termos parcialmente da estilização vamos utilizar o React + Bootstrap, que nos traz todos os componentes Bootstrap em formato de React, assim fica bem mais fácil a criação das páginas.
## Integração com o Backend
Para fazer a integração com o Backend vamos utilizar o axios, que nos trará as informações da api que acabamos de criar, dessa forma conseguimos colocar as informações dentro da nossa página, dentro dos nossos componentes
## Ajustes e implementando o Dropzone
Para fazer o upload da foto do pokemon, temos com o React Dropzone um componente muito legal que nos da a facilidade de "uploadar" os arquivo só os arrastando para a caixa.
Depois de implementar o dropzone, ajustes nos css e esta pronto nosso frontend.
# Conclusão
## Problemas encontrados
Durante a criação da aplicação, alguns problemas foram encontrados, muitos foram resolvidos logo de cara, mas outros demoraram mais, como por exemplo quais campos iriamos colocar como parâmetros? Os campos type e weather iria ser uma relação de muitos para muitos, ocasionando em uma tabela associativa? Problemas com o TypeScript, tudo isso foi obstáculos durante a criação do projeto.
## Problemas resolvidos
E muitos desse problemas nós conseguimos resolver, muitos dos erros que o TypeScript alertava era facilmente resolvido, muito pela intellisense nos ajudar bastante. As relações de type e weather resolvemos da seguinte forma (como já mostramos nos diagramas) a criação de duas relações, e identificando por alias, quando fazer o join na tabela select.

## Problemas que não foram resolvidos
Alguns problemas não conseguimos resolver :(
Como por exemplo a nossa página de atualizar pokemon, por alguns problemas não foi possivel implementar a atualização do pokemon pelo frontend, por mais que no backend tudo esteja funcionando, erros na integração dessa funcionalidade nos deixou sem atualização de pokemon pelo frontend.
## Conhecimentos adquiridos e Considerações finais
Muitos dos problemas que tive, foram com o React, a part do frontend, por ser apenas meu segundo projeto utilizando o React tive algumas dificuldades, mas mesmo não conseguindo implementar todas as funções que eu gostaria, sinto que ficou um projeto bacana, que agregou muito para continuar minha evolução em aprender dessa Stack, que hoje já é minha favorita.
## Créditos
Filipe Lacerda Santos 
Estudante de Engenharia da Computação 
FIAP 3º Ano - 2020
[GitHub](https://www.github.com/fifo123)
[LinkedIN](https://www.linkedin.com/in/filipe-lacerda/)
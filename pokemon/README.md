# Desafio Pokémon

Front-end foi desenvolvido usando ReactJS, Redux, JavaScropt, Material-ui, HTML, CSS, Styled-Components, NodeJS para gerenciador de pacotes e hospedado no AWS s3.

Back-end foi desenvolvido usando NodeJS, Express, TypeScript e MySQL. 
    Back-end foi divido em camadas;
        -Presentation: Resposável pela comunicação com agentes externos.
        -Data: Responsável pela comunicação direta com o banco de dados.
        -Business: Responsável pela lógica.


## Sobre

Funcionalidades do front-end e do back-end;

No Front-end
- listar os pokémons
- Cadastrar pokémons
- Deletar pokémons

No Back-end, temos
-Listar pokémons
-Cadastrar pokémons
-Buscar pokémons por nome ou pokedexID
-Deletar
-Atualizar


## Introduções para rodar

# FRONT:

Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em sua máquina, basta abrir o terminal e navegar até o repositório clonado e rodar:

npm install para instalar todas as dependências;

npm run start para rodar localmente o projeto

npm run build para gerar uma versão estática do projeto (que ficará na pasta build)



# BACK:

npm install para instalar todas as dependências; npm run start para rodar localmente o projeto npm run build para gerar uma versão possível de ser deployada com os arquivos transpilados para Javascript Utiliza o env com os dados:

HOST= USER= PASSWORD= DATABASE= CLIENT= 


## Observações

Não consegui implementar todas as funcionalidades passadas no back para o front.


## Links para acessar o projeto

Documentação Postman

https://documenter.getpostman.com/view/9731865/T17AjWKm?version=latest

Front-end hospedado no AWS

http://pokedex-teste.s3-website-us-east-1.amazonaws.com/

Back-end hospedado no Heroku

https://pokeapiteste.herokuapp.com/



##Contato

João Marcelo Santini

jmsantini@live.com

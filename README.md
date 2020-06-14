# Desafio Pokemon

### Considerações Iniciais

Para o desenvolvimento desse projeto foram utilizadas as seguintes tecnologias:

## Stack Back-End
- TypeScript
- NodeJs
- Express
- Knex
- SQL
- MySql
- AWS
- CORS
- Dotenv
 
Eu optei utilizar TypeScript com Node no BackEnd pois o  TypeScript adiciona tipagem e alguns outros recursos, o que o torna mais completo do que o JavaScript. Utilizei o Express pois, na etapa de planejamento deste projeto, projetei as rotas para que sejam utilizadas pelo FrontEnd de uma forma prática e completa. Com ele é possível criar CRUDs além de outros métodos menos utilizados.

Para o banco de dados eu utilizei o MySql e realizei o deploy na AWS, conhecida por oferecer um serviço robusto, rápido e seguro.


# IDE e Estruturação do Projeto

Decidi fazer uso do VSCode, uma ferramenta gratuita desenvolvida pela Microsoft e muito completa que nos permite adicionar extensões que facilitam(e muito!) a vida de um desenvolvedor. Desde ferramentas, suporte para depuração, controle Git incorporado, recurso de auto completar incorporado, snnippets dentre outros recursos bastante úteis.

Para instalar e executar o projeto a primeira coisa que deve ser feita é, na raiz do mesmo, abrir o powerShell(precisa ter o Node instalado) e executar a seguinte linha de comando:

>npm instal 

ou, de forma simplificada

>npm i

Isso irá garantir que todas as dependências do projeto serão instaladas localmente. 

Após a instalação, o próximo procedimento será executar a linha abaixo:

>npm start

O VSCode irá rodar a aplicação localmente e o link e porta serão mostrados ao final do processo. 

## Teste do backend

O teste pode ser realizado pelo Postman de forma simples e prática. Primeiro passo é iniciar uma novo método e, para exemplificar, usaremos o GET.

No campo do link, utilizaremos o seguinte:

https://sec9w2ixle.execute-api.us-east-1.amazonaws.com/v1/PokemonGo

Na guia de Query Params utilizaremos a KEY de nome page e no VALUE colocaremos o número da página com os dados a serem exibidos. Como há uma paginação que mostra 10 resultados por vez,  o resultado será mostrar os Pokémons de 1 ao 10 quando utilizamos o VALUE 1, por exemplo. A ultima página até o momento é a 83.

Para testar o endPoint de deletar Pokémon, o procedimento é semelhante.
Utilizaremos o link

https://sec9w2ixle.execute-api.us-east-1.amazonaws.com/v1/Pokemons/deletePokemon

e na aba Body colocaremos o seguinte objeto onde x é o número da ID do Pokémon no banco de dados

>{
    "pokemonId": x
}

Em caso de número incorreto da ID a seguinte mensagem aparecerá

>"Id informada não existe no banco de dados"


## Considerações finais

O projeto ficou bem completo e além de substituir a planilha por um banco de dados robusto, ainda foi realizado o deploy na AWS. O projeto é modular e oferece a  possibilidade de expansão de forma prática devido a arquitetura utilizada.

Este é meu primeiro projeto completo no BackEnd e tudo que posso dizer é que valeu cada minuto investido em estudos. 

# Contato
##### Vitor Soares Lopes
##### [LinkedIN](https://www.linkedin.com/in/vitor-soares-lopes/)
##### [GitHub](https://github.com/vitor-slopes)


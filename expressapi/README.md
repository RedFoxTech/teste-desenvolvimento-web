# RedFox.Pokedex

## Informação do projeto

A estrutura do projeto inclui:

- Banco de dados com MongoDB Atlas. Para inicializar o banco de dados pode executar o script na pasta mongodb-import.
- Backend com Express construído em uma arquitetura hibrida de DDD+MVC+Camadas. Os pacotes das camadas mais baixas nunca devem chamar pacotes das camadas mais altas. O desenvolvimento dos pacotes foi direcionado a interfaces (Clean Code). Cada modulo/pacote tem sua própria interface e isso significa que se alguma coisa mudar internamente no pacote, isso não vai quebrar a aplicação inteira. O backend está localizado em expressapi. A pasta expressapi vem com um arquivo de configuração Insomnia_API_endpoint_test.json para ser usado com o Insomnia.
- Frontend com React.js e Materialize. Está localizado na pasta client dentro de expressapi.

## Execução do projeto

Para inicializar o banco de dados abra uma instancia do VScode na pasta mongodb-import, configure o .env.example com detalhes sobre o MongoDB Atlas e renomeie para .env, e digite:

    npm install
    npm start

Para iniciar a API pode abrir a pasta expressapi no VScode, e digitar:

    npm install
    npm start

Abra outra instancia do VScode e abra a pasta client, e digite:

    npm install
    npm start

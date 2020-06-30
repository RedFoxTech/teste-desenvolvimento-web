# LAMBDA + API GATEWAY + EXPRESS TEMPLATE

## EM QUAIS ARQUIVOS É PROIBIDO MEXER?

Não mexa nesses arquivos:

1. `src/lambda/*` (ou seja, em nenhum arquivo dentro dessa pasta)
1. `src/local/*` (ou seja, em nenhum arquivo dentro dessa pasta)

## Rodando localmente

Use o comando:

```
npm run start:dev
```

## Deploy em uma Lambda

Você deve começar criando um build do projeto

```
npm run build
```

Então, subir o arquivo compactado `lambda.zip` que foi gerado nesse processo na função de Lambda que você quiser usar

## Como eu crio um novo endpoint?

Esse projeto é baseado em uma arquitetura em camadas, divida em três:

- Business: contém todas as lógicas de negócio e a modelagem dos dados
  principais

- Data: responsável pela comunicação no banco que, neste caso, é um MySQL

- Presentation: cuida de transformar os dados de entrada e saída nos modelos
  apropriados

Quando for criar um endpoint, certifique-se que passou por todos esses passos:

[] Verifique se precisará criar uma nova entidade ou modificar alguma já existente.
Uma entidade é um modelo que representa alguma informação na nossa regra de negócios (`src/business/entity`)

[] Comece criando o use case com o nome apropriado na pasta `src/business/usecase`.
Lembre-se de criar um novo Gateway (`src/business/gateway`) ou alterar algum existente se precisar se comunicar com o banco, já que utilizamos inversão de dependências

[] Realize as implementações do banco necessárias alterando alguma classe já existente (`src/data`). Se for mexer com uma tabela nova, crie uma nova classe na pasta que seja filha da classe `BaseDatabase` e implemente ao menos algum Gateway

[] Crie um novo endpoint na presentation em `src/presentation/endpoint` e, então, crie uma nova rota do express no arquivo `src/presentation/routes`

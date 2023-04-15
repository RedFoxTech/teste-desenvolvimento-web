# Teste de Desenvolvimento Web  ✨

## Sobre o Desafio
```
Nós temos um problema, atualmente nosso sistema é só um excel, cheio de informações sobre Pokémon. Nós usamos ele como banco de dados e ao mesmo tempo interface de gerenciamento, inserindo, editando, deletando e filtrando os dados.

A missão é criar um sistema para substituir este excel, pois queremos expandir e acrescentar funcionalidades. Queremos manter o básico, mas principalmente queremos uma forma prática e agradável de buscar os dados, com listagem, filtros, paginação e detalhes sobre cada Pokémon.
```

## Solução
```
Para resolver o problema da planilha Excel, desenvolvi uma aplicação fullstack. Utilizei algumas das pricipais linhas e colunas da planilha como modelo. Nessa aplicação o usuário poderá criar uma conta e inserir seus pokémons, assim como também editar, deletar, listar e filtrar seus pokémons.
```

## Tecnologias e Ferramentas utilizadas 🔥
  - React
  - Material UI
  - Node.js (Javascript) 
  - Typescript
  - Mysql
  - Prisma.io
  - JWT (jsonwebtoken)
  - Docker
  - Eslint
  - env
  - bcrypt




# Executando o projeto 🚀
  
  ### Realize o clone do projeto.  Certifique-se de usar a branch "MatheusAraujo"
  ```
  git clone git@github.com:MatheusAraujoDev/teste-desenvolvimento-web.git
  ```

 ## BACKEND

  ### Requisitos ⚙️
    - Docker
    - Nodejs (v18.x)
    - Package managment (npm)


1. Navegue até a pasta do frontend usando o comando `cd backend`
2. Execute o comando `npm install`
3. Renomeie o arquivo `.env.example` para `.env`.
4. Inicie o Docker (certifique-se que esteja com o MySql desligado caso tenha instalado, para não dar conflito na porta) e execute os seguintes comandos:
#### Certifique-se de estar na pasta raiz do `backend`

```
docker build -t mysql .
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql
```

5. Sincronize o prisma com o banco de dados usando o seguinte comando:
```
npx prisma db push
```

6. Inicie o servidor do backend usando o comando:
```
npm run dev
```

  ## FRONTEND

1. Navegue até a pasta do frontend usando o comando
```
cd frontend
```
2. Execute o comando
```
npm install
```
3. Execute o comando para iniciar o frontend.
```
npm run dev
```



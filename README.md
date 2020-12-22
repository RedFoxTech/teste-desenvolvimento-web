### Observação teste
_____________________
-Teste realizado utilizando:
MongoDB,Node.js,React.js

-BackEnd:
Finalizei atingindo o objetivo solicitado no teste.

-FrontEnd:
Realizei a integração com o backend e está apenas retornando os registros do banco.
Por conta do prazo de entrega, faltou alguns ajustes na interface e a execução de algumas funcionalidades (paginação, cadastro, edição e busca).

### Dependências:
-----------------
Gerenciamento de pacotes (Npm install).

## BackEnd
    "body-parse": "^0.1.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongodb": "^3.6.3",
    "mongoose": "^5.11.8"

## FrontEnd
"@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.0",
    "bootstrap": "^4.5.3",
    "jquery": "^3.5.1",
    "node-sass": "^4.14.0",
    "popper.js": "^1.16.1",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.0",
    "react-dom": "^17.0.1",
    "react-icons": "^4.1.0",
    "react-scripts": "4.0.1",
    "reactstrap": "^8.7.1",
    "styled-components": "^5.2.1",
    "web-vitals": "^0.2.4"
    --------------------------------------------------------------------------
### Executar Projeto BackEnd (Teste)
____________________________________
### - Executar backend
  Comando: cd app.js / nodemon app.js

###  - Testar BackEnd
  Banco de Dados: MongoDB (DB:TesteRedFox / Table:pokemons)

  Insominia: Criar "New Request" com métodos de requisição HTTP com a url: http://localhost:3333 porta em que a api esta executando.

  Json:
  {
	"id_pokemon": "25",
	"img_pokemon": "25",
	"name_pokemon": "Pikachu",
  "generation": "1",
  "evolution_stage": "1",
  "type_1": "Eletric",
  "type_2": "Raio",
	"weather": "Rainy",
  "ATK": "283",
  "DEF": "117"
}

### Executar Projeto FrontEnd (Teste)
_____________________________________

### - Executar frontend
  Comando: cd src / npm start

  obs: porta 3000 (http://localhost:3333)
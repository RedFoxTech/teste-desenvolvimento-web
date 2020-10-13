/**
 * Arquivo: Server.js
 * autor: bnuno pessoa nunes de melo
 * @version: 1.0.0;
 * 
 * Descrição: Aqui será o arquivo para criação do servidor. O primeiro passo
 * foi instalar os modulos do express, body-parser e cors.
 * 
 * Express é para a construção dso serviços REST para API.
 * o Body-Parser ajuda para que o parse realiza as requisições e crie o objeto do req.body
 * O Cors provêm o Express middleware para habilitar o Cors com várias opções.
 * 
 * Foi criado um Express app, em seguinda adicionamos o body-parser e o middleware cros usando o método
 * app.use(). Foi adicionado um porta http:localhost:8081
 * 
 * definimos um método uma rota GET no qual foi feita apenas para teste.
 * 
 */


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("../backend/models");

//db.sequelize.sync();
// // derrubar a tabela se ela existir
 //db.sequelize.sync({ force: true }).then(() => {
   //console.log("Drop and re-sync db.");
 //});

// rota simples
app.get("/", (req, res) => {
  res.json({ message: "Bem vindo ao Reac PokeApp!." });
});

require("../backend/routes/pokemon.routes")(app);

// setar a porta para as requisições. 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
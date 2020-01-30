var restify = require('restify');
var corsMiddleware = require("restify-cors-middleware");  
var pokeBD = require('./pokemonController');

//Configurando o servidor
var server = restify.createServer();
server.use(restify.plugins.bodyParser({ mapParams: true }));

//CORS
const cors = corsMiddleware({  
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

server.pre(cors.preflight);  
server.use(cors.actual);  


//Conectando ao banco
pokeBD.connect();


//Get todos os Pokemons
server.get('/getPokemons', async function(req, res, next){
    await pokeBD.getPokemons();
    const data = pokeBD.getData();
    res.send(data);
    next();
});

//Search por um pokemon (ou mais)
server.get('/getPokemons/:name', async function(req, res, next){
    var nomePokemon = req.params.name;
    await pokeBD.searchPokemons(nomePokemon);
    var data = pokeBD.getData();
    res.send(data);
    next();
});

//Pegar pokemon pelo id
server.get('/getPokemonId/:id', async function(req, res, next){
  var id = req.params.id;
  await pokeBD.getPokemonById(id);
  var data = pokeBD.getData();
  res.send(data);
  next();
})

///Cadastra um novo Pokemon
server.post('/cadPokemon', async function(req, res, next){
    var pokemon = req.params;
    await pokeBD.cadPokemon(pokemon);
    res.send(pokemon);
    next();
})

//Update um pokemon
server.put("/updatePokemon", async function(req, res, next){
    var pokemon = req.params;
    await pokeBD.updatePokemon(pokemon);
    res.send(pokemon); 
    next();
});

//Delete Pokemon
server.del('/delPokemon/:id', async function(req, res, next){
    var id = req.params.id;
    await pokeBD.delPokemon(id);
    res.send(id);
    next();
})


//DEFINE A PORTA DA API
server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
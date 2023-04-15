const http = require('http');
const {
  getPokemons,
  getPokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
  getPokemonByName
} = require('../controllers/pokemonController');


const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/api/pokemons' && req.method === 'GET') {
    getPokemons(req, res);
  } else if (req.url.match(/\/api\/pokemons\/\w+/) && req.method === 'GET') {
    const id = req.url.split('/')[3];
    const name = req.url.split('/')[4];
    if (name) {
      getPokemonByName(req, res, name)
    }
    else {
      getPokemon(req, res, id);
    }
  } else if (req.url === '/api/pokemons' && req.method === 'POST') {
    createPokemon(req, res);
  } else if (req.url.match(/\/api\/pokemons\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3];
    updatePokemon(req, res, id);
  } else if (req.url.match(/\/api\/pokemons\/\w+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3];
    deletePokemon(req, res, id);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route Not Found: Please use the api/pokemons endpoint',
      })
    );
  }
});

module.exports = { server }
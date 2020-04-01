import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import { getPokemonsEndpoint } from "./presentation/endpoints/getPokemons";
import cors from "cors"
import { getQuantityOfPagesEndpoint } from "./presentation/endpoints/getQuantityOfPages";
import { getPokemonByNameOrNumberEndpoint } from "./presentation/endpoints/getPokemonByNameOrNumber";
import { getPokemonByIdEndpoint } from "./presentation/endpoints/getPokemonById"

const app = express();
app.use(express.json(), cors());

app.get('/', (req: Request, res: Response) => {
  const info = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
    }
  };
  res.send(info)
});

app.post('/pokemons', getPokemonsEndpoint)
app.get('/pages', getQuantityOfPagesEndpoint)
app.get('/pokemons/:nameOrNumber', getPokemonByNameOrNumberEndpoint)
app.get('/pokemon/:pokemonId', getPokemonByIdEndpoint)

const server = app.listen(process.env.PORT || 3333, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
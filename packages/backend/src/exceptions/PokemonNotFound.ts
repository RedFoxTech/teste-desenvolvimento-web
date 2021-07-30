
import HttpException from './HttpException';

class PokemonNotFound extends HttpException {
  constructor() {
    super(404, `Pokémon não encontrado!`);
  }
}

export default PokemonNotFound;


import HttpException from './HttpException';

class PokemonAlreadyExists extends HttpException {
  constructor(name: string) {
    super(406, `Já existe um Pokémon com o nome ${name}!`);
  }
}

export default PokemonAlreadyExists;

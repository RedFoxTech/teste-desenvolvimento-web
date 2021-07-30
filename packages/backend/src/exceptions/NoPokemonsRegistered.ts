
import HttpException from './HttpException';

class NoPokemonsRegistered extends HttpException {
  constructor() {
    super(404, `Não há nenhum Pokémon registrado no sistema!`);
  }
}

export default NoPokemonsRegistered;

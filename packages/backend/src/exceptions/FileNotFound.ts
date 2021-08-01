
import HttpException from './HttpException';

class fileNotFound extends HttpException {
  constructor() {
    super(404, `O arquivo de onde importamos Pokémons não foi encontrado!`);
  }
}

export default fileNotFound;

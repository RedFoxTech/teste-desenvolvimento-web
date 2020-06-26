import path from 'path';
import fs from 'fs';

import Pokemon from '../models/Pokemon';
import uploadConfig from '../../config/upload';

class UpdatePokemonImageController {
  async update(request, response) {
    const imageFileName = request.file.filename;
    const { id } = request.params;
    const pokemon = await Pokemon.findById(id);

    if (!pokemon) {
      return response.status(400).json({ error: 'Pokemon not found' });
    }

    if (pokemon.image) {
      // Delete old image
      const pokemonImageFilePath = path.join(
        uploadConfig.directory,
        pokemon.image
      );
      const pokemonImageExists = await fs.promises.stat(pokemonImageFilePath);

      if (pokemonImageExists) {
        await fs.promises.unlink(pokemonImageFilePath);
      }
    }
    const pokemonUpdate = await Pokemon.findOneAndUpdate(
      id,
      { image: imageFileName },
      { new: true }
    );

    return response.json(pokemonUpdate);
  }
}

export default new UpdatePokemonImageController();

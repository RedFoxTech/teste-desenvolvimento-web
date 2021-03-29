const { compressImage } = require("../../../drivers/imageStoreSettings/sharp");
const { deleteAllUploadImages, deleteUploadImage } = require('../../../utils/deleteUploadImage');

class PokemonController {
  constructor({ pokemonServices }) {
    this.pokemonServices = pokemonServices;
  }

  async store(req, res) {
    const data = req.body;
    const userId = req.userId;

    const { filename } = req.file;
    const [ originaFileName ] = filename.split('.');
    const imageName = `${originaFileName}.webp`;

    try {
      if ((await this.pokemonServices.existsPokemon({ name: data.name, userId }))) {
        return res.status(401).json({ error: 'Pokemon with name alredy exists'});
      }

      if (filename) {
        await compressImage(req.file, 300);
      } else {
        return res.status(400).json({ error: 'A pokemon image is needed'});
      }

      await this.pokemonServices.create({ userId, imageName, ...data });

      return res.status(201).json({ message: 'Pokemon created with success'});
    } catch(err) {
      return res.status(500).json({ error: 'Internal server error'});
    }
  }

  async delete(req, res) {
    const { id }= req.params;
    const userId = req.userId;

    try {     
      if (!(await this.pokemonServices.existsPokemonById({ pokemonNumber: id, userId }))) {
        return res.status(404).json({ error: 'Pokemon not found'});
      }

      const imageName = await this.pokemonServices.dropPokemon({ pokemonNumber: id, userId });
      deleteUploadImage(imageName);

      return res.status(200).json({ message: 'Pokemon was successfully deleted'});
    } catch(err) {
      return res.status(500).json({ error: 'Internal server error'});
    }
  }

  async deleteAll(req, res) {
    const userId = req.userId;

    try {
      await this.pokemonServices.dropAllPokemons({ userId });
      deleteAllUploadImages(userId);
    
      return res.status(200).json({ message: 'Pokemons was successfully deleted'});
    } catch(err) {
      return res.status(500).json({ error: 'Internal server error'});
    }
  }

  async update(req, res) {
    const data = req.body;
    const { id } = req.params;
    const userId = req.userId;

    try {   
      if (!(await this.pokemonServices.existsPokemonById({ pokemonNumber: id, userId }))) {
        return res.status(404).json({ error: 'Pokemon not found'});
      }

      await this.pokemonServices.updatePokemon({ 
        pokemonNumber: id,
        userId,
        newData: {...data},
      });

      return res.status(200).json({ message: 'Pokemon was successfully updated'});
    } catch(err) {
      return res.status(500).json({ error: 'Internal server error'});
    }
  }

  async getAll(req, res) {
    const { page = 1, type, weather, min_stat, max_stat, above_stat } = req.query;
    const userId = req.userId;

    try {
      const pokemons = await this.pokemonServices.getAllPokemons({
        userId,
        page, type, weather,
        minStatTotal: min_stat,
        maxStatTotal: max_stat,
        aboveStat: above_stat
      });

      return res.status(200).json({ pokemons });
    } catch(err) {
      return res.status(500).json({ error: 'Internal server error'});
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const userId = req.userId;

    try {
      const pokemon = await this.pokemonServices.getPokemon({ pokemonNumber: id, userId });
      
      return res.status(200).json({ pokemon });
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error'});
    }
  }

  async updateImage(req, res) {
    const { id } = req.params;
    const { filename } = req.file;
    const userId = req.userId;
   
    const [ originaFileName ] = filename.split('.');
    const imageName = `${originaFileName}.webp`;

    try {   
      if (!(await this.pokemonServices.existsPokemonById({ pokemonNumber: id, userId }))) {
        deleteUploadImage(imageName);
        return res.status(404).json({ error: 'Pokemon not found'});
      } 
      
      if (filename) {
        await compressImage(req.file, 300);
      } else {
        return res.status(400).json({ error: 'A pokemon image is needed' });
      }

      const oldImageName = await this.pokemonServices.getOldPokemonImage({ pokemonNumber: id, userId });
      await this.pokemonServices.updatePokemonImage({ pokemonNumber: id, userId, imageName });

      deleteUploadImage(oldImageName)

      return res.status(200).json({ message: 'Pokemon image was successfully updated'})
    } catch(err) {
      return res.status(500).json({ error: 'Internal server error'});
    }
  }
}

module.exports = PokemonController;
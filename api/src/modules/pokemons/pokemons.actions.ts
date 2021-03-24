import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { PokemonsService } from './pokemons.service';

import { CreatePokemonDTO } from './dto/createPokemon.dto';
import { UpdatePokemonDTO } from './dto/updatePokemon.dto';
import { Pokemon } from 'src/shared/database/entities/pokemon';

@Injectable()
export class PokemonsActions {
  constructor(private readonly pokemonsService: PokemonsService) {}

  async create(createPokemonDTO: CreatePokemonDTO) {
    const pokemonAlreadyExists = await this.pokemonsService.checkIfPokemonIsRegistered(
      createPokemonDTO.name,
      createPokemonDTO.pokedexNumber,
    );

    if (pokemonAlreadyExists) {
      throw new ConflictException('pokemon already registered');
    }

    const pokemon = await this.pokemonsService.store(createPokemonDTO);
    return pokemon;
  }

  async list(page: number, limit: number) {
    return this.pokemonsService.paginate({ page, limit });
  }

  async show(pokemonId: number) {
    const pokemon = await this.pokemonsService.findById(pokemonId);
    if (!pokemon) {
      throw new NotFoundException('pokemon not found');
    }
    return pokemon;
  }

  async update(pokemonId: number, updatePokemonDTO: UpdatePokemonDTO) {
    const pokemon = await this.pokemonsService.findById(pokemonId);
    if (!pokemon) {
      throw new NotFoundException('pokemon not found');
    }

    for (const [key, value] of Object.entries(updatePokemonDTO)) {
      if (value === undefined) {
        delete updatePokemonDTO[key];
      }
    }

    // If DTO is empty
    if (Object.entries(updatePokemonDTO).length === 0) {
      return pokemon;
    }

    return this.pokemonsService.updateFields(pokemon, updatePokemonDTO);
  }

  async changeImage(pokemonId: number, file: Express.Multer.File) {
    const pokemon = await this.pokemonsService.findById(pokemonId);

    if (!pokemon) {
      throw new NotFoundException('pokemon not found');
    }

    if (!file) {
      try {
        await this.pokemonsService.deleteImageFromStorage(pokemon);
        return await this.pokemonsService.setImageName(pokemon, null);
      } catch (error) {
        throw new BadRequestException('image already deleted');
      }
    }
    return this.pokemonsService.setImageName(pokemon, file.filename);
  }

  async delete(pokemonId: number) {
    const pokemon = await this.pokemonsService.findById(pokemonId);

    if (!pokemon) {
      throw new NotFoundException('pokemon not found');
    }

    return this.pokemonsService.delete(pokemon);
  }
}

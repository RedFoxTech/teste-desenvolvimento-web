import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';

import { paginate, IPaginationOptions } from 'nestjs-typeorm-paginate';

import { Pokemon } from '../../shared/database/entities/pokemon';

import { CreatePokemonDTO } from './dto/createPokemon.dto';
import { UpdatePokemonDTO } from './dto/updatePokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async checkIfPokemonIsRegistered(name: string, pokedexNumber: number) {
    const qb = this.pokemonRepository.createQueryBuilder('pokemon');

    const found = await qb
      .select()
      .where('pokemon.name = :name', { name })
      .orWhere('pokemon.pokedexNumber = :pokedexNumber', { pokedexNumber })
      .getCount();
    return found;
  }

  async store(createPokemonDTO: CreatePokemonDTO) {
    const pokemon = this.pokemonRepository.create(createPokemonDTO);
    await this.pokemonRepository.save(pokemon);
    return pokemon;
  }

  async paginate(options: IPaginationOptions) {
    const qb = this.pokemonRepository.createQueryBuilder('pokemon');
    qb.select([
      'pokemon.id',
      'pokemon.name',
      'pokemon.pokedexNumber',
      'pokemon.imgName',
      'pokemon.type1',
    ]);
    return paginate<Pokemon>(qb, options);
  }

  async findById(id: number) {
    return this.pokemonRepository.findOne({ where: { id } });
  }

  async deleteImageFromStorage(pokemon: Pokemon) {
    return new Promise((resolve, reject) => {
      fs.unlink(
        path.resolve(process.cwd(), 'uploads', 'images', pokemon.imgName),
        (err) => {
          if (err) {
            if (err.code === 'ENOENT') {
              resolve(null);
            }
            return reject(err.code);
          }
          return resolve(null);
        },
      );
    });
  }

  async updateFields(pokemon: Pokemon, updatePokemonDTO: UpdatePokemonDTO) {
    await this.pokemonRepository.update(pokemon, updatePokemonDTO);
    return this.findById(pokemon.id);
  }

  async setImageName(pokemon: Pokemon, imageName: string) {
    pokemon.imgName = imageName;
    await this.pokemonRepository.save(pokemon);
    return pokemon;
  }

  async delete(pokemon: Pokemon) {
    await this.deleteImageFromStorage(pokemon);
    await this.pokemonRepository.delete(pokemon);
    return pokemon;
  }
}

/* eslint-disable require-jsdoc */
import CRUDAbstract from '../declarations/abstracts/CRUD';
import Pokemon from '../declarations/interfaces/Pokemon';
import InternalServerError from '../exceptions/InternalServerError';
import NoPokemonsRegistered from '../exceptions/NoPokemonsRegistered';
import PokemonAlreadyExists from '../exceptions/PokemonAlreadyExists';
import PokemonNotFound from '../exceptions/PokemonNotFound';
import PokemonModel from '../models/Pokemon';
import PokemonSchema from '../schemas/Pokemon';

/**
 * @module packages/backend/repositories/pokemon
 * @extends packages/backend/src/repositories/CRUD
 * @since 30/07/2021
 * @version 0.0.1
 */

class PokemonRepository extends CRUDAbstract {
  /**
   * @description POST, deve retornar 201 em sucesso
   * @param {Pokemon} data
   */
  async create(data: Pokemon): Promise<PokemonModel> {
    const {name} = data;
    const exists = await PokemonSchema.findOne({name}, {lean: true}).lean();

    if (exists) {
      throw new PokemonAlreadyExists(name);
    }

    const newPokemon = await PokemonSchema.create(data);
    return newPokemon;
  }

  /**
   * @description GET, deve retornar 200 em sucesso
   * @param {string|any} unsafeId
   */
  async read(unsafeId: string): Promise<PokemonModel> {
    try {
    const id = String(unsafeId || '');
    // Retorna o modelo de Pokemon com todas as propriedades
    const pokemon = await PokemonSchema.findOne({_id: id}).lean();

      if (!pokemon) {
        throw new PokemonNotFound();
      }

      return pokemon;
    } catch (error) {
      throw new InternalServerError();
    }
  }

  /** GET, deve retornar 200 em sucesso */
  async readAll(): Promise<Array<PokemonModel>> {
    try {
      const pokemon = await PokemonSchema.find();

      if (!pokemon || pokemon.length === 0) {
        throw new NoPokemonsRegistered();
      }

      return pokemon;
    } catch (error) {
      if (error instanceof NoPokemonsRegistered) {
        throw error;
      } // else
      throw new InternalServerError();
    }
  }

  /**
   * @description PUT, deve retornar 200 em sucesso e ter todas as
   * propriedades
   * @param {Pokemon} data
   */
  async updateAll(data: Pokemon): Promise<PokemonModel> {
    try {
      const {_id} = data;

      const updatedPokemon = await PokemonSchema.findByIdAndUpdate(
          _id,
          data,
          {new: true, lean: true},
      );

      // verifica se o pokémon foi atualizado
      if (!updatedPokemon) {
        throw new PokemonNotFound();
      }

      return updatedPokemon;
    } catch (error) {
      if (error instanceof PokemonNotFound) {
        throw error;
      } // else
      throw new InternalServerError();
    }
  }


  /**
   * @description PATCH, deve retornar 200 em sucesso e ter todas as
   * propriedades
   * @see {@link module:packages/backend/validatedDTOs/PokemonPartialDTO}
   * @param {Pokemon} data
   */
  async updatePartial(data: Pokemon): Promise<PokemonModel> {
    try {
      const {_id} = data;
      const pokemon = await PokemonSchema.findOne({_id}, {lean: true});

      // remove todas as propriedades presentes em data de pokemon
      const remainingData = Object.assign({}, pokemon, data);
      // preenche data com as propriedades de pokemon
      const updatedPokemonData = Object.assign({}, remainingData, data);

      if (!pokemon) {
        throw new PokemonNotFound();
      }

      const updatedPokemon = await PokemonSchema.findByIdAndUpdate(
          _id,
          data,
          {new: true, lean: true},
      );

      // verifica se o pokémon foi atualizado
      if (!updatedPokemon) {
        throw new PokemonNotFound();
      }

      return updatedPokemon;
    } catch (error) {
      if (error instanceof PokemonNotFound) {
        throw error;
      } // else
      throw new InternalServerError();
    }
  }

  /**
   * @description DELETE, executa uma lean query e deve retornar 200 em
   * sucesso
   * @param {string|any} unsafeId
   */
  async delete(unsafeId: string): Promise<boolean> {
    try {
      const id = String(unsafeId || '');
      const deleted = await PokemonSchema.findByIdAndRemove(id, {lean: true});

      // verifica se o pokémon foi deletado
      if (!deleted) {
        throw new PokemonNotFound();
      }

    return Boolean(deleted);
} catch (error) {
    console.log(error.message);
    if (error instanceof PokemonNotFound) {
        throw error;
      } // else
      throw new InternalServerError();
    }
  }
}

export default PokemonRepository;

/* eslint-disable require-jsdoc */
import CRUDWithAllAbstract from '../declarations/abstracts/CRUDWithAll';
import Pokemon from '../declarations/interfaces/Pokemon';
import InternalServerError from '../exceptions/InternalServerError';
import NoPokemonsRegistered from '../exceptions/NoPokemonsRegistered';
import PokemonAlreadyExists from '../exceptions/PokemonAlreadyExists';
import PokemonNotFound from '../exceptions/PokemonNotFound';
import PokemonModel from '../models/Pokemon';
import PokemonSchema from '../schemas/Pokemon';

/* global console */

/**
 * @module packages/backend/repositories/pokemon
 * @extends packages/backend/src/repositories/CRUD
 * @since 30/07/2021
 * @version 0.0.2
 */

class PokemonRepository extends CRUDWithAllAbstract {
  /**
   * @description POST, deve retornar 201 em sucesso
   * @param {Pokemon} data
   */
  async create(data: Pokemon): Promise<PokemonModel> {
    try {
      const {name} = data;
      const exists = await PokemonSchema.findOne({name}, {lean: true}).lean();

      if (exists) {
        throw new PokemonAlreadyExists(name);
      }

      const newPokemon = await PokemonSchema.create(data);
      return newPokemon;
    } catch (error) {
      // Caso seja seguro retornar o erro na API (não possui informações
      // sensíveis)
      if (error.returnErrorResponsexists) {
        throw error;
      } // else
      console.error(error.message);
      throw new InternalServerError();
    }
  }

  /**
   * @description GET, deve retornar 200 em sucesso
   * @param {string|any} unsafeId
   */
  async read(unsafeId: string): Promise<PokemonModel> {
    try {
      const id = String(unsafeId || '');
      // Retorna o modelo de Pokemon com todas as propriedades
      console.log(id);
      const pokemon = await PokemonSchema.findOne({_id: id}).lean();

      if (!pokemon) {
        throw new PokemonNotFound();
      }

      return pokemon;
    } catch (error) {
      // Caso seja seguro retornar o erro na API (não possui informações
      // sensíveis)
      if (error.returnErrorResponse) {
        throw error;
      } // else
      console.error(error.message);
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
      // Caso seja seguro retornar o erro na API (não possui informações
      // sensíveis)
      if (error.returnErrorResponse) {
        throw error;
      } // else
      console.error(error.message);
      throw new InternalServerError();
    }
  }

  /**
   * @description PUT, deve retornar 200 em sucesso e ter todas as
   * propriedades
   * @param {Pokemon} data
   */
  async updateAllProperties(
      unsafeId: string,
      data: Pokemon,
  ): Promise<PokemonModel> {
    try {
      const id = String(unsafeId || '');

      const updatedPokemon = await PokemonSchema.findByIdAndUpdate(
          id,
          data,
          {new: true, lean: true},
      );

      // verifica se o pokémon foi atualizado
      if (!updatedPokemon) {
        throw new PokemonNotFound();
      }

      return updatedPokemon;
    } catch (error) {
      // Caso seja seguro retornar o erro na API (não possui informações
      // sensíveis)
      if (error.returnErrorResponse) {
        throw error;
      } // else
      console.error(error.message);
      throw new InternalServerError();
    }
  }


  /**
   * @description PATCH, deve retornar 200 em sucesso e ter todas as
   * propriedades
   * @see {@link module:packages/backend/validatedDTOs/PokemonPartialDTO}
   * @param {Pokemon} data
   */
  async updatePartialProperties(
      unsafeId:
    string, data: Pokemon,
  ): Promise<PokemonModel> {
    try {
      const id = String(unsafeId || '');
      const pokemon = await PokemonSchema.findOne({_id: id}, {lean: true});

      // remove todas as propriedades presentes em data de pokemon
      const remainingData = Object.assign({}, pokemon, data);
      // preenche data com as propriedades de pokemon
      const updatedPokemonData = Object.assign({}, remainingData, data);

      if (!pokemon) {
        throw new PokemonNotFound();
      }

      const updatedPokemon = await PokemonSchema.findByIdAndUpdate(
          id,
          updatedPokemonData,
          {new: true, lean: true},
      );

      // verifica se o pokémon foi atualizado
      if (!updatedPokemon) {
        throw new PokemonNotFound();
      }

      return updatedPokemon;
    } catch (error) {
      // Caso seja seguro retornar o erro na API (não possui informações
      // sensíveis)
      if (error.returnErrorResponse) {
        throw error;
      } // else
      console.error(error.message);
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
      // Caso seja seguro retornar o erro na API (não possui informações
      // sensíveis)
      if (error.returnErrorResponse) {
        throw error;
      } // else
      console.error(error.message);
      throw new InternalServerError();
    }
  }

  /**
   * @description DELETE, executa uma lean query, deve retornar 200 em
   * sucesso e remove todos os Pokémons do sistema
   */
  async deleteAll(): Promise<boolean> {
    try {
      const deleted = await PokemonSchema.deleteMany({}, {lean: true}).lean();

      // verifica se todos os pokémons foram deletados
      if (!deleted) {
        throw new NoPokemonsRegistered();
      }

      return Boolean(deleted);
    } catch (error) {
      // Caso seja seguro retornar o erro na API (não possui informações
      // sensíveis)
      if (error.returnErrorResponsetered) {
        throw error;
      } // else
      console.error(error.message);
      throw new InternalServerError();
    }
  }
}

export default PokemonRepository;

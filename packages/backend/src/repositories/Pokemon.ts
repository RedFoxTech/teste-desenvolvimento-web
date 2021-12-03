import CRUDWithAllPaginationAbstract
  from '../declarations/abstracts/CRUDWithAllPagination';
import Pokemon from '../../../shared/declarations/interfaces/Pokemon';
import InternalServerError from '../exceptions/InternalServerError';
import NoPokemonsRegistered from '../exceptions/NoPokemonsRegistered';
import PokemonAlreadyExists from '../exceptions/PokemonAlreadyExists';
import PokemonNotFound from '../exceptions/PokemonNotFound';
import PokemonModel from '../models/Pokemon';
import PokemonSchema from '../schemas/Pokemon';
import {FilterQuery, Document} from 'mongoose';


/* global console */

/**
 * @description Coração de todas as interações CRUD, os repositórios
 * são responsáveis por interagir com o banco de dados de acordo com
 * as rotas. Os métodos estão ordenados da seguinte forma: CRUD
 * (create, read, update, delete), sendo que All sempre vem depois
 * da operação com um ítem.
 * @module packages/backend/repositories/Pokemon
 * @extends packages/backend/repositories/CRUD
 * @since 30/07/2021
 * @version 0.0.4
 */

class PokemonRepository extends CRUDWithAllPaginationAbstract {
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
      if (error.returnErrorResponse) {
        throw error;
      } // else
      console.error(error.message);
      throw new InternalServerError();
    }
  }

  /**
   * @description GET, deve retornar 200 em sucesso
   * @param {string|unknown} unsafeId
   */
  async read(unsafeId: string): Promise<PokemonModel> {
    try {
      const id = String(unsafeId || '');
      // Retorna o modelo de Pokemon com todas as propriedades
      const pokemon = await PokemonSchema.findOne(
          {_id: id},
      ).setOptions({lean: true}).lean();

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
      const pokemon = await PokemonSchema.find().lean();

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
   * @description GET All com paginação, deve retornar 200 em sucesso e também
   * o último ID da página
   * Nota: Devemos tomar cuidado com Off-By-One
   * @param {string|unknown} unsafeId - Vamos retornar uma página inteira que
   * vem depois desse ID
   */
  async readPages(unsafeId: string): Promise<Array<PokemonModel>> {
    try {
      const id = String(unsafeId || '');
      let criteria: FilterQuery<PokemonModel &
                     Document<unknown, unknown, unknown>> | undefined;
      if (id) {
        criteria = {_id: {$gt: id}};
      } else {
        // Se não o TypeScript chora
        criteria = undefined;
      }

      // Retorna o modelo de Pokemon com todas as propriedades
      const pokemon = await PokemonSchema.find(
          criteria || {},
      ).setOptions({lean: true}).limit(15).lean();

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


  /**
   * @description PATCH, deve retornar 200 em sucesso e pode não ter todas
   * as propriedades
   * @see {@link module:packages/backend/validatedDTOs/PokemonPartialDTO}
   * @param {string|unknown} unsafeId
   * @param {Pokemon} data
   */
  async updatePartialProperties(
      unsafeId: string,
      data: Pokemon,
  ): Promise<PokemonModel> {
    try {
      const id = String(unsafeId || '');
      const pokemon = await PokemonSchema.findOne(
          {_id: id},
          {lean: true},
      ).lean();

      if (!pokemon) {
        throw new PokemonNotFound();
      }

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
   * @description PUT, deve retornar 200 em sucesso e ter todas as
   * propriedades
   * @param {string|unknown} unsafeId
   * @param {Pokemon} data
   */
  async updateAllProperties(
      unsafeId: string,
      data: Pokemon,
  ): Promise<PokemonModel> {
    const id = String(unsafeId || '');

    try {
      const updatedPokemon = await PokemonSchema.replaceOne(
        id ? {_id: id} : {name: data.name},
        data,
      ).setOptions({
        new: true,
        // cria objeto caso não exista (comum no PUT)
        upsert: true,
        lean: true,
      }).lean();

      // verifica se o pokémon foi atualizado
      if (!updatedPokemon.n) {
        throw new PokemonNotFound();
      }

      const resultId = updatedPokemon.upserted?.[0]?._id || id;
      const modifiedPokemon = await PokemonSchema.findById(resultId).lean();

      if (!modifiedPokemon) {
        throw new InternalServerError(
            'Pokémon não encontrado após atualização!',
        );
      }
      return modifiedPokemon;
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
   * @param {string|unknown} unsafeId
   */
  async delete(unsafeId: string): Promise<boolean> {
    try {
      const id = String(unsafeId || '');
      const deleted = await PokemonSchema.findByIdAndRemove(
          id,
          {lean: true},
      ).lean();

      // verifica se o pokémon foi deletado
      if (!deleted) {
        throw new PokemonNotFound();
      }

      return Boolean(deleted);
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

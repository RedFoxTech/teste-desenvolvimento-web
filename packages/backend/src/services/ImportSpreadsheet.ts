// @ts-ignore A lib excel não tem suporte para o typescript
import parseXlsx from 'excel';
import PokemonRepository from '../repositories/Pokemon';
import Pokemon from '../declarations/interfaces/Pokemon';
import checkFileExistsAsync from './CheckFileExistsAsync';

/**
 * @fileoverview arquivo responsável por ler dados da planilha e importar
 * esses dados no MongoDB. Para importarmo, utilizaremos a função de
 * criação do repositório de Pokémons.
 * @see {@link module:packages/backend/services/exportSpreadsheet}
 * @see {@link module:packages/backend/middlewares/WatchSpreadSheet}
 * @see {@link module:packages/backend/repositories/Pokemon}
 * @see {@link module:packages/backend/models/Pokemon}
 * @see {@link module:packages/backend/services/CheckFileExistsAsync}
 * @see {@link https://www.npmjs.com/package/excel}
 * @requires excel
 * @since 01/08/2021
 * @version 0.0.1
 */

/* global __dirname */

class ImportSpreadsheet {
    private readonly pokemonRepository = new PokemonRepository();

    private async importIntoMongo(pokemons: Pokemon[]) {
        pokemons.forEach(async (pokemon) => {
            await this.pokemonRepository.create(pokemon);
        });
    }

    async importSpreadsheet(filePath = `${__dirname}/../../../../Pokemon Go.xlsx`) {
        if (await checkFileExistsAsync(filePath) === true) {
            /**  */
            const spreadsheetRange = await parseXlsx(filePath);
        }
    }
}

export default (new ImportSpreadsheet()).importSpreadsheet;

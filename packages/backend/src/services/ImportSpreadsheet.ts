// @ts-ignore A lib excel não tem suporte para o typescript
import parseXlsx from 'excel';
import PokemonRepository from '../repositories/Pokemon';
import Pokemon from '../../../shared//declarations/interfaces/Pokemon';
import PokemonType from '../../../shared/declarations/enums/PokemonType';
import PokemonWeather from '../../../shared/declarations/enums/Weather';
import checkFileExistsAsync from './CheckFileExistsAsync';
import fileNotFound from '../exceptions/FileNotFound';

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
 * @version 0.0.3
 */

/* global __dirname, console */

class ImportSpreadsheet {
    private readonly pokemonRepository = new PokemonRepository();

    private async importIntoMongo(pokemons: Pokemon[]) {
      pokemons.forEach(async (pokemon) => {
        await this.pokemonRepository.updateAllProperties('', pokemon);
      });
    }

    async importSpreadsheet(
        filePath = `${__dirname}/../../../../Pokemon Go.xlsx`,
    ): Promise<boolean | void> {
      if (await checkFileExistsAsync(filePath) === false) {
        throw new fileNotFound();
      }
      try {
        /** @type {Array<Array<string>>}  */
        const spreadsheetRange: Array<Array<string>> = await parseXlsx(
            filePath,
        );
        const pokemons = spreadsheetRange.map((spreadsheetLine) => {
          const pokemon: Pokemon = {
            row: parseInt(spreadsheetLine[0], 10),
            name: spreadsheetLine[1],
            pokedexId: parseInt(spreadsheetLine[2], 10),
            imageName: spreadsheetLine[3].endsWith('.0') ?
              `${parseInt(spreadsheetLine[3], 10)}` :
              spreadsheetLine[3],
            generation: spreadsheetLine[4].endsWith('.0') ?
            `${parseInt(spreadsheetLine[4], 10)}` :
            spreadsheetLine[4],
            evolutionState: spreadsheetLine[5].endsWith('.0') ?
            `${parseInt(spreadsheetLine[5], 10)}` :
            spreadsheetLine[5],
            evolved: spreadsheetLine[6] == '0' ? false : true,
            familyId: parseInt(spreadsheetLine[7], 10),
            crossGeneration: spreadsheetLine[8] == '0' ? false : true,
            type1: spreadsheetLine[9] as PokemonType,
            type2: spreadsheetLine[10] as PokemonType || undefined,
            weather1: spreadsheetLine[11] as PokemonWeather,
            weather2: <PokemonWeather> spreadsheetLine[12] || undefined,
            statsSum: parseInt(spreadsheetLine[13], 10),
            attack: parseInt(spreadsheetLine[14], 10),
            defense: parseInt(spreadsheetLine[15], 10),
            staminaHP: parseInt(spreadsheetLine[16], 10),
            legendary: spreadsheetLine[17] == '0' ? false : true,
            acquirable: spreadsheetLine[18] == '0' ? false : true,
            spawns: spreadsheetLine[19] == '0' ? false : true,
            regional: spreadsheetLine[20] == '0' ? false : true,
            raidable: parseInt(spreadsheetLine[21], 10),
            hatchable: parseInt(spreadsheetLine[22], 10),
            shiny: spreadsheetLine[23] == '0' ? false : true,
            nest: spreadsheetLine[24] == '0' ? false : true,
            isNewPokemon: spreadsheetLine[25] == '0' ? false : true,
            notGettable: spreadsheetLine[26] == '0' ? false : true,
            futureEvolve: spreadsheetLine[27] == '0' ? false : true,
            fullCPLevel39: parseInt(spreadsheetLine[28], 10),
            fullCPLevel40: parseInt(spreadsheetLine[29], 10),
          };
          return pokemon;
        });
        await this.importIntoMongo(pokemons);
        return true;
      } catch (error) {
        // a resposta não contém dados sensíveis e pode ser retornada na API
        if (error.returnErrorResponse) {
          throw error;
        } // else
        console.error(error);
      }
    }
}

const importSpreadsheet = new ImportSpreadsheet();

export default importSpreadsheet.importSpreadsheet.bind(importSpreadsheet);

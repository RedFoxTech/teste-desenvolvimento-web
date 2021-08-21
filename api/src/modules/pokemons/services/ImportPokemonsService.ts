import path from 'path';
import fs from 'fs';
import xlsx from 'xlsx';

import uploadConfig from '../../../shared/config/upload';
import AppError from "../../../shared/infra/errors/AppError";

import PokemonRepository from '../infra/typeorm/repositories/PokemonRepository';

import PokemonDataXlsxDTO from '../dtos/PokemonDataXlsxDTO';

class ImportPokemonsService {
    async importFromXlsx(file_name: string) {
        try {
            console.log("file_name", file_name);

            const pokemonsFilePath = path.resolve(uploadConfig.tmpFolder, file_name);

            const buffer = fs.readFileSync(pokemonsFilePath);
            const workBook = xlsx.read(buffer, { type: 'buffer'});

            const fisrtWorkSheetName = workBook.SheetNames[0];

            const pokemonsJSON: PokemonDataXlsxDTO[] = xlsx.utils.sheet_to_json(workBook.Sheets[fisrtWorkSheetName]);

            const pokemonRepository = new PokemonRepository();

            await Promise.all(pokemonsJSON.map(async pokemon => {
                const findedPokemon = await pokemonRepository.findPokemonByPokedexNumber(pokemon.pokedex_number);

                if(findedPokemon) {
                    return;
                }

                const {
                    name,
                    pokedex_number,
                    type_1,
                    type_2,
                    weather_1,
                    weather_2,
                    stat_total,
                    atk,
                    def,
                    sta,
                } = pokemon;

                const createdPokemon = await pokemonRepository.create({
                    name,
                    pokedex_number,
                    type_1,
                    type_2,
                    weather_1,
                    weather_2,
                    stat_total,
                    atk,
                    def,
                    sta,
                });

                return createdPokemon;
            }));

            return;
        } catch(err) {
            console.log(err);

            throw new AppError(err, 400);
        }
    }
};

export default ImportPokemonsService;
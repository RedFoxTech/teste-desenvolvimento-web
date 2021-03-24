import csvParse from "csv-parse";
import fs from "fs";

import { IPokemonsRepository } from "../../repositories/IPokemonRepository";

interface IImportPokemon {
  name: string;
  generation: number;
  evolution_stage: number;
  atk: number;
  def: number;
  type1: string;
  type2: string;
}

class ImportPokemonUseCase {
  constructor(private pokemonsRepository: IPokemonsRepository) { }

  loadPokemons(file: Express.Multer.File): Promise<IImportPokemon[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const pokemons: IImportPokemon[] = [];
      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, generation, evolution_stage, atk, def, type1, type2] = line;
          pokemons.push({
            name,
            generation,
            evolution_stage,
            atk,
            def,
            type1,
            type2,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(pokemons);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const pokemons = await this.loadPokemons(file);

    pokemons.map(async (pokemon) => {
      const { name, generation, evolution_stage, atk, def, type1, type2 } = pokemon;

      const existPokemon = this.pokemonsRepository.findByName(name);

      if (!existPokemon) {
        this.pokemonsRepository.create({
          name,
          generation,
          evolution_stage,
          atk,
          def,
          type1,
          type2,
        });
      }
    });
  }
}

export { ImportPokemonUseCase };
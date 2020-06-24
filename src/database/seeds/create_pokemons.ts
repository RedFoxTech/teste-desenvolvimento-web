import Knex from 'knex';
const xlsx = require('xlsx');
const path = require('path');

interface Pokemon {
'Row' : string;
'Name' : string;
'Pokedex Number' : string;
'Img name' : string;
'Generation' : string;
'Evolution Stage' : string;
'Evolved' : string;
'FamilyID' : string;
'Cross Gen' : string;
'Type 1' : string;
'Type 2' : string;
'Weather 1' : string;
'Weather 2' : string;
'STAT TOTAL' : string;
'ATK' : string;
'DEF' : string;
'STA' : string;
'Legendary' : string;
'Aquireable' : string;
'Spawns' : string;
'Regional' : string;
'Raidable' : string;
'Hatchable' : string;
'Shiny' : string;
'Nest' : string;
'New' : string;
'Not-Gettable' : string;
'Future Evolve' : string;
'100% CP @ 40' : string;
'100% CP @ 39' : string;

}

export async function seed(knex: Knex) {
    const filePath = path.resolve(__dirname, '..', '..', '..','Pokemon Go.xlsx');
    const obj = xlsx.readFile(filePath);
    const sheet_name_list = obj.SheetNames;
    const xlsxData = xlsx.utils.sheet_to_json(obj.Sheets[sheet_name_list[0]]);

    const pokemonsData = xlsxData.map((pokemon: Pokemon)  => ({
      'name': pokemon.Name,
      'pokedex_number': pokemon["Pokedex Number"],
      'img_name': pokemon["Img name"],
      'generation': pokemon.Generation,
      'evolution_stage': pokemon["Evolution Stage"],
      'evolved': pokemon.Evolved,
      'family_id': pokemon.FamilyID,
      'cross_gen': pokemon["Cross Gen"],
      'type_1': pokemon["Type 1"],
      'type_2': pokemon["Type 2"],
      'weather_1': pokemon["Weather 1"],
      'weather_2': pokemon["Weather 2"],
      'stat_total': pokemon["STAT TOTAL"],
      'atk': pokemon.ATK,
      'def': pokemon.DEF,
      'sta': pokemon.STA,
      'legendary': pokemon.Legendary,
      'aquireable': pokemon.Aquireable,
      'spawns': pokemon.Spawns,
      'regional': pokemon.Regional,
      'raidable': pokemon.Raidable,
      'hatchable': pokemon.Hatchable,
      'shiny': pokemon.Shiny,
      'nest': pokemon.Nest,
      'new': pokemon.New,
      'not_gettable': pokemon["Not-Gettable"],
      'future_evolve': pokemon["Future Evolve"],
      'cp_40': pokemon["100% CP @ 40"],
      'cp_39': pokemon["100% CP @ 39"]
    }));
  await knex('pokemons').insert(pokemonsData)
}

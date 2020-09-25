import xlsx from 'node-xlsx';
import Knex from 'knex';
import path from 'path';

export async function seed(knex: Knex) {
  const filePath = path.resolve(__dirname, 'PokemonGo.xlsx');
  const plan = xlsx.parse(filePath);
  // o splice tira o primeiro elemento, que sao os rotulos
  const table = plan[0].data.splice(1);

  for (let i = 0; i < table.length; i++) {
    const tupla: Array<any> = table[i];

    // foreign keys    
    const idGeneration = (await knex('tbGeneration').where('numberGeneration', '=', tupla[4]).select('idGeneration'))[0].idGeneration;

    const idFamily = (await knex('tbFamily').where('numberFamily', '=', (tupla[7] == null) ? 'none' : tupla[7]).select('idFamily'))[0].idFamily;

    const idEvolutionPokemon = (await knex('tbEvolutionPokemon').where('stageEvolutionPokemon', '=', (tupla[5] == null) ? 'none' : tupla[5]).select('idEvolutionPokemon'))[0].idEvolutionPokemon;

    // atributes
    const nomePokemon = tupla[1];
    const numberPokedexPokemon = tupla[2];
    const imgNamePokemon = tupla[3];
    const atkPokemon = tupla[14];
    const defPokemon = tupla[15];
    const staPokemon = tupla[16];
    const cp40Pokemon = tupla[28];
    const cp39Pokemon = tupla[29];

    // booleans
    const evolvedPokemon = tupla[6];
    const crossGenPokemon = tupla[8];
    const legendaryPokemon = tupla[17];
    const aquireablePokemon = tupla[18];
    const spawnsPokemon = tupla[19];
    const regionalPokemon = tupla[20];
    const shinyPokemon = tupla[23];
    const nestPokemon = tupla[24];
    const newPokemon = tupla[25];
    const notGettablePokemon = tupla[26];
    const futureEvolvePokemon = tupla[27];

    // pseudo boolean
    const raidablePokemon = tupla[21];
    const hatchablePokemon = tupla[22];

    // insert pokemon
    const idPokemon = (await knex('tbPokemon')
      .insert({
        idGeneration: idGeneration,
        idFamily: idFamily,
        idEvolutionPokemon: idEvolutionPokemon,
        nomePokemon: nomePokemon,
        numberPokedexPokemon: numberPokedexPokemon,
        imgNamePokemon: imgNamePokemon,
        atkPokemon: atkPokemon,
        defPokemon: defPokemon,
        staPokemon: staPokemon,
        cp40Pokemon: cp40Pokemon,
        cp39Pokemon: cp39Pokemon,
        evolvedPokemon: evolvedPokemon,
        crossGenPokemon: crossGenPokemon,
        legendaryPokemon: legendaryPokemon,
        aquireablePokemon: aquireablePokemon,
        spawnsPokemon: spawnsPokemon,
        regionalPokemon: regionalPokemon,
        shinyPokemon: shinyPokemon,
        nestPokemon: nestPokemon,
        newPokemon: newPokemon,
        notGettablePokemon: notGettablePokemon,
        futureEvolvePokemon: futureEvolvePokemon,
        raidablePokemon: raidablePokemon,
        hatchablePokemon: hatchablePokemon,
      }))[0];
      //lembra que o knex retorna um array de ids, ent usa o [0]

    // entidades associativas
    const typesPokemon = [
      (await knex('tbType').where('nomeType', '=', tupla[9]).select('idType'))[0].idType,
      (await knex('tbType').where('nomeType', '=', (tupla[10] == null)? 'none' : tupla[10]).select('idType'))[0].idType
    ];
    
    const weathersPokemon = [
      (await knex('tbWeather').where('nomeWeather', '=', tupla[11]).select('idWeather'))[0].idWeather,
      (await knex('tbWeather').where('nomeWeather', '=', (tupla[12] == null)? 'none' : tupla[12]).select('idWeather'))[0].idWeather
    ];

    //  inserindo os types
    await knex('tbTypesPokemon').insert([
      {
        idPokemon: idPokemon,
        idType: typesPokemon[0],
      },
      {
        idPokemon: idPokemon,
        idType: typesPokemon[1],
      },
    ]);
    
    //  inserindo os weathers
    await knex('tbWeatherPokemon').insert([
      {
        idPokemon: idPokemon,
        idWeather: weathersPokemon[0],
      },
      {
        idPokemon: idPokemon,
        idWeather: weathersPokemon[1],
      },
    ]);
  }

  console.log('All pokemons inserts done.');
}
import { Request, Response } from 'express';
import knex from '../database/connection';

export default class PokemonController {
  async all(req: Request, res: Response) {
    const types = await serializeTypes(
      await knex('tbPokemon')
        .join('tbTypesPokemon', 'tbPokemon.idPokemon', '=', 'tbTypesPokemon.idPokemon')
        .join('tbType', 'tbTypesPokemon.idType', '=', 'tbType.idType')
        .select('tbPokemon.idPokemon', 'tbType.nomeType')
    );

    const weathers = await serializeTypes(
      await knex('tbPokemon')
        .join('tbWeatherPokemon', 'tbPokemon.idPokemon', '=', 'tbWeatherPokemon.idPokemon')
        .join('tbWeather', 'tbWeatherPokemon.idWeather', '=', 'tbWeather.idWeather')
        .select('tbPokemon.idPokemon', 'tbWeather.nomeWeather')
    );

    const pokes = await knex('tbPokemon').select();

    const pokemons: Array<any> = [];
    for (let i = 0; i < pokes.length; i++) {

      pokemons.push(await formatValues(pokes[i], types, weathers));
    }

    return res.json(pokemons);
  }

  async type(req: Request, res: Response) {
    const type = req.params.type;

    const types = (await serializeTypes(
      await knex('tbPokemon')
        .join('tbTypesPokemon', 'tbPokemon.idPokemon', '=', 'tbTypesPokemon.idPokemon')
        .join('tbType', 'tbTypesPokemon.idType', '=', 'tbType.idType')
        .select('tbPokemon.idPokemon', 'tbType.nomeType'))
    );

    const auxTyped = (await knex('tbType').where('nomeType', '=', type).select('idType'));

    if (auxTyped.length == 0) return res.json({ error: 'pokemons are not found.' });

    const idTyped = auxTyped[0].idType;

    const weathers = await serializeTypes(
      await knex('tbPokemon')
        .join('tbWeatherPokemon', 'tbPokemon.idPokemon', '=', 'tbWeatherPokemon.idPokemon')
        .join('tbWeather', 'tbWeatherPokemon.idWeather', '=', 'tbWeather.idWeather')
        .select('tbPokemon.idPokemon', 'tbWeather.nomeWeather')
    );

    const pokes = await knex('tbPokemon')
      .join('tbTypesPokemon', 'tbPokemon.idPokemon', '=', 'tbTypesPokemon.idPokemon')
      .where('tbTypesPokemon.idType', '=', idTyped)
      .select('tbPokemon.*');

    const pokemons: Array<any> = [];
    for (let i = 0; i < pokes.length; i++) {

      pokemons.push(await formatValues(pokes[i], types, weathers));
    }

    return res.json(pokemons);
  }

  async weather(req: Request, res: Response) {
    const weather = req.params.weather;

    const types = (await serializeTypes(
      await knex('tbPokemon')
        .join('tbTypesPokemon', 'tbPokemon.idPokemon', '=', 'tbTypesPokemon.idPokemon')
        .join('tbType', 'tbTypesPokemon.idType', '=', 'tbType.idType')
        .select('tbPokemon.idPokemon', 'tbType.nomeType'))
    );

    const auxWeathered = (await knex('tbWeather').where('nomeWeather', '=', weather).select('idWeather'));

    if (auxWeathered.length == 0) return res.json({ error: 'pokemons are not found.' });

    const idWeathered = auxWeathered[0].idWeather;

    const weathers = await serializeTypes(
      await knex('tbPokemon')
        .join('tbWeatherPokemon', 'tbPokemon.idPokemon', '=', 'tbWeatherPokemon.idPokemon')
        .join('tbWeather', 'tbWeatherPokemon.idWeather', '=', 'tbWeather.idWeather')
        .select('tbPokemon.idPokemon', 'tbWeather.nomeWeather')
    );

    const pokes = await knex('tbPokemon')
      .join('tbWeatherPokemon', 'tbPokemon.idPokemon', '=', 'tbWeatherPokemon.idPokemon')
      .where('tbWeatherPokemon.idWeather', '=', idWeathered)
      .select('tbPokemon.*');

    const pokemons: Array<any> = [];
    for (let i = 0; i < pokes.length; i++) {

      pokemons.push(await formatValues(pokes[i], types, weathers));
    }

    return res.json(pokemons);
  }
  
  async find(req: Request, res: Response) {
    const search = req.params.search;

    const types = (await serializeTypes(
      await knex('tbPokemon')
        .join('tbTypesPokemon', 'tbPokemon.idPokemon', '=', 'tbTypesPokemon.idPokemon')
        .join('tbType', 'tbTypesPokemon.idType', '=', 'tbType.idType')
        .select('tbPokemon.idPokemon', 'tbType.nomeType'))
    );

    const weathers = await serializeTypes(
      await knex('tbPokemon')
        .join('tbWeatherPokemon', 'tbPokemon.idPokemon', '=', 'tbWeatherPokemon.idPokemon')
        .join('tbWeather', 'tbWeatherPokemon.idWeather', '=', 'tbWeather.idWeather')
        .select('tbPokemon.idPokemon', 'tbWeather.nomeWeather')
    );

    const pokes = await knex('tbPokemon')
      .where('tbPokemon.nomePokemon', 'like', `${search}%`)
      .select();

    if (pokes.length == 0) return res.json({error: 'Pokemons not found.'});

    const pokemons: Array<any> = [];
    for (let i = 0; i < pokes.length; i++) {

      pokemons.push(await formatValues(pokes[i], types, weathers));
    }

    return res.json(pokemons);
  }
}

function serializeTypes(values: Array<any>) {
  let array: Array<any> = [];

  for (let i: number = 0; i < values.length; i += 2) {
    const element1 = Object.entries(values[i]);
    const element2 = Object.entries(values[i + 1]);

    const typed = {
      type1: element1[1][1],
      type2: element2[1][1],
    }
    array.push(typed);
  }

  return array;
}

async function formatValues(pokemon: any, types: any, weathers: any) {
  const generation = await (await knex('tbGeneration')
    .join('tbPokemon', 'tbGeneration.idGeneration', '=', 'tbPokemon.idGeneration')
    .where('tbGeneration.idGeneration', '=', pokemon.idGeneration)
    .select('tbGeneration.numberGeneration'));

  const family = await (await knex('tbFamily')
    .join('tbPokemon', 'tbFamily.idFamily', '=', 'tbPokemon.idFamily')
    .where('tbFamily.idFamily', '=', pokemon.idFamily)
    .select('tbFamily.numberFamily'));

  const evolutionPokemon = await (await knex('tbEvolutionPokemon')
    .join('tbPokemon', 'tbEvolutionPokemon.idEvolutionPokemon', '=', 'tbPokemon.idEvolutionPokemon')
    .where('tbEvolutionPokemon.idEvolutionPokemon', '=', pokemon.idEvolutionPokemon)
    .select('tbEvolutionPokemon.stageEvolutionPokemon'));

  return {
    nome: pokemon.nomePokemon,
    numberPokedex: pokemon.numberPokedexPokemon,
    img: pokemon.imgNamePokemon,
    atk: pokemon.atkPokemon,
    def: pokemon.defPokemon,
    sta: pokemon.staPokemon,
    cp40: pokemon.cp40Pokemon,
    cp39: pokemon.cp39Pokemon,

    evolved: pokemon.evolvedPokemon,
    crossGen: pokemon.crossGenPokemon,
    legendary: pokemon.legendaryPokemon,
    aquireable: pokemon.aquireablePokemon,
    spawns: pokemon.spawnsPokemon,
    regional: pokemon.regionalPokemon,
    shiny: pokemon.shinyPokemon,
    nest: pokemon.nestPokemon,
    new: pokemon.newPokemon,
    notGettable: pokemon.notGettablePokemon,
    futureEvolve: pokemon.futureEvolvePokemon,

    raidable: pokemon.raidablePokemon,
    hatchable: pokemon.hatchablePokemon,

    types: types[pokemon.idPokemon - 1],
    weathers: weathers[pokemon.idPokemon - 1],

    generation: generation[0].numberGeneration,
    family: family[0].numberFamily,
    stage: evolutionPokemon[0].stageEvolutionPokemon,
  }
}
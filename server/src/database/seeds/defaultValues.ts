import xlsx from 'node-xlsx';
import Knex from 'knex';
import path from 'path';

export async function seed(knex: Knex) {

	// types
	let auxTypes = await getCollumsValues(['none'], 9);
	const types = await getCollumsValues(auxTypes, 10);

	// weathers
	let auxWeathers = await getCollumsValues(['none'], 11);
	const weathers = await getCollumsValues(auxWeathers, 12);

	// generations
	const generations = await getCollumsValues([], 4);

	// families
	const families = await getCollumsValues(['none'], 7);

	// evolution stage
	const evolutionsStage = await getCollumsValues(['none'], 5);

	await types.map(async (item) => {
		await knex('tbType')
			.insert({ nomeType: item });
	});

	await weathers.map(async (item) => {
		await knex('tbWeather')
			.insert({ nomeWeather: item });
	});

	await generations.map(async (item) => {
		await knex('tbGeneration')
			.insert({ numberGeneration: item });
	});

	await families.map(async (item) => {
		await knex('tbFamily')
			.insert({ numberFamily: item });
	});

	await evolutionsStage.map(async (item) => {
		await knex('tbEvolutionPokemon')
			.insert({ stageEvolutionPokemon: item });
	});

	await knex('tbWeather')
		.where('nomeWeather', '=', 'Sunny/clear')
		.update({ nomeWeather: 'Sunny_clear' });

	(await knex.transaction()).commit();

	console.log('All default values inserts done.')
}

function getCollumsValues(array: Array<any>, collumIndex: any) {
	const filePath = path.resolve(__dirname, 'PokemonGo.xlsx');
	const plan = xlsx.parse(filePath);
	let values: Array<any> = [];
	if (array.length > 0) values = array;
	// o splice tira o primeiro elemento, que sao os rotulos
	const table = plan[0].data.splice(1);
	table.map((tuple: Array<any>) => {
		if (values.indexOf(tuple[collumIndex]) == -1 &&
			tuple[collumIndex] != undefined) {
			values.push(tuple[collumIndex]);
		}
	});

	return values;
}
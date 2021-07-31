import xlsx from "node-xlsx";
import express from "express";
import axios from "axios";
import * as types from "./types";

const app = express();

app.get('/getPokemons', (req, res) => {
    const pokemonsList = xlsx.parse("./Pokemon Go.xlsx");
    res.json(pokemonsList);
});

app.get('/getPokemonAbilities', async (req, res) => {
    const pokemonId: string = req.query.id as string;

    res.json(await getPokemonAbilities(+pokemonId));
});

async function getPokemonAbilities(pokemonId: number) {
    try {
        var response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        console.log(response.data);
        var pokemon = response.data;
        var abilities = [];

        for (var currentAbility of pokemon.abilities) {
            var ability = await getAbility(currentAbility.ability.name);
            abilities.push(ability);
        }

        return abilities;
    } catch (e) {
        console.log(e);
    }
}

async function getAbility(abilityName: string): Promise<types.PokemonAbility> {
    var response = await axios.get(`https://pokeapi.co/api/v2/ability/${abilityName}/`);

    var ability = response.data;

    var effectEntry = ability.effect_entries.find((entry: any) => entry.language.name === "en");
    return {
        Name: ability.name,
        Effect: effectEntry.effect,
    }
}

console.log("server running");

app.listen(5000, () => `Server running on port ${5000}`);
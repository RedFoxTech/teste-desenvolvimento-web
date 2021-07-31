"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_xlsx_1 = __importDefault(require("node-xlsx"));
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = express_1.default();
app.get('/getPokemons', (req, res) => {
    const pokemonsList = node_xlsx_1.default.parse("./Pokemon Go.xlsx");
    res.json(pokemonsList);
});
app.get('/getPokemonAbilities', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonId = req.query.id;
    res.json(yield getPokemonAbilities(+pokemonId));
}));
function getPokemonAbilities(pokemonId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var response = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
            console.log(response.data);
            var pokemon = response.data;
            var abilities = [];
            for (var currentAbility of pokemon.abilities) {
                var ability = yield getAbility(currentAbility.ability.name);
                abilities.push(ability);
            }
            return abilities;
        }
        catch (e) {
            console.log(e);
        }
    });
}
function getAbility(abilityName) {
    return __awaiter(this, void 0, void 0, function* () {
        var response = yield axios_1.default.get(`https://pokeapi.co/api/v2/ability/${abilityName}/`);
        var ability = response.data;
        var effectEntry = ability.effect_entries.find((entry) => entry.language.name === "en");
        return {
            Name: ability.name,
            Effect: effectEntry.effect,
        };
    });
}
console.log("server running");
app.listen(5000, () => `Server running on port ${5000}`);

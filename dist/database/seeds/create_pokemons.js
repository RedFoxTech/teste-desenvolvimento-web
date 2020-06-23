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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
var xlsx = require('xlsx');
var path = require('path');
function seed(knex) {
    return __awaiter(this, void 0, void 0, function () {
        var filePath, obj, sheet_name_list, xlsxData, pokemonsData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filePath = path.resolve(__dirname, '..', '..', '..', 'Pokemon Go.xlsx');
                    obj = xlsx.readFile(filePath);
                    sheet_name_list = obj.SheetNames;
                    xlsxData = xlsx.utils.sheet_to_json(obj.Sheets[sheet_name_list[0]]);
                    pokemonsData = xlsxData.map(function (pokemon) { return ({
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
                    }); });
                    return [4 /*yield*/, knex('pokemons').insert(pokemonsData)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.seed = seed;

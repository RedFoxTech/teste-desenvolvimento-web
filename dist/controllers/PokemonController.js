"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var knex = require('../database/connection.js');
var PokemonController = /** @class */ (function () {
    function PokemonController() {
    }
    PokemonController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, filter, _b, page, _c, limit, count, pokemons, serializedPokemons;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = request.query, filter = _a.filter, _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 20 : _c;
                        return [4 /*yield*/, knex('pokemons').count('id')];
                    case 1:
                        count = (_d.sent())[0];
                        pokemons = [];
                        response.set('x-total-count', count['count']);
                        if (!!filter) return [3 /*break*/, 3];
                        return [4 /*yield*/, knex.select()
                                .from('pokemons')
                                .limit(Number(limit))
                                .offset((Number(page) - 1) * Number(limit))
                                .orderBy('id')];
                    case 2:
                        pokemons = _d.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, knex.select()
                            .from('pokemons')
                            .where('name', 'ilike', "%" + filter + "%")
                            .orWhere('type_1', 'ilike', "%" + filter + "%")
                            .orWhere('type_2', 'ilike', "%" + filter + "%")
                            .limit(Number(limit))
                            .offset((Number(page) - 1) * Number(limit))
                            .orderBy('id')];
                    case 4:
                        pokemons = _d.sent();
                        _d.label = 5;
                    case 5:
                        serializedPokemons = pokemons.map(function (pokemon) {
                            return __assign(__assign({}, pokemon), { image_url: Number.isInteger(Number(pokemon.img_name)) ? null : "http://localhost:3333/uploads/" + pokemon.img_name });
                        });
                        return [2 /*return*/, response.json(serializedPokemons)];
                }
            });
        });
    };
    PokemonController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, pokemon, serializedPokemon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, knex.select().from('pokemons').where('id', id).first()];
                    case 1:
                        pokemon = _a.sent();
                        serializedPokemon = __assign(__assign({}, pokemon), { image_url: Number.isInteger(Number(pokemon.img_name)) ? null : "http://localhost:3333/uploads/" + pokemon.img_name });
                        return [2 /*return*/, response.status(200).json(serializedPokemon)];
                }
            });
        });
    };
    PokemonController.prototype.create = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var data, responseData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = {
                            name: request.body.name,
                            pokedex_number: request.body.pokedex_number,
                            generation: request.body.generation,
                            evolution_stage: request.body.evolution_stage,
                            evolved: request.body.evolved,
                            family_id: request.body.family_id,
                            cross_gen: request.body.cross_gen,
                            type_1: request.body.type_1,
                            type_2: request.body.type_2,
                            weather_1: request.body.weather_1,
                            weather_2: request.body.weather_2,
                            stat_total: request.body.stat_total,
                            atk: request.body.atk,
                            def: request.body.def,
                            sta: request.body.sta,
                            legendary: request.body.legendary,
                            aquireable: request.body.aquireable,
                            spawns: request.body.spawns,
                            regional: request.body.regional,
                            raidable: request.body.raidable,
                            hatchable: request.body.hatchable,
                            shiny: request.body.shiny,
                            nest: request.body.nest,
                            new: request.body.new,
                            not_gettable: request.body.not_gettable,
                            future_evolve: request.body.future_evolve,
                            cp_40: request.body.cp_40,
                            cp_39: request.body.cp_39,
                            img_name: (_a = request === null || request === void 0 ? void 0 : request.file) === null || _a === void 0 ? void 0 : _a.filename
                        };
                        return [4 /*yield*/, knex('pokemons').insert(data)];
                    case 1:
                        responseData = _b.sent();
                        return [2 /*return*/, response.status(200).json(responseData)];
                }
            });
        });
    };
    PokemonController.prototype.update = function (request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var id, data, responseData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        data = {
                            name: request.body.name,
                            pokedex_number: request.body.pokedex_number,
                            generation: request.body.generation,
                            evolution_stage: request.body.evolution_stage,
                            evolved: request.body.evolved,
                            family_id: request.body.family_id,
                            cross_gen: request.body.cross_gen,
                            type_1: request.body.type_1,
                            type_2: request.body.type_2,
                            weather_1: request.body.weather_1,
                            weather_2: request.body.weather_2,
                            stat_total: request.body.stat_total,
                            atk: request.body.atk,
                            def: request.body.def,
                            sta: request.body.sta,
                            legendary: request.body.legendary,
                            aquireable: request.body.aquireable,
                            spawns: request.body.spawns,
                            regional: request.body.regional,
                            raidable: request.body.raidable,
                            hatchable: request.body.hatchable,
                            shiny: request.body.shiny,
                            nest: request.body.nest,
                            new: request.body.new,
                            not_gettable: request.body.not_gettable,
                            future_evolve: request.body.future_evolve,
                            cp_40: request.body.cp_40,
                            cp_39: request.body.cp_39,
                            img_name: (_a = request === null || request === void 0 ? void 0 : request.file) === null || _a === void 0 ? void 0 : _a.filename
                        };
                        return [4 /*yield*/, knex('pokemons').where('id', id).update(data)];
                    case 1:
                        responseData = _b.sent();
                        return [2 /*return*/, response.status(200).json(responseData)];
                }
            });
        });
    };
    PokemonController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, knex('pokemons').where('id', id).del()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.status(204).send()];
                }
            });
        });
    };
    return PokemonController;
}());
exports.default = PokemonController;

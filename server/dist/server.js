"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_xlsx_1 = __importDefault(require("node-xlsx"));
const app = express_1.default();
app.get("getPokemons", (req, res) => {
    try {
        const pokemonsList = node_xlsx_1.default.parse("../Pokemon Go.xlsx");
        console.log(pokemonsList);
        res.json(pokemonsList);
    }
    catch (e) {
        console.log(e);
    }
});
app.get("a", (req, res) => {
    res.json("HELLO");
});
console.log("8484");
app.listen(8484, () => `Server running on port ${8484}`);

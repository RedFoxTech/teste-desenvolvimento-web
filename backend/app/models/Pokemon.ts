import mongoose, { Schema, Document } from "mongoose";

export interface PokemonInterface extends Document {
  Row: Number;
  Name: String;
  "Pokedex Number": Number;
  "Img name": Number;
  Generation: Number;
  "Evolution Stage": Number;
  Evolved: Boolean;
  FamilyID: Number;
  "Cross Gen": Boolean;
  "Type 1": String;
  "Type 2"?: String;
  "Weather 1": String;
  "Weather 2"?: String;
  "STAT TOTAL": Number;
  ATK: Number;
  DEF: Number;
  STA: Number;
  Legendary: Boolean;
  Aquireable: Number;
  Spawns: Boolean;
  Regional: Boolean;
  Raidable: Boolean;
  Hatchable: Number;
  Shiny: Boolean;
  Nest: Boolean;
  New: Boolean;
  "Not-Gettable": Boolean;
  "Future Evolve": Boolean;
  "100% CP @ 40": Number;
  "100% CP @ 39": Number;
}

const PokemonSchema: Schema = new Schema({
  Row: { type: String, required: true },
  Name: { type: String, required: true },
  "Pokedex Number": { type: String, required: true },
  "Img name": { type: String, required: true },
  Generation: { type: String, required: true },
  "Evolution Stage": { type: String, required: true },
  Evolved: { type: String, required: true },
  FamilyID: { type: String, required: true },
  "Cross Gen": { type: String, required: true },
  "Type 1": { type: String, required: true },
  "Type 2": { type: String },
  "Weather 1": { type: String, required: true },
  "Weather 2": { type: String },
  "STAT TOTAL": { type: String, required: true },
  ATK: { type: String, required: true },
  DEF: { type: String, required: true },
  STA: { type: String, required: true },
  Legendary: { type: String, required: true },
  Aquireable: { type: String, required: true },
  Spawns: { type: String, required: true },
  Regional: { type: String, required: true },
  Raidable: { type: String, required: true },
  Hatchable: { type: String, required: true },
  Shiny: { type: String, required: true },
  Nest: { type: String, required: true },
  New: { type: String, required: true },
  "Not-Gettable": { type: String, required: true },
  "Future Evolve": { type: String, required: true },
  "100% CP @ 40": { type: String, required: true },
  "100% CP @ 39": { type: String, required: true },
});

export default mongoose.model<PokemonInterface>("Pokemon", PokemonSchema);

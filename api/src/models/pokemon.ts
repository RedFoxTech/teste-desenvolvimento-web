import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IPokemon {
  _id?: string;
  Row: number;
  Name: string;
  'Pokedex Number': number;
  'Img name': string;
  Generation: number;
  'Evolution Stage': string;
  Evolved: number;
  FamilyID: number;
  'Cross Gen': number;
  'Type 1': string;
  'Type 2': string;
  'Weather 1': string;
  'Weather 2': string;
  'STAT TOTAL': number;
  ATK: number;
  DEF: number;
  STA: number;
  Legendary: number;
  Aquireable: number;
  Spawns: number;
  Regional: number;
  Raidable: number;
  Hatchable: number;
  Shiny: number;
  Nest: number;
  New: number;
  'Not-Gettable': number;
  'Future Evolve': number;
  '100% CP @ 40': number;
  '100% CP @ 39': number;
}

interface PokemonModel extends Omit<IPokemon, '_id'>, Document {}

const schema = new Schema({
  Row: {
    type: Number
  },
  Name: {
    type: String,
    unique: [true, 'Name most be unique'],
    required: true
  },
  'Pokedex Number': {
    type: Number
  },
  'Img name': {
    type: String,
    default: ''
  },
  Generation: {
    type: Number,
    default: 0
  },
  'Evolution Stage': {
    type: String,
    default: ''
  },
  Evolved: {
    type: Number,
    default: 0
  },
  FamilyID: {
    type: Number,
    default: 0
  },
  'Cross Gen': {
    type: Number,
    default: 0
  },
  'Type 1': {
    type: String,
    default: ''
  },
  'Type 2': {
    type: String,
    default: ''
  },
  'Weather 1': {
    type: String,
    default: ''
  },
  'Weather 2': {
    type: String,
    default: ''
  },
  'STAT TOTAL': {
    type: Number,
    default: 0
  },
  ATK: {
    type: Number,
    default: 0
  },
  DEF: {
    type: Number,
    default: 0
  },
  STA: {
    type: Number,
    default: 0
  },
  Legendary: {
    type: Number,
    default: 0
  },
  Aquireable: {
    type: Number,
    default: 0
  },
  Spawns: {
    type: Number,
    default: 0
  },
  Regional: {
    type: Number,
    default: 0
  },
  Raidable: {
    type: Number,
    default: 0
  },
  Hatchable: {
    type: Number,
    default: 0
  },
  Shiny: {
    type: Number,
    default: 0
  },
  Nest: {
    type: Number,
    default: 0
  },
  New: {
    type: Number,
    default: 0
  },
  'Not-Gettable': {
    type: Number,
    default: 0
  },
  'Future Evolve': {
    type: Number,
    default: 0
  },
  '100% CP @ 40': {
    type: Number,
    default: 0
  },
  '100% CP @ 39': {
    type: Number,
    default: 0
  }
})

export const Pokemon: Model<PokemonModel> = mongoose.model('Pokemon', schema)
